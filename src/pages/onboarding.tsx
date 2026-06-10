import React, { useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, Circle, Upload, Users, MessageSquare, Play, CheckSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Onboarding() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const steps = [
    { title: "Import customer list", icon: <Upload size={20} /> },
    { title: "Review inactive customers", icon: <Users size={20} /> },
    { title: "Choose a WhatsApp template", icon: <MessageSquare size={20} /> },
    { title: "Send first follow-up", icon: <Play size={20} /> },
    { title: "Mark customer status", icon: <CheckSquare size={20} /> },
    { title: "View recovered revenue", icon: <BarChart3 size={20} /> }
  ];

  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 px-8 border-b border-border bg-white flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-2xl text-[#0B1220]">
          Repeat<span className="text-primary">Ex</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">JD</div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#0B1220] mb-4">
              Welcome to RepeatEx. Let's get you set up.
            </h1>
            <p className="text-secondary-foreground text-lg">
              Complete these steps to start recovering revenue today.
            </p>
          </div>

          <div className="bg-white rounded-[14px] shadow-sm border border-border p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#0B1220]">Your Progress</h3>
              <span className="text-sm font-medium text-primary">{completedSteps.length} of {steps.length} completed</span>
            </div>
            <Progress value={progress} className="h-3 rounded-full mb-8 bg-accent" />

            <div className="space-y-4">
              {steps.map((step, i) => {
                const isCompleted = completedSteps.includes(i);
                return (
                  <div 
                    key={i} 
                    onClick={() => toggleStep(i)}
                    className={`flex items-center gap-4 p-5 rounded-[10px] border cursor-pointer transition-all ${isCompleted ? 'bg-background border-border opacity-70' : 'bg-white border-border hover:border-primary shadow-sm hover:shadow-md'}`}
                  >
                    <button className={`shrink-0 transition-colors ${isCompleted ? 'text-success' : 'text-muted-foreground'}`}>
                      {isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                    </button>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isCompleted ? 'bg-background text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
                      {step.icon}
                    </div>
                    <span className={`font-bold text-lg flex-1 ${isCompleted ? 'text-secondary-foreground line-through decoration-muted-foreground/30' : 'text-[#0B1220]'}`}>
                      {step.title}
                    </span>
                    {!isCompleted && (
                      <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">Start</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Button className="h-14 px-10 rounded-[10px] bg-[#0B1220] hover:bg-[#0B1220]/90 text-white font-bold text-base">
              Import Customers <Upload className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
