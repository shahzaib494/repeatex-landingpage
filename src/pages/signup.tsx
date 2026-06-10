import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const step1Schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const step2Schema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  businessType: z.string().min(1, "Please select a business type"),
  teamSize: z.string().min(1, "Please select a team size"),
  customers: z.string().min(1, "Please select customer list size"),
});

const step3Schema = z.object({
  goals: z.array(z.string()).min(1, "Please select at least one goal"),
});

export default function Signup() {
  const [step, setStep] = useState(1);
  const [, setLocation] = useLocation();

  const form1 = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: { fullName: "", email: "", password: "" },
  });

  const form2 = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: { businessName: "", businessType: "", teamSize: "", customers: "" },
  });

  const form3 = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: { goals: [] },
  });

  const onStep1Submit = (data: z.infer<typeof step1Schema>) => {
    setStep(2);
  };

  const onStep2Submit = (data: z.infer<typeof step2Schema>) => {
    setStep(3);
  };

  const onStep3Submit = (data: z.infer<typeof step3Schema>) => {
    setStep(4);
  };

  const handleStartMethod = () => {
    setLocation("/onboarding");
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 px-8 border-b border-border bg-white flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-2xl text-[#0B1220]" data-testid="link-home">
          Repeat<span className="text-primary">Ex</span>
        </Link>
        <span className="text-sm text-secondary-foreground font-medium">Step {step} of 4</span>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          {step > 1 && (
            <button onClick={handleBack} className="flex items-center text-sm font-medium text-secondary-foreground hover:text-[#0B1220] mb-6" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          )}

          <div className="bg-white rounded-[14px] shadow-lg border border-border p-8">
            {step === 1 && (
              <Form {...form1}>
                <form onSubmit={form1.handleSubmit(onStep1Submit)} className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-heading font-bold mb-2 text-[#0B1220]">Create your account</h1>
                    <p className="text-secondary-foreground mb-6">Start your free trial today. No credit card required.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form1.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-[#0B1220]">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 rounded-[10px]" data-testid="input-fullname" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form1.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-[#0B1220]">Work Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" className="h-12 rounded-[10px]" data-testid="input-email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form1.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-[#0B1220]">Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" className="h-12 rounded-[10px]" data-testid="input-password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-bold rounded-[10px] text-base shadow-md" data-testid="button-step1-next">
                    Continue
                  </Button>
                </form>
              </Form>
            )}

            {step === 2 && (
              <Form {...form2}>
                <form onSubmit={form2.handleSubmit(onStep2Submit)} className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-heading font-bold mb-2 text-[#0B1220]">Tell us about your business</h1>
                    <p className="text-secondary-foreground mb-6">We'll customize your dashboard based on this.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form2.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-[#0B1220]">Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Salon" className="h-12 rounded-[10px]" data-testid="input-business-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form2.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-[#0B1220]">Business Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-[10px]" data-testid="select-business-type">
                                <SelectValue placeholder="Select type..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="salon">Salon / Spa</SelectItem>
                              <SelectItem value="clinic">Clinic</SelectItem>
                              <SelectItem value="gym">Gym / Fitness</SelectItem>
                              <SelectItem value="boutique">Boutique</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form2.control}
                        name="teamSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold text-[#0B1220]">Team Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 rounded-[10px]" data-testid="select-team-size">
                                  <SelectValue placeholder="Select size..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-5">1-5</SelectItem>
                                <SelectItem value="6-15">6-15</SelectItem>
                                <SelectItem value="16+">16+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form2.control}
                        name="customers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold text-[#0B1220]">Customers</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 rounded-[10px]" data-testid="select-customers">
                                  <SelectValue placeholder="Select list size..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<1000">&lt; 1,000</SelectItem>
                                <SelectItem value="1000-5000">1k - 5k</SelectItem>
                                <SelectItem value=">5000">5k+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-bold rounded-[10px] text-base shadow-md" data-testid="button-step2-next">
                    Continue
                  </Button>
                </form>
              </Form>
            )}

            {step === 3 && (
              <Form {...form3}>
                <form onSubmit={form3.handleSubmit(onStep3Submit)} className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-heading font-bold mb-2 text-[#0B1220]">What do you want to improve?</h1>
                    <p className="text-secondary-foreground mb-6">Select all that apply.</p>
                  </div>
                  
                  <FormField
                    control={form3.control}
                    name="goals"
                    render={() => (
                      <FormItem className="space-y-3">
                        {[
                          { id: "bring-back", label: "Bring inactive customers back" },
                          { id: "repeat-sales", label: "Increase repeat sales" },
                          { id: "staff", label: "Manage staff follow-ups" },
                          { id: "whatsapp", label: "Track WhatsApp campaigns" },
                          { id: "organize", label: "Organize customer list" }
                        ].map((goal) => (
                          <FormField
                            key={goal.id}
                            control={form3.control}
                            name="goals"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={goal.id}
                                  className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-[10px] border border-border hover:border-primary cursor-pointer transition-colors"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(goal.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, goal.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== goal.id
                                              )
                                            )
                                      }}
                                      data-testid={`checkbox-goal-${goal.id}`}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-medium text-[#0B1220] cursor-pointer">
                                    {goal.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-bold rounded-[10px] text-base shadow-md" data-testid="button-step3-next">
                    Continue
                  </Button>
                </form>
              </Form>
            )}

            {step === 4 && (
              <>
                <h1 className="text-2xl font-heading font-bold mb-2 text-[#0B1220]">Choose how to start</h1>
                <p className="text-secondary-foreground mb-8">You can always import real data later.</p>
                <div className="space-y-4">
                  {[
                    { id: "sample", title: "Use sample data", desc: "Explore the dashboard with dummy data", primary: true },
                    { id: "import", title: "Import customer list", desc: "Upload an Excel/CSV file", primary: false },
                    { id: "manual", title: "Add customers manually", desc: "Type in a few customers to test", primary: false }
                  ].map((opt, i) => (
                    <div key={i} onClick={handleStartMethod} className={`p-5 rounded-[10px] border cursor-pointer transition-all ${opt.primary ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-[#0B1220]'}`} data-testid={`button-start-${opt.id}`}>
                      <h3 className="font-bold text-[#0B1220] mb-1">{opt.title}</h3>
                      <p className="text-sm text-secondary-foreground">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

          </div>
          
          {step === 1 && (
            <div className="mt-6 text-center text-sm text-secondary-foreground">
              Already have an account? <Link href="/" className="text-[#0B1220] font-bold hover:underline" data-testid="link-login">Log in</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
