import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell
} from "recharts";
import {
  Menu, CheckCircle2, XCircle, ArrowRight, UserX, Clock, EyeOff, TrendingDown,
  Upload, UserCheck, MessageSquare, Play, Users, MessageCircle, BarChart3,
  CheckSquare, Repeat, Scissors, Sparkles, Dumbbell, Stethoscope, ShoppingBag, Wrench, ShoppingCart
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  // Hero calculator state
  const [heroCustomers, setHeroCustomers] = useState(1200);
  const [heroInactivePct, setHeroInactivePct] = useState(30);
  const [heroRecoveryPct, setHeroRecoveryPct] = useState(10);
  const [heroAOV, setHeroAOV] = useState(45);
  const heroInactive = Math.round(heroCustomers * (heroInactivePct / 100));
  const heroRecoverable = Math.round(heroInactive * (heroRecoveryPct / 100));
  const heroRevenue = heroRecoverable * heroAOV;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownExitIntent]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* 1. Header / Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 bg-white ${isScrolled ? "border-b border-border shadow-sm py-3" : "py-5"}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="font-heading font-bold text-2xl text-[#0B1220] tracking-tight">
              Repeat<span className="text-primary">Ex</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors">Product</a>
            <a href="#solution" className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#use-cases" className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors">Use Cases</a>
            <a href="#pricing" className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>
          
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium rounded-[10px] text-secondary-foreground hover:bg-accent">Login</Button>
            <Link href="/demo" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors border border-input bg-white hover:bg-accent hover:text-accent-foreground h-10 px-5 text-[#0B1220]">
              Book a Demo
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-5">
              Start Free Trial
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <a href="#product" className="text-lg font-medium">Product</a>
                  <a href="#solution" className="text-lg font-medium">How It Works</a>
                  <a href="#use-cases" className="text-lg font-medium">Use Cases</a>
                  <a href="#pricing" className="text-lg font-medium">Pricing</a>
                  <a href="#faq" className="text-lg font-medium">FAQ</a>
                  <div className="h-px bg-border my-4" />
                  <Link href="/demo" className="text-lg font-medium text-[#0B1220]">Book a Demo</Link>
                  <Button variant="ghost" className="justify-start px-0 text-lg font-medium">Login</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="pt-24 lg:pt-32">
        {/* 2. Hero Section */}
        <section className="pb-20 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6 lg:max-w-xl xl:max-w-2xl z-10"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/80 rounded-full border border-border">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold text-secondary-foreground tracking-widest uppercase">
                    Customer Retention Software
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-[#0B1220] leading-[1.1] tracking-tight">
                  Bring customers back before they disappear.
                </h1>
                
                <p className="text-lg sm:text-xl text-secondary-foreground leading-relaxed max-w-2xl font-medium">
                  RepeatEx shows businesses which customers to contact today, why they should contact them, and what message to send — so they can recover inactive customers and increase repeat sales.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-base font-semibold transition-all bg-primary text-white hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                    Start Free Trial
                  </Link>
                  <Link href="/demo" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-base font-semibold transition-all border-2 border-border bg-white text-[#0B1220] hover:bg-accent hover:border-[#0B1220]/20 h-14 px-8">
                    Book a Demo
                  </Link>
                </div>
                
                <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  No credit card required. Set up your first follow-up list in minutes.
                </p>

                <div className="pt-8 mt-8 border-t border-border flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-[#0B1220]">Built for</span>
                    <span className="text-sm text-secondary-foreground">Salons, clinics, gyms, boutiques</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-[#0B1220]">Works with</span>
                    <span className="text-sm text-secondary-foreground">Excel/CSV customer lists</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-[#0B1220]">Follow-ups</span>
                    <span className="text-sm text-secondary-foreground">WhatsApp-ready</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 w-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl -z-10 transform scale-110 pointer-events-none"></div>
                <div className="bg-white rounded-[14px] shadow-2xl border border-border overflow-hidden">
                  {/* Calculator Header */}
                  <div className="bg-[#0B1220] px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <BarChart3 size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Revenue Recovery Calculator</p>
                        <p className="text-white/50 text-xs">See how much you could recover</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/15 px-2.5 py-1 rounded-full">Live</span>
                  </div>

                  {/* Sliders */}
                  <div className="p-5 space-y-5 bg-[#F8FAFC]">
                    {/* Customers */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Total Customers</span>
                        <span className="text-sm font-bold text-[#0B1220] bg-white border border-border px-2.5 py-0.5 rounded-md tabular-nums">
                          {heroCustomers.toLocaleString()}
                        </span>
                      </div>
                      <Slider
                        min={100} max={10000} step={100}
                        value={[heroCustomers]}
                        onValueChange={([v]) => setHeroCustomers(v)}
                        data-testid="slider-hero-customers"
                        className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>100</span><span>10,000</span>
                      </div>
                    </div>

                    {/* Inactive % */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">% Inactive</span>
                        <span className="text-sm font-bold text-[#0B1220] bg-white border border-border px-2.5 py-0.5 rounded-md tabular-nums">
                          {heroInactivePct}%
                        </span>
                      </div>
                      <Slider
                        min={5} max={80} step={5}
                        value={[heroInactivePct]}
                        onValueChange={([v]) => setHeroInactivePct(v)}
                        data-testid="slider-hero-inactive"
                        className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>5%</span><span>80%</span>
                      </div>
                    </div>

                    {/* Recovery % */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Recovery Rate</span>
                        <span className="text-sm font-bold text-[#0B1220] bg-white border border-border px-2.5 py-0.5 rounded-md tabular-nums">
                          {heroRecoveryPct}%
                        </span>
                      </div>
                      <Slider
                        min={5} max={50} step={5}
                        value={[heroRecoveryPct]}
                        onValueChange={([v]) => setHeroRecoveryPct(v)}
                        data-testid="slider-hero-recovery"
                        className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>5%</span><span>50%</span>
                      </div>
                    </div>

                    {/* AOV */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">Avg. Order Value</span>
                        <span className="text-sm font-bold text-[#0B1220] bg-white border border-border px-2.5 py-0.5 rounded-md tabular-nums">
                          ${heroAOV}
                        </span>
                      </div>
                      <Slider
                        min={10} max={500} step={5}
                        value={[heroAOV]}
                        onValueChange={([v]) => setHeroAOV(v)}
                        data-testid="slider-hero-aov"
                        className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                        <span>$10</span><span>$500</span>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-border bg-white px-5 py-4">
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-3 rounded-[10px] bg-[#F8FAFC] border border-border">
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Inactive</p>
                        <p className="text-xl font-bold text-[#0B1220] tabular-nums">{heroInactive.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-3 rounded-[10px] bg-[#F8FAFC] border border-border">
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Recoverable</p>
                        <p className="text-xl font-bold text-[#0B1220] tabular-nums">{heroRecoverable.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-3 rounded-[10px] bg-primary/10 border border-primary/20">
                        <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">Revenue</p>
                        <p className="text-xl font-bold text-primary tabular-nums">
                          ${heroRevenue >= 1000 ? `${(heroRevenue / 1000).toFixed(1)}k` : heroRevenue.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      key={heroRevenue}
                      initial={{ opacity: 0.7, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-[10px] bg-[#0B1220] text-white px-4 py-3 flex items-center justify-between mb-3"
                    >
                      <div>
                        <p className="text-xs text-white/60 mb-0.5">Potential recovered revenue</p>
                        <p className="text-2xl font-bold font-heading tabular-nums">
                          ${heroRevenue.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/60 mb-0.5">per follow-up cycle</p>
                        <p className="text-sm font-semibold text-primary">{heroRecoverable} customers</p>
                      </div>
                    </motion.div>

                    <Link href="/signup" className="flex items-center justify-center gap-2 w-full rounded-[10px] bg-primary text-white font-semibold text-sm h-11 hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
                      Start Free Trial — Find These Customers
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Problem / Pain Section */}
        <section id="problem" className="py-24 bg-white border-y border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] mb-6 tracking-tight">
                Most businesses do not lose customers loudly. They lose them silently.
              </h2>
              <p className="text-lg text-secondary-foreground">
                A customer buys once, leaves, and nobody follows up. Your team gets busy. Old customers are forgotten. Revenue leaks without anyone noticing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <UserX className="w-6 h-6 text-danger" />,
                  title: "One-time buyers disappear",
                  copy: "Customers buy once and never come back because no one reminds them."
                },
                {
                  icon: <Clock className="w-6 h-6 text-warning" />,
                  title: "Follow-ups are forgotten",
                  copy: "Your team depends on memory, spreadsheets, or scattered WhatsApp chats."
                },
                {
                  icon: <EyeOff className="w-6 h-6 text-secondary-foreground" />,
                  title: "Inactive customers are invisible",
                  copy: "You do not know who is slipping away until it is too late."
                },
                {
                  icon: <TrendingDown className="w-6 h-6 text-danger" />,
                  title: "Revenue leaks silently",
                  copy: "Every missed follow-up is money left on the table."
                }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-[14px] bg-background border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center mb-6 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1220] mb-3">{card.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Cost of Doing Nothing (Calculator) */}
        <section id="cost" className="py-24 bg-[#0B1220] text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                  If you do not follow up, your competitors will.
                </h2>
                <p className="text-lg mb-8 text-[#ffffff]">
                  Your customer list already has money inside it. Use the calculator to see how much revenue you could recover by simply reaching out to inactive customers.
                </p>
                <div className="hidden lg:block">
                  <Link href="/calculator" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-base font-semibold transition-colors bg-primary text-white hover:bg-primary/90 h-14 px-8">
                    Calculate Your Recovery Opportunity <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="bg-white text-[#0B1220] p-8 rounded-[14px] shadow-2xl">
                <CalculatorWidget />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Solution Section */}
        <section id="solution" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] mb-6 tracking-tight">
                RepeatEx tells you exactly who to contact next.
              </h2>
              <p className="text-lg text-secondary-foreground">
                Instead of guessing, RepeatEx analyzes customer activity and creates a daily follow-up list with suggested messages, priority levels, and campaign tracking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border -z-10" />
              
              {[
                {
                  step: "1",
                  icon: <Upload className="w-8 h-8 text-primary" />,
                  title: "Import your customers",
                  copy: "Upload your customer list from Excel/CSV or add customers manually."
                },
                {
                  step: "2",
                  icon: <UserCheck className="w-8 h-8 text-primary" />,
                  title: "Find who needs follow-up",
                  copy: "RepeatEx identifies inactive, lost, VIP, one-time, and reorder-ready customers."
                },
                {
                  step: "3",
                  icon: <MessageSquare className="w-8 h-8 text-primary" />,
                  title: "Send the right message",
                  copy: "Open WhatsApp with a personalized message and track every response."
                }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-background shadow-lg flex items-center justify-center mb-6 relative">
                    {item.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B1220] text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1220] mb-3">{item.title}</h3>
                  <p className="text-secondary-foreground">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="#product" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-base font-semibold transition-colors border-2 border-border bg-white text-[#0B1220] hover:bg-accent h-14 px-8">
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* 7. Core Features */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-6">
                Everything you need to turn old customers into repeat buyers.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Users className="w-6 h-6 text-primary" />,
                  title: "Customer Segmentation",
                  copy: "Auto-group customers into: active, inactive, lost, VIP, one-time, and reorder-ready.",
                  metric: "6 smart segments"
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-primary" />,
                  title: "Follow-Up Recommendations",
                  copy: "Know exactly who to contact today with an intelligent priority score.",
                  metric: "Daily action list"
                },
                {
                  icon: <MessageCircle className="w-6 h-6 text-primary" />,
                  title: "WhatsApp Follow-Ups",
                  copy: "Personalized messages that open straight in WhatsApp Web or Mobile.",
                  metric: "1-click to chat"
                },
                {
                  icon: <BarChart3 className="w-6 h-6 text-primary" />,
                  title: "Campaign Tracking",
                  copy: "Track who was contacted, who replied, who converted, and revenue recovered.",
                  metric: "Full visibility"
                },
                {
                  icon: <CheckSquare className="w-6 h-6 text-primary" />,
                  title: "Follow-Up Tasks",
                  copy: "Assign specific follow-ups to employees and monitor completion rates.",
                  metric: "Team accountability"
                },
                {
                  icon: <Repeat className="w-6 h-6 text-primary" />,
                  title: "Repeat Sales Dashboard",
                  copy: "Monitor your repeat purchase rate, inactive customers, and performance.",
                  metric: "Live metrics"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-[14px] border border-border hover:shadow-lg transition-shadow group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-[10px] bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <span className="text-xs font-bold text-secondary-foreground bg-background px-3 py-1 rounded-full border border-border">
                      {feature.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1220] mb-3">{feature.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed">{feature.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Before vs After */}
        <section id="comparison" className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-6">
                Stop running follow-ups from memory.
              </h2>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="p-8 lg:p-10 rounded-[14px] bg-background border border-border">
                <h3 className="text-2xl font-bold text-[#0B1220] mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-danger/10 text-danger flex items-center justify-center">
                    <XCircle size={20} />
                  </span>
                  Before RepeatEx
                </h3>
                <ul className="space-y-6">
                  {[
                    "Customer list buried in Excel",
                    "Staff forget to do follow-ups",
                    "No idea who is currently inactive",
                    "WhatsApp chats scattered everywhere",
                    "No campaign conversion tracking",
                    "Zero visibility into recovered revenue"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <XCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 lg:p-10 rounded-[14px] bg-[#0B1220] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                  <span className="w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </span>
                  With RepeatEx
                </h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    "Daily prioritized follow-up list",
                    "Clear customer segments automatically",
                    "Personalized WhatsApp messages ready",
                    "Assigned staff tasks and tracking",
                    "Live campaign conversion tracking",
                    "Dashboard showing actual revenue recovered"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-white/90 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-base font-semibold transition-colors bg-primary text-white hover:bg-primary/90 h-14 px-8 shadow-lg">
                Start Recovering Customers
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Use Cases */}
        <section id="use-cases" className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-6">
                Built for businesses where customers should come back.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {[
                { icon: <Scissors />, type: "Salons", desc: "haircuts, facials, treatments, monthly services" },
                { icon: <Sparkles />, type: "Skin Clinics", desc: "follow-up treatments, skincare refills, appointments" },
                { icon: <Dumbbell />, type: "Gyms", desc: "recover inactive members, follow up with trial users" },
                { icon: <Stethoscope />, type: "Dental Clinics", desc: "checkups, cleanings, treatment plans" },
                { icon: <ShoppingBag />, type: "Boutiques", desc: "seasonal drops, new arrivals, VIP offers" },
                { icon: <Wrench />, type: "Auto Service Shops", desc: "oil changes, inspections, service cycles" },
                { icon: <ShoppingCart />, type: "E-commerce Stores", desc: "recover one-time buyers, reorder reminders" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-[14px] border border-border hover:border-primary/50 transition-colors group cursor-pointer flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[#0B1220] text-lg mb-2">{item.type}</h3>
                    <p className="text-sm text-secondary-foreground mb-6">{item.desc}</p>
                  </div>
                  <a href="#" className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    View example <ArrowRight size={14} />
                  </a>
                </div>
              ))}
              
              <div className="bg-primary/5 p-6 rounded-[14px] border border-primary/20 flex flex-col items-center justify-center text-center h-full min-h-[220px]">
                <h3 className="font-bold text-[#0B1220] text-lg mb-3">Your Business?</h3>
                <p className="text-sm text-secondary-foreground mb-4">If your customers should buy more than once, RepeatEx is for you.</p>
                <Link href="/signup" className="text-sm font-bold text-primary underline underline-offset-4">Try it free</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Funnel Visual */}
        <section id="funnel" className="py-24 bg-white border-t border-border overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-6">
                From forgotten customer to repeat sale.
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-2 relative">
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 -z-10"></div>
                
                {[
                  { step: 1, title: "Customer becomes inactive", metric: "248 found", color: "bg-background" },
                  { step: 2, title: "RepeatEx detects opportunity", metric: "Auto-segmented", color: "bg-primary/10" },
                  { step: 3, title: "System recommends follow-up", metric: "Prioritized", color: "bg-primary/20" },
                  { step: 4, title: "Staff opens WhatsApp", metric: "94 contacted", color: "bg-primary/40" },
                  { step: 5, title: "Customer replies", metric: "31 replied", color: "bg-primary/60" },
                  { step: 6, title: "Sale is recovered", metric: "$3,420 recovered", color: "bg-primary text-white" }
                ].map((item, i) => (
                  <div key={i} className="relative group flex-1">
                    <div className="hidden lg:block absolute top-1/2 right-[-10px] w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-border -translate-y-1/2 z-0"></div>
                    <div className={`p-4 rounded-[14px] border border-border text-center h-full flex flex-col justify-center shadow-sm relative z-10 ${item.color} transition-transform hover:-translate-y-1`}>
                      <span className={`text-[10px] font-bold uppercase tracking-wider mb-2 block ${i === 5 ? 'text-white/80' : 'text-secondary-foreground'}`}>Step {item.step}</span>
                      <h4 className={`font-bold text-sm mb-3 ${i === 5 ? 'text-white' : 'text-[#0B1220]'}`}>{item.title}</h4>
                      <div className={`mt-auto text-sm font-bold ${i === 5 ? 'text-white text-lg' : 'text-primary'}`}>
                        {item.metric}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. Role-Based Portal Section */}
        <section id="roles" className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-6">
                Built for owners, managers, and staff.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  role: "Business Owner",
                  focus: "Revenue recovery, inactive customers, team performance, campaign results.",
                  screens: "Dashboard, Reports, Billing, Team & Permissions"
                },
                {
                  role: "Manager",
                  focus: "Campaigns, assign follow-ups, track staff, manage customers.",
                  screens: "Customers, Campaigns, Tasks, Recommendations"
                },
                {
                  role: "Employee",
                  focus: "Assigned follow-ups, open WhatsApp, update statuses, complete tasks.",
                  screens: "My Tasks, Assigned Customers, WhatsApp Follow-Ups"
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-[14px] border border-border shadow-sm flex flex-col">
                  <h3 className="text-2xl font-bold text-[#0B1220] mb-4">{card.role}</h3>
                  <p className="text-secondary-foreground mb-6 flex-1">{card.focus}</p>
                  <div className="bg-accent/50 p-4 rounded-[10px] border border-border">
                    <p className="text-xs font-bold text-[#0B1220] mb-2 uppercase tracking-wider">Access to screens</p>
                    <p className="text-sm text-secondary-foreground">{card.screens}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-8 text-sm font-medium text-secondary-foreground bg-white border border-border rounded-full py-2 px-6 max-w-max mx-auto shadow-sm">
              <CheckCircle2 className="inline-block w-4 h-4 text-success mr-2 mb-0.5" />
              Employees only see what they need. Owners stay in control.
            </p>
          </div>
        </section>

        {/* 12. Trust / Proof Section */}
        <section id="trust" className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-6">
                Designed around the way small businesses actually work.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
              {[
                "Works with Excel/CSV lists",
                "WhatsApp-first workflow",
                "Role-based team access",
                "Local customer segments",
                "Simple reporting",
                "No complicated CRM setup"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-[10px] bg-background border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-[#0B1220]">{text}</span>
                </div>
              ))}
            </div>

            {/* Testimonials Placeholders */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background p-8 rounded-[14px] border border-border border-dashed relative">
                <div className="absolute top-0 right-0 bg-warning text-warning-foreground text-[10px] font-bold px-2 py-1 rounded-bl-[10px]">PLACEHOLDER</div>
                <div className="flex gap-1 text-premium-gold mb-4">
                  {[1,2,3,4,5].map(i => <Sparkles key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg text-secondary-foreground italic mb-6">"[Replace this with real customer quote describing how they used RepeatEx to recover revenue]"</p>
                <div>
                  <p className="font-bold text-[#0B1220]">Customer Name</p>
                  <p className="text-sm text-secondary-foreground">Business Type</p>
                </div>
              </div>
              <div className="bg-background p-8 rounded-[14px] border border-border border-dashed relative">
                <div className="absolute top-0 right-0 bg-warning text-warning-foreground text-[10px] font-bold px-2 py-1 rounded-bl-[10px]">PLACEHOLDER</div>
                <div className="flex gap-1 text-premium-gold mb-4">
                  {[1,2,3,4,5].map(i => <Sparkles key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg text-secondary-foreground italic mb-6">"[Replace this with real customer quote describing how easy it was for their staff to use]"</p>
                <div>
                  <p className="font-bold text-[#0B1220]">Customer Name</p>
                  <p className="text-sm text-secondary-foreground">Business Type</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Pricing Section */}
        <section id="pricing" className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-6">
                Simple pricing for businesses that want customers back.
              </h2>
            </div>

            <PricingWidget />

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-secondary-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> No credit card required</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Cancel anytime</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Upgrade when ready</span>
            </div>
          </div>
        </section>

        {/* 14. Risk Reversal */}
        <section id="risk" className="py-16 bg-[#0B1220] text-white">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Try it with your current customer list.
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-[#ffffff]">
              Upload your customer list, find inactive customers, and see who you should follow up with before you pay.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm font-medium">
              <div className="bg-white/10 p-4 rounded-[10px]">No credit card required</div>
              <div className="bg-white/10 p-4 rounded-[10px]">Start with sample data</div>
              <div className="bg-white/10 p-4 rounded-[10px]">Import from Excel/CSV</div>
              <div className="bg-white/10 p-4 rounded-[10px]">Export your data anytime</div>
            </div>

            <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-base font-semibold transition-colors bg-primary text-white hover:bg-primary/90 h-14 px-10 shadow-lg">
              Start Free Trial
            </Link>
          </div>
        </section>

        {/* 15. FAQ */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0B1220] tracking-tight mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Is RepeatEx a CRM?", a: "It's better described as a repeat-sales engine. While it stores customer data like a CRM, its primary focus is identifying exactly who you should contact today to recover lost revenue." },
                { q: "Can I use WhatsApp?", a: "Yes. RepeatEx is built around WhatsApp workflows. You can generate personalized messages and open them directly in WhatsApp Web or the mobile app with one click." },
                { q: "Can I import customers?", a: "Yes, you can easily import your existing customer list from Excel or CSV files in minutes." },
                { q: "Is it useful for small businesses?", a: "RepeatEx is specifically designed for small service businesses like salons, clinics, and local shops that don't need complex enterprise CRMs." },
                { q: "Can employees use it?", a: "Yes, we have a role-based system. Employees only see the tasks and customers assigned to them, keeping your full list secure." },
                { q: "Can I track recovered revenue?", a: "Yes, the dashboard automatically calculates how much revenue you've recovered from follow-up campaigns." },
                { q: "Do I need technical setup?", a: "No technical knowledge required. If you can use WhatsApp and Excel, you can use RepeatEx." },
                { q: "Can I cancel anytime?", a: "Yes, all plans are month-to-month and you can cancel at any time directly from your billing settings." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#0B1220] hover:text-primary transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 16. Final CTA */}
        <section className="py-24 bg-[#0B1220] text-white">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight tracking-tight">
              Your old customers are not gone. <br/>
              <span className="text-[#ffffff]">They are just not being followed up.</span>
            </h2>
            <p className="text-xl text-secondary-foreground mb-10">
              RepeatEx helps you find them, message them, and bring them back.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-lg font-semibold transition-colors bg-primary text-white hover:bg-primary/90 h-16 px-10 shadow-lg shadow-primary/25 hover:-translate-y-1 w-full sm:w-auto">
                Start Free Trial
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-lg font-semibold transition-colors border-2 border-border/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30 h-16 px-10 w-full sm:w-auto">
                Book a Demo
              </Link>
            </div>
            <p className="text-sm text-secondary-foreground mt-6 font-medium">
              No credit card required. Start with your existing customer list.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-heading font-bold text-xl text-[#0B1220]">Repeat<span className="text-primary">Ex</span></span>
              <span className="text-sm text-secondary-foreground">Bring customers back before they disappear.</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-secondary-foreground">
              <a href="#product" className="hover:text-primary">Product</a>
              <a href="#solution" className="hover:text-primary">How It Works</a>
              <a href="#use-cases" className="hover:text-primary">Use Cases</a>
              <a href="#pricing" className="hover:text-primary">Pricing</a>
              <a href="#faq" className="hover:text-primary">FAQ</a>
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RepeatEx. All rights reserved.
          </div>
        </div>
      </footer>
      {/* WhatsApp Lead Capture Modal */}
      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="sm:max-w-[425px] rounded-[14px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-[#0B1220]">Want help setting this up?</DialogTitle>
            <DialogDescription>
              We'll show you how RepeatEx can work with your current customer list.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[#0B1220]">Name</label>
              <Input id="name" placeholder="John Doe" className="rounded-[10px]" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="whatsapp" className="text-sm font-medium text-[#0B1220]">WhatsApp Number</label>
              <Input id="whatsapp" placeholder="+1 (555) 000-0000" className="rounded-[10px]" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="business" className="text-sm font-medium text-[#0B1220]">Business Type</label>
              <Input id="business" placeholder="Salon, Clinic, Gym..." className="rounded-[10px]" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="customers" className="text-sm font-medium text-[#0B1220]">Number of Customers</label>
              <Input id="customers" placeholder="e.g. 500" type="number" className="rounded-[10px]" />
            </div>
          </div>
          <Button onClick={() => setShowWhatsAppModal(false)} className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-[10px] h-12 text-base font-bold">
            <MessageSquare className="w-5 h-5 mr-2" /> Contact Me on WhatsApp
          </Button>
        </DialogContent>
      </Dialog>
      {/* Exit Intent Modal */}
      <Dialog open={showExitIntent} onOpenChange={setShowExitIntent}>
        <DialogContent className="sm:max-w-[500px] rounded-[14px]">
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-warning/20 text-warning rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown size={32} />
            </div>
            <DialogTitle className="text-3xl font-heading font-bold text-[#0B1220] mb-4">
              Before you go, find out how much revenue you might be losing.
            </DialogTitle>
            <DialogDescription className="text-base mb-8">
              Every inactive customer is money left on the table.
            </DialogDescription>
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-[10px] h-12 text-base font-bold">
                <Link href="/calculator">Calculate Recovery Opportunity</Link>
              </Button>
              <Button variant="ghost" onClick={() => setShowExitIntent(false)} className="w-full rounded-[10px] text-secondary-foreground hover:text-[#0B1220]">
                Maybe later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-40">
        <Link href="/signup" className="flex items-center justify-center w-full bg-primary text-white rounded-[10px] h-12 font-bold text-base shadow-sm">
          Start Free Trial
        </Link>
      </div>
    </div>
  );
}

// Subcomponents

function CalculatorWidget() {
  const [customers, setCustomers] = useState([1000]);
  const [inactivePercent, setInactivePercent] = useState([30]);
  const [recoverablePercent, setRecoverablePercent] = useState([10]);
  const [aov, setAov] = useState([40]);

  const inactiveCustomers = Math.round(customers[0] * (inactivePercent[0] / 100));
  const recoverableCustomers = Math.round(inactiveCustomers * (recoverablePercent[0] / 100));
  const potentialRevenue = recoverableCustomers * aov[0];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-bold">Number of customers</label>
            <span className="text-sm text-secondary-foreground font-medium">{customers[0].toLocaleString()}</span>
          </div>
          <Slider value={customers} onValueChange={setCustomers} max={10000} step={100} />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-bold">% Inactive</label>
            <span className="text-sm text-secondary-foreground font-medium">{inactivePercent[0]}%</span>
          </div>
          <Slider value={inactivePercent} onValueChange={setInactivePercent} max={100} step={1} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-bold">% Recoverable</label>
            <span className="text-sm text-secondary-foreground font-medium">{recoverablePercent[0]}%</span>
          </div>
          <Slider value={recoverablePercent} onValueChange={setRecoverablePercent} max={50} step={1} />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-bold">Avg Order Value</label>
            <span className="text-sm text-secondary-foreground font-medium">${aov[0]}</span>
          </div>
          <Slider value={aov} onValueChange={setAov} max={500} step={5} />
        </div>
      </div>

      <div className="bg-accent/50 p-6 rounded-[10px] border border-border">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-secondary-foreground font-medium mb-1">Inactive Customers</p>
            <p className="text-xl font-bold">{inactiveCustomers.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-secondary-foreground font-medium mb-1">Recoverable</p>
            <p className="text-xl font-bold text-primary">{recoverableCustomers.toLocaleString()}</p>
          </div>
        </div>
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-secondary-foreground font-medium mb-1">Potential Recovered Revenue</p>
          <p className="text-4xl font-heading font-extrabold text-success">${potentialRevenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

function PricingWidget() {
  const [currency, setCurrency] = useState<'USD'|'PKR'>('USD');

  const plans = [
    {
      name: "Starter",
      priceUSD: 9,
      pricePKR: 2500,
      description: "For small businesses just getting started with retention.",
      features: ["500 customers", "3 team members", "5 campaigns/month", "Basic templates", "Basic dashboard", "WhatsApp click-to-chat"],
      cta: "Start Starter",
      highlight: false
    },
    {
      name: "Growth",
      priceUSD: 29,
      pricePKR: 7500,
      description: "Everything you need to run a full repeat-sales engine.",
      features: ["5,000 customers", "10 team members", "Unlimited campaigns", "Customer segmentation", "Follow-up recommendations", "Reports & team tasks"],
      cta: "Start Growth Trial",
      highlight: true
    },
    {
      name: "Scale",
      priceUSD: 79,
      pricePKR: 20000,
      description: "For high-volume businesses and multi-branch locations.",
      features: ["Unlimited customers", "Unlimited team", "Advanced reporting", "Multi-branch support", "Priority support", "Custom templates"],
      cta: "Talk to Sales",
      highlight: false
    }
  ];

  return (
    <div>
      <div className="flex justify-center mb-12">
        <div className="bg-accent p-1 rounded-[10px] inline-flex">
          <button 
            className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-colors ${currency === 'USD' ? 'bg-white shadow-sm text-[#0B1220]' : 'text-secondary-foreground'}`}
            onClick={() => setCurrency('USD')}
          >
            USD
          </button>
          <button 
            className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-colors ${currency === 'PKR' ? 'bg-white shadow-sm text-[#0B1220]' : 'text-secondary-foreground'}`}
            onClick={() => setCurrency('PKR')}
          >
            PKR
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className={`bg-white rounded-[14px] p-8 flex flex-col relative ${plan.highlight ? 'border-2 border-[#0B1220] shadow-xl transform lg:-translate-y-4' : 'border border-border shadow-sm'}`}>
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B1220] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-bold text-[#0B1220] mb-2">{plan.name}</h3>
            <p className="text-sm text-secondary-foreground mb-6 h-10">{plan.description}</p>
            
            <div className="mb-8">
              <span className="text-4xl font-heading font-extrabold text-[#0B1220]">
                {currency === 'USD' ? '$' : 'Rs. '}{currency === 'USD' ? plan.priceUSD : plan.pricePKR.toLocaleString()}
              </span>
              <span className="text-secondary-foreground font-medium">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-[#0B1220]">{f}</span>
                </li>
              ))}
            </ul>

            <Link href={plan.highlight ? "/signup" : (plan.name === 'Scale' ? '/demo' : '/signup')} className={`w-full flex items-center justify-center h-12 rounded-[10px] font-bold text-sm transition-colors ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90 shadow-md' : 'bg-background border border-border text-[#0B1220] hover:bg-accent'}`}>
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
