"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Globe,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yasinwalum@example.com",
    href: "mailto:yasinwalum@example.com",
    color: "text-cyan-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kampala, Uganda",
    href: null,
    color: "text-rose-500",
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "EAT (UTC+3)",
    href: null,
    color: "text-amber-500",
  },
  {
    icon: Globe,
    label: "Languages",
    value: "English, Swahili",
    href: null,
    color: "text-violet-500",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: IconBrandGithub,
    href: "https://github.com/wyasyn",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://linkedin.com/in/yasin-walum",
    color: "hover:text-blue-500",
  },
  {
    name: "Twitter",
    icon: IconBrandX,
    href: "https://x.com/wyasyn",
    color: "hover:text-cyan-500",
  },
];

const reasons = [
  {
    title: "Project Collaboration",
    description:
      "Have an exciting project? Let's discuss how we can work together.",
    icon: Coffee,
  },
  {
    title: "Job Opportunities",
    description:
      "Looking for a dedicated developer? I'm open to new opportunities.",
    icon: MessageSquare,
  },
  {
    title: "Just Say Hi",
    description:
      "Want to connect? I'm always happy to chat with fellow developers.",
    icon: Sparkles,
  },
];

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-linear-to-b from-muted/30 via-background to-background"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Let&apos;s Connect</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat?
              <span className="text-primary font-medium">
                {" "}
                I&apos;d love to hear from you!
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Cards */}
              <Section>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-1 h-8 bg-primary rounded-full" />
                    Contact Information
                  </h2>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className={`p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                        info.href ? "cursor-pointer" : "cursor-default"
                      }`}
                      onClick={() =>
                        info.href && window.open(info.href, "_blank")
                      }
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground mb-1">
                            {info.label}
                          </p>
                          <p className="font-medium truncate">{info.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* Social Links */}
              <Section>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Connect on Social
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`w-14 h-14 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </Section>

              {/* Availability Status */}
              <Section>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-linear-to-br from-primary/10 via-violet-500/5 to-pink-500/10 border border-primary/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <h3 className="font-semibold">Currently Available</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m open to new opportunities and exciting projects. I
                    typically respond within 24 hours.
                  </p>
                </motion.div>
              </Section>

              {/* Reasons to Connect */}
              <Section>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Why Reach Out?</h3>
                  {reasons.map((reason, index) => (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <reason.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Right Column - Contact Form */}
            <Section className="lg:col-span-3">
              <div className="relative">
                <div className="sticky top-8">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-8 md:p-10 rounded-3xl bg-card border border-border relative overflow-hidden"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-violet-500/5 opacity-50" />

                    <div className="relative z-10">
                      <h2 className="text-3xl font-semibold mb-2">
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Fill out the form below and I&apos;ll get back to you as
                        soon as possible.
                      </p>

                      {isSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-20 text-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
                          >
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                          </motion.div>
                          <h3 className="text-2xl font-semibold mb-2">
                            Message Sent!
                          </h3>
                          <p className="text-muted-foreground">
                            Thank you for reaching out. I&apos;ll get back to
                            you soon!
                          </p>
                        </motion.div>
                      ) : (
                        <div>
                          <FieldSet>
                            <FieldGroup>
                              {/* Name Field */}
                              <Field>
                                <FieldLabel htmlFor="name">
                                  Full Name
                                </FieldLabel>
                                <Input
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder="John Doe"
                                  value={formState.name}
                                  onChange={handleChange}
                                  className="h-12"
                                />
                                <FieldDescription>
                                  How should I address you?
                                </FieldDescription>
                              </Field>

                              {/* Email Field */}
                              <Field>
                                <FieldLabel htmlFor="email">
                                  Email Address
                                </FieldLabel>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder="john@example.com"
                                  value={formState.email}
                                  onChange={handleChange}
                                  className="h-12"
                                />
                                <FieldDescription>
                                  I&apos;ll use this to get back to you.
                                </FieldDescription>
                              </Field>

                              {/* Subject Field */}
                              <Field>
                                <FieldLabel htmlFor="subject">
                                  Subject
                                </FieldLabel>
                                <Input
                                  id="subject"
                                  name="subject"
                                  type="text"
                                  placeholder="Project Collaboration Opportunity"
                                  value={formState.subject}
                                  onChange={handleChange}
                                  className="h-12"
                                />
                                <FieldDescription>
                                  What&apos;s this about?
                                </FieldDescription>
                              </Field>

                              {/* Message Field */}
                              <Field>
                                <FieldLabel htmlFor="message">
                                  Message
                                </FieldLabel>
                                <FieldDescription>
                                  Tell me more about your project or inquiry.
                                </FieldDescription>
                                <Textarea
                                  id="message"
                                  name="message"
                                  placeholder="Hi Yasin, I'd like to discuss..."
                                  value={formState.message}
                                  onChange={handleChange}
                                  rows={6}
                                  className="resize-none"
                                />
                              </Field>
                            </FieldGroup>

                            {/* Submit Button */}
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="mt-6"
                            >
                              <Button
                                onClick={handleSubmit}
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full h-12 rounded-xl flex items-center justify-center gap-2 group relative overflow-hidden"
                              >
                                <span className="relative z-10 flex items-center gap-2">
                                  {isSubmitting ? (
                                    <>
                                      <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                          duration: 1,
                                          repeat: Infinity,
                                          ease: "linear",
                                        }}
                                      >
                                        <Send className="w-5 h-5" />
                                      </motion.div>
                                      Sending...
                                    </>
                                  ) : (
                                    <>
                                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                      Send Message
                                    </>
                                  )}
                                </span>
                              </Button>
                            </motion.div>
                          </FieldSet>

                          <p className="text-sm text-muted-foreground text-center mt-6">
                            By submitting this form, you agree that I may
                            contact you regarding your inquiry.
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Alternative Contact */}
                  <Section>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="mt-6 p-6 rounded-2xl bg-muted/50 border border-border text-center"
                    >
                      <p className="text-sm text-muted-foreground mb-3">
                        Prefer email? Drop me a line directly
                      </p>
                      <a
                        href="mailto:yasinwalum@example.com"
                        className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        yasinwalum@example.com
                      </a>
                    </motion.div>
                  </Section>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            What Happens <span className="text-primary">Next?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Here&apos;s what you can expect after reaching out
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Quick Response",
                description:
                  "I'll review your message and respond within 24 hours.",
              },
              {
                step: "2",
                title: "Initial Discussion",
                description:
                  "We'll discuss your project needs and explore possibilities.",
              },
              {
                step: "3",
                title: "Let's Build",
                description:
                  "If we're a good fit, we'll start bringing your vision to life!",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
