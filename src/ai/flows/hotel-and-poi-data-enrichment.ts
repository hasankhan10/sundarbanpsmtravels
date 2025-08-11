'use server';
/**
 * @fileOverview Provides rich data on hotels and points of interest using AI for a suggested destination.
 *
 * - enrichDestinationData - A function that enriches destination data with hotel and POI information.
 * - EnrichDestinationDataInput - The input type for the enrichDestinationData function.
 * - EnrichDestinationDataOutput - The return type for the enrichDestinationData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnrichDestinationDataInputSchema = z.object({
  destinationName: z.string().describe('The name of the destination to enrich with data.'),
});
export type EnrichDestinationDataInput = z.infer<typeof EnrichDestinationDataInputSchema>;

const EnrichDestinationDataOutputSchema = z.object({
  hotelData: z.array(
    z.object({
      name: z.string().describe('The name of the hotel.'),
      description: z.string().describe('A description of the hotel.'),
      bookingLink: z.string().url().describe('A direct link for booking the hotel.'),
    })
  ).describe('Rich data on hotels in the destination.'),
  poiData: z.array(
    z.object({
      name: z.string().describe('The name of the point of interest.'),
      description: z.string().describe('A description of the point of interest.'),
      link: z.string().url().describe('A direct link for more information about the point of interest.'),
    })
  ).describe('Rich data on points of interest in the destination.'),
});
export type EnrichDestinationDataOutput = z.infer<typeof EnrichDestinationDataOutputSchema>;

export async function enrichDestinationData(input: EnrichDestinationDataInput): Promise<EnrichDestinationDataOutput> {
  return enrichDestinationDataFlow(input);
}

const enrichDestinationDataPrompt = ai.definePrompt({
  name: 'enrichDestinationDataPrompt',
  input: {schema: EnrichDestinationDataInputSchema},
  output: {schema: EnrichDestinationDataOutputSchema},
  prompt: `You are an AI travel assistant. Your task is to provide rich data on hotels and points of interest (POIs) for a given destination.

  Destination: {{{destinationName}}}

  Provide a list of hotels with their names, descriptions, and direct booking links.
  Also, provide a list of points of interest with their names, descriptions, and links for more information.
  Make sure all the links are valid and directly relevant to the described hotels and POIs.

  Ensure the output is well-formatted and easy to read.
  Be concise with your descriptions.
  Do not include introductory or concluding sentences.
  Simply provide the hotel and POI data.
  Make sure bookingLink and link values are valid URLs.

  Here is an example of the desired output format:
  {
    "hotelData": [
      {
        "name": "Luxury Hotel Name",
        "description": "A luxurious hotel with stunning views and excellent service.",
        "bookingLink": "https://example.com/luxuryhotel"
      },
      {
        "name": "Budget Hotel Name",
        "description": "A budget-friendly hotel with comfortable rooms.",
        "bookingLink": "https://example.com/budgethotel"
      }
    ],
    "poiData": [
      {
        "name": "Famous Landmark",
        "description": "A famous landmark with historical significance.",
        "link": "https://example.com/landmark"
      },
      {
        "name": "Local Museum",
        "description": "A local museum showcasing regional art and history.",
        "link": "https://example.com/museum"
      }
    ]
  }`,
});

const enrichDestinationDataFlow = ai.defineFlow(
  {
    name: 'enrichDestinationDataFlow',
    inputSchema: EnrichDestinationDataInputSchema,
    outputSchema: EnrichDestinationDataOutputSchema,
  },
  async input => {
    const {output} = await enrichDestinationDataPrompt(input);
    return output!;
  }
);
