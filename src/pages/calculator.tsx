import React, { useState } from "react";
import { Link } from "wouter";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";

export default function Calculator() {
  const [customers, setCustomers] = useState([2500]);
  const [inactivePercent, setInactivePercent] = useState([35]);
  const [recoverablePercent, setRecoverablePercent] = useState([15]);
  const [aov, setAov] = useState([65]);

  const inactiveCustomers = Math.round(customers[0] * (inactivePercent[0] / 100));
  const recoverableCustomers = Math.round(inactiveCustomers * (recoverablePercent[0] / 100));
  const potentialRevenue = recoverableCustomers * aov[0];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 px-8 border-b border-border bg-white flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-2xl text-[#0B1220]">
          Repeat<span className="text-primary">Ex</span>
        </Link>
      </header>

      <div className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0B1220] mb-4 tracking-tight">
            Calculate your recovery opportunity
          </h1>
          <p className="text-lg text-secondary-foreground">
            Adjust the sliders below to see how much hidden revenue is sitting in your current customer list.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-[14px] shadow-sm border border-border space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <label className="text-sm font-bold text-[#0B1220]">Total Database Size</label>
                  <p className="text-xs text-secondary-foreground">Number of customers you have contact info for</p>
                </div>
                <span className="text-lg font-bold text-primary">{customers[0].toLocaleString()}</span>
              </div>
              <Slider value={customers} onValueChange={setCustomers} max={20000} step={100} className="py-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <label className="text-sm font-bold text-[#0B1220]">Inactive Percentage</label>
                  <p className="text-xs text-secondary-foreground">Customers who haven't visited in 90+ days</p>
                </div>
                <span className="text-lg font-bold text-primary">{inactivePercent[0]}%</span>
              </div>
              <Slider value={inactivePercent} onValueChange={setInactivePercent} max={80} step={1} className="py-2" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <label className="text-sm font-bold text-[#0B1220]">Recovery Rate</label>
                  <p className="text-xs text-secondary-foreground">Conservative estimate of who will reply</p>
                </div>
                <span className="text-lg font-bold text-primary">{recoverablePercent[0]}%</span>
              </div>
              <Slider value={recoverablePercent} onValueChange={setRecoverablePercent} max={40} step={1} className="py-2" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <label className="text-sm font-bold text-[#0B1220]">Average Order Value</label>
                  <p className="text-xs text-secondary-foreground">How much a customer spends per visit</p>
                </div>
                <span className="text-lg font-bold text-primary">${aov[0]}</span>
              </div>
              <Slider value={aov} onValueChange={setAov} max={300} step={5} className="py-2" />
            </div>
          </div>

          <div className="bg-[#0B1220] p-8 rounded-[14px] shadow-xl text-white flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <h3 className="text-xl font-bold mb-8 relative z-10">Your Recovery Projection</h3>
            
            <div className="space-y-6 flex-1 relative z-10">
              <div className="bg-white/10 p-5 rounded-[10px] backdrop-blur-sm border border-white/5">
                <p className="text-sm text-white/70 font-medium mb-1">Inactive Customers Found</p>
                <p className="text-3xl font-bold">{inactiveCustomers.toLocaleString()}</p>
              </div>
              
              <div className="bg-primary/20 p-5 rounded-[10px] backdrop-blur-sm border border-primary/30">
                <p className="text-sm text-white/80 font-medium mb-1">Customers Recovered / Month</p>
                <p className="text-3xl font-bold text-white">{recoverableCustomers.toLocaleString()}</p>
              </div>
              
              <div className="pt-6">
                <p className="text-base text-white/70 font-medium mb-2 uppercase tracking-widest">Potential Recovered Revenue</p>
                <p className="text-6xl font-heading font-extrabold text-success tracking-tight">${potentialRevenue.toLocaleString()}</p>
                <p className="text-sm text-white/50 mt-2">Every single month</p>
              </div>
            </div>
            
            <div className="mt-12 space-y-4 relative z-10">
              <Link href="/signup" className="flex items-center justify-center w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-[10px] font-bold text-base shadow-lg transition-colors">
                Start Free Trial to Find These Customers <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/demo" className="flex items-center justify-center w-full h-14 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-[10px] font-bold text-base transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
