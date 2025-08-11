'use server';

/**
 * @fileOverview AI flow to suggest destinations based on user preferences.
 *
 * - dreamDestinationGenerator - A function that handles the destination suggestion process.
 * - DreamDestinationInput - The input type for the dreamDestinationGenerator function.
 * - DreamDestinationOutput - The return type for the dreamDestinationGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DreamDestinationInputSchema = z.object({
  travelStyle: z
    .string()
    .describe('Preferred travel style (e.g., adventure, relaxation, luxury, culture).'),
  interests: z
    .string()
    .describe('Specific interests (e.g., hiking, beaches, historical sites, fine dining).'),
  budget: z.string().describe('Budget range (e.g., budget, moderate, luxury).'),
  timeOfYear: z.string().describe('Preferred time of year to travel (e.g., summer, winter).'),
});
export type DreamDestinationInput = z.infer<typeof DreamDestinationInputSchema>;

const DreamDestinationOutputSchema = z.object({
  destination: z.string().describe('The suggested destination.'),
  description: z.string().describe('A brief description of the destination.'),
  hotelSuggestion: z.string().describe('A suggested hotel at the destination with a link to booking.'),
  pointsOfInterest: z
    .string()
    .describe('Interesting places to visit at the destination with links for booking.'),
});
export type DreamDestinationOutput = z.infer<typeof DreamDestinationOutputSchema>;

export async function dreamDestinationGenerator(input: DreamDestinationInput): Promise<DreamDestinationOutput>
{
  return dreamDestinationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dreamDestinationPrompt',
  input: {schema: DreamDestinationInputSchema},
  output: {schema: DreamDestinationOutputSchema},
  prompt: `Suggest a dream destination based on the following preferences:

Travel Style: {{{travelStyle}}}
Interests: {{{interests}}}
Budget: {{{budget}}}
Time of Year: {{{timeOfYear}}}

Include a brief description of the destination, a suggested hotel with a booking link, and interesting places to visit with links for booking.`,
});

const dreamDestinationFlow = ai.defineFlow(
  {
    name: 'dreamDestinationFlow',
    inputSchema: DreamDestinationInputSchema,
    outputSchema: DreamDestinationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
