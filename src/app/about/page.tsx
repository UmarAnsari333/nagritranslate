"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Languages,
  Users,
  Target,
  Heart,
  Zap,
  Shield,
  Award,
  ArrowRight,
  Globe,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
          >
            About Us
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            Breaking Language Barriers,{" "}
            <span className="text-primary">Word by Word</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We believe that communication should be universal. Our mission is to
            provide accurate, instant, and free translation services that
            connect people across all language barriers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/ai-translate" className="cursor-pointer">
              <Button size="lg" className="gap-2">
                <Zap className="w-5 h-5" />
                Start Translating Free
              </Button>
            </Link>
            <Link href="/contact" className="cursor-pointer">
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-muted/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Languages className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Translate was born from a simple idea: why should language be a
                barrier? In 2024, a small team of language enthusiasts and AI
                developers came together to build a free, accessible translation
                tool for everyone.
              </p>
              <p className="text-muted-foreground max-w-md mx-auto">
                Starting with just 100 languages, we've grown to support over
                248 languages today. Our platform processes millions of
                translations monthly, connecting students, travelers,
                businesses, and families across the globe.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Provide the world's most accessible, accurate, and free
                translation service. We believe that everyone deserves to
                communicate freely, regardless of language barriers.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    icon: Globe,
                    title: "Global Accessibility",
                    text: "Support for 248+ languages including regional and minority languages.",
                  },
                  {
                    icon: Heart,
                    title: "100% Free Forever",
                    text: "No registration, no hidden fees, no premium tiers. Just translate.",
                  },
                  {
                    icon: Shield,
                    title: "Privacy First",
                    text: "Your data stays on your device. No server storage, complete privacy.",
                  },
                  {
                    icon: Zap,
                    title: "AI-Powered Accuracy",
                    text: "Advanced neural networks for natural, context-aware translations.",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-3 bg-muted/30 rounded-xl border">
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "248+", label: "Languages", icon: Globe },
            { value: "10M+", label: "Monthly Users", icon: Users },
            { value: "500M+", label: "Translations", icon: Target },
            { value: "99.5%", label: "Accuracy", icon: CheckCircle },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 bg-muted/30 rounded-xl border"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-muted/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <div className="flex items-start gap-6">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-4xl font-bold text-primary">JD</div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  Founder & Lead Developer
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Since 2024
                  </span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Passionate about building products that solve real problems.
                  With expertise in AI and web technologies, JD leads the
                  development of Translate to make communication accessible for
                  everyone.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Full-stack development with Next.js & AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Focus on UX and accessibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Building products for real users</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Translate?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Always Free",
              description:
                "No hidden costs, no premium tiers, no surprise fees. Forever free.",
              icon: Target,
            },
            {
              title: "Privacy Focused",
              description:
                "Your translations are never stored on our servers. Complete data privacy.",
              icon: Shield,
            },
            {
              title: "AI Powered",
              description:
                "Advanced neural networks deliver natural, accurate translations.",
              icon: Zap,
            },
            {
              title: "248+ Languages",
              description:
                "Support for languages including rare and regional dialects.",
              icon: Globe,
            },
            {
              title: "No Registration",
              description:
                "Start translating immediately without signing up or creating an account.",
              icon: Users,
            },
            {
              title: "Mobile Ready",
              description:
                "Works perfectly on all devices - phone, tablet, or desktop.",
              icon: Globe,
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 bg-background rounded-2xl border text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-muted/20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Built With Modern Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Next.js 15",
                icon: "React-based framework with App Router",
                color: "from-blue-500/10 to-blue-500/5",
              },
              {
                name: "Tailwind CSS",
                icon: "Utility-first CSS framework for rapid UI development",
                color: "from-primary/10 to-primary/5",
              },
              {
                name: "Framer Motion",
                icon: "Production-ready animation library",
                color: "from-pink-500/10 to-pink-500/5",
              },
              {
                name: "Lucide React",
                icon: "Beautiful, consistent icon library",
                color: "from-orange-500/10 to-orange-500/5",
              },
              {
                name: "Radix UI",
                icon: "Unstyled, accessible component primitives",
                color: "from-green-500/10 to-green-500/5",
              },
              {
                name: "Google Translate API",
                icon: "Industry-leading translation accuracy",
                color: "from-red-500/10 to-red-500/5",
              },
              {
                name: "Web Speech API",
                icon: "Browser-native voice input and synthesis",
                color: "from-cyan-500/10 to-cyan-500/5",
              },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`p-4 bg-gradient-to-br ${tech.color} rounded-xl border`}
              >
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.icon}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl border"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Translating?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join millions of users breaking language barriers every day.
          </p>
          <Link href="/ai-translate" className="cursor-pointer">
            <Button size="lg" className="gap-2">
              <Zap className="w-5 h-5" />
              Start Translating Now
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
