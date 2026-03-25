"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Clock,
  Globe,
  Zap,
  Languages,
  Shield,
  ArrowRight,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/xwvweqlj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full inline-block"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-6 mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions or feedback? We would love to hear from you. Fill out
            the form below or reach out directly.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Mail,
              title: "Email",
              value: "contact@nagritranslate.com",
              color: "text-blue-500",
              bgColor: "bg-blue-500/10",
              gradient: "from-blue-500/5 to-blue-500/10",
            },
            {
              icon: Globe,
              title: "Location",
              value: "Available Worldwide",
              color: "text-emerald-500",
              bgColor: "bg-emerald-500/10",
              gradient: "from-emerald-500/5 to-emerald-500/10",
            },
            {
              icon: Clock,
              title: "Support Hours",
              value: "24/7 Available",
              color: "text-purple-500",
              bgColor: "bg-purple-500/10",
              gradient: "from-purple-500/5 to-purple-500/10",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 bg-gradient-to-br ${item.gradient} rounded-2xl border`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form + Side Info */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. We&apos;ll get back to you within
                  24–48 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    placeholder="How can we help?"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your question or feedback..."
                    required
                    rows={5}
                    className="w-full rounded-xl border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full gap-2"
                >
                  <Send className="w-4 h-4" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Contact Us?</h2>
              <ul className="space-y-3">
                {[
                  {
                    icon: Zap,
                    text: "Report a translation issue or suggest improvements",
                  },
                  { icon: Shield, text: "Privacy or data-related questions" },
                  { icon: Globe, text: "Language support or feature requests" },
                  {
                    icon: MessageSquare,
                    text: "General feedback or partnership inquiries",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We typically respond to all inquiries within 24–48 hours. For
                urgent translation issues, please include as much detail as
                possible in your message.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-muted/20">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Quick Links
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              href: "/ai-translate",
              icon: Zap,
              label: "Start Translating",
              desc: "Free instant translation",
              color: "text-blue-500",
              bg: "bg-blue-500/10",
              gradient: "from-blue-500/5 to-blue-500/10",
              shadow: "hover:shadow-blue-500/20",
            },
            {
              href: "/languages",
              icon: Languages,
              label: "Browse Languages",
              desc: "248+ languages available",
              color: "text-emerald-500",
              bg: "bg-emerald-500/10",
              gradient: "from-emerald-500/5 to-emerald-500/10",
              shadow: "hover:shadow-emerald-500/20",
            },
            {
              href: "/about",
              icon: Shield,
              label: "About Us",
              desc: "Learn about our mission",
              color: "text-purple-500",
              bg: "bg-purple-500/10",
              gradient: "from-purple-500/5 to-purple-500/10",
              shadow: "hover:shadow-purple-500/20",
            },
            {
              href: "/privacy",
              icon: ArrowRight,
              label: "Privacy Policy",
              desc: "Your data is secure",
              color: "text-orange-500",
              bg: "bg-orange-500/10",
              gradient: "from-orange-500/5 to-orange-500/10",
              shadow: "hover:shadow-orange-500/20",
            },
          ].map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className={`group block p-6 bg-gradient-to-br ${link.gradient} rounded-xl border hover:shadow-lg ${link.shadow} transition-all`}
              >
                <div
                  className={`w-10 h-10 ${link.bg} rounded-lg flex items-center justify-center mb-3`}
                >
                  <link.icon className={`w-5 h-5 ${link.color}`} />
                </div>
                <h3 className="font-semibold mb-1">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
          <Link href="/ai-translate">
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
