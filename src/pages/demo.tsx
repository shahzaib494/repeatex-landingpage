import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const demoSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  businessType: z.string().min(1, "Please select a business type"),
  listSize: z.string().min(1, "Please select a list size"),
  message: z.string().optional(),
});

export default function Demo() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof demoSchema>>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessType: "",
      listSize: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof demoSchema>) => {
    toast({
      title: "Demo Requested!",
      description: "We'll be in touch shortly to schedule your demo.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 px-8 border-b border-border bg-white flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-2xl text-[#0B1220]" data-testid="link-home">
          Repeat<span className="text-primary">Ex</span>
        </Link>
      </header>

      <div className="flex-1 container mx-auto px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0B1220] mb-6 tracking-tight">
              See how RepeatEx can recover customers for your business.
            </h1>
            <p className="text-lg text-secondary-foreground mb-12">
              Book a quick 15-minute personalized tour of the platform. We'll show you exactly how to find the hidden revenue in your customer list.
            </p>

            <div className="space-y-8 hidden lg:block">
              <h3 className="font-bold text-xl text-[#0B1220]">What we'll show you:</h3>
              <ul className="space-y-4">
                {[
                  "How to find inactive customers in seconds",
                  "How to generate personalized WhatsApp follow-ups",
                  "How to assign tracking tasks to your staff",
                  "How to track revenue recovered from campaigns"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-secondary-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[14px] shadow-xl border border-border p-8">
            <h3 className="text-2xl font-bold text-[#0B1220] mb-6">Book your demo</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-[#0B1220]">First Name</FormLabel>
                        <FormControl>
                          <Input className="h-12 rounded-[10px]" data-testid="input-firstname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-[#0B1220]">Last Name</FormLabel>
                        <FormControl>
                          <Input className="h-12 rounded-[10px]" data-testid="input-lastname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold text-[#0B1220]">Business Email</FormLabel>
                      <FormControl>
                        <Input type="email" className="h-12 rounded-[10px]" data-testid="input-email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold text-[#0B1220]">Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" className="h-12 rounded-[10px]" data-testid="input-phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-[#0B1220]">Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-[10px]" data-testid="select-business-type">
                              <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="salon">Salon / Spa</SelectItem>
                            <SelectItem value="clinic">Clinic</SelectItem>
                            <SelectItem value="gym">Gym / Fitness</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="listSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-[#0B1220]">Customer List Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-[10px]" data-testid="select-list-size">
                              <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<1000">&lt; 1,000</SelectItem>
                            <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                            <SelectItem value="5000+">5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold text-[#0B1220]">Anything specific you want to see?</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[100px] rounded-[10px] resize-none" data-testid="input-message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full h-14 bg-[#0B1220] hover:bg-[#0B1220]/90 text-white rounded-[10px] mt-6 text-base font-bold" data-testid="button-submit-demo">
                  Book My Demo
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
