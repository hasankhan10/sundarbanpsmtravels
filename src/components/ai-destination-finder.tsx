"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Search, Wand2, Hotel, Landmark, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { DreamDestinationOutput } from "@/ai/flows/dream-destination-generator";
import { dreamDestinationGenerator } from "@/ai/flows/dream-destination-generator";
import type { EnrichDestinationDataOutput } from "@/ai/flows/hotel-and-poi-data-enrichment";
import { enrichDestinationData } from "@/ai/flows/hotel-and-poi-data-enrichment";
import { Separator } from "./ui/separator";

const formSchema = z.object({
  travelStyle: z.string().min(1, "Travel style is required."),
  interests: z.string().min(1, "Interests are required."),
  budget: z.string().min(1, "Budget is required."),
  timeOfYear: z.string().min(1, "Time of year is required."),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiDestinationFinder() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnriching, setIsEnriching] = useState(false);
  const [result, setResult] = useState<DreamDestinationOutput | null>(null);
  const [enrichedData, setEnrichedData] = useState<EnrichDestinationDataOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      travelStyle: "",
      interests: "",
      budget: "",
      timeOfYear: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setResult(null);
    setEnrichedData(null);
    try {
      const response = await dreamDestinationGenerator(values);
      setResult(response);
    } catch (error) {
      console.error("Error generating destination:", error);
      toast({
        title: "Error",
        description: "Failed to generate a destination. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleEnrichData = async () => {
    if (!result?.destination) return;
    setIsEnriching(true);
    try {
      const response = await enrichDestinationData({ destinationName: result.destination });
      setEnrichedData(response);
    } catch (error) {
      console.error("Error enriching data:", error);
      toast({
        title: "Error",
        description: "Failed to get more details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsEnriching(false);
    }
  };

  return (
    <section id="book" className="w-full py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary md:text-5xl">
            Find Your Dream Escape
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Let our AI craft a personalized journey just for you.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm border-secondary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <Wand2 className="text-secondary" />
                  Tell Us Your Travel Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="travelStyle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Travel Style</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="e.g., Adventure, Relaxation" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="adventure">Adventure</SelectItem>
                              <SelectItem value="relaxation">Relaxation</SelectItem>
                              <SelectItem value="luxury">Luxury</SelectItem>
                              <SelectItem value="culture">Culture</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interests</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="e.g., Hiking, Beaches" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="hiking">Hiking</SelectItem>
                              <SelectItem value="beaches">Beaches</SelectItem>
                              <SelectItem value="historical sites">Historical Sites</SelectItem>
                              <SelectItem value="fine dining">Fine Dining</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="e.g., Moderate, Luxury" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="budget">Budget</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="luxury">Luxury</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="timeOfYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time of Year</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="e.g., Summer, Winter" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="spring">Spring</SelectItem>
                              <SelectItem value="summer">Summer</SelectItem>
                              <SelectItem value="autumn">Autumn</SelectItem>
                              <SelectItem value="winter">Winter</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      {isLoading ? <Loader2 className="animate-spin" /> : "Discover My Destination"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <Loader2 className="w-16 h-16 text-secondary animate-spin" />
                <p className="font-headline text-xl text-primary">Crafting your perfect getaway...</p>
              </div>
            )}
            {!isLoading && !result && (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-card/50 rounded-lg border-2 border-dashed">
                <Search className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="font-headline text-2xl text-primary">Your adventure awaits</h3>
                <p className="text-muted-foreground">Fill out the form to get a personalized travel suggestion.</p>
              </div>
            )}
            {result && (
              <div className="space-y-6">
                <Card className="bg-card/80 backdrop-blur-sm border-secondary/20 shadow-lg animate-in fade-in duration-500">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">{result.destination}</CardTitle>
                    <CardDescription>{result.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Hotel Suggestion</h4>
                      <a href={result.hotelSuggestion} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
                        Book Your Stay <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Points of Interest</h4>
                      <a href={result.pointsOfInterest} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
                        Explore Activities <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <Separator className="my-6" />
                    <Button onClick={handleEnrichData} disabled={isEnriching} className="w-full">
                      {isEnriching ? <Loader2 className="animate-spin" /> : "Show More Hotels & Activities"}
                    </Button>
                  </CardContent>
                </Card>
                
                {isEnriching && !enrichedData && (
                  <div className="flex flex-col items-center justify-center h-full gap-4 pt-8">
                    <Loader2 className="w-12 h-12 text-secondary animate-spin" />
                    <p className="font-headline text-lg text-primary">Finding more options...</p>
                  </div>
                )}
                
                {enrichedData && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    {enrichedData.hotelData?.length > 0 && (
                      <Card className="bg-card/80 backdrop-blur-sm border-secondary/20 shadow-lg">
                        <CardHeader>
                          <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2"><Hotel className="text-secondary"/> More Hotels</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {enrichedData.hotelData.map((hotel, index) => (
                            <div key={index} className="p-4 rounded-lg border bg-background">
                              <h5 className="font-bold">{hotel.name}</h5>
                              <p className="text-sm text-muted-foreground mb-2">{hotel.description}</p>
                              <a href={hotel.bookingLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
                                Book Now <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    )}
                    {enrichedData.poiData?.length > 0 && (
                       <Card className="bg-card/80 backdrop-blur-sm border-secondary/20 shadow-lg">
                        <CardHeader>
                          <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2"><Landmark className="text-secondary"/> More Activities</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {enrichedData.poiData.map((poi, index) => (
                             <div key={index} className="p-4 rounded-lg border bg-background">
                              <h5 className="font-bold">{poi.name}</h5>
                              <p className="text-sm text-muted-foreground mb-2">{poi.description}</p>
                              <a href={poi.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
                                Learn More <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
