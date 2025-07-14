"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Heart,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "@/src/components/common/SectionHeader";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      primary: "+91 98495 37798",
      secondary: "Mon–Sat, 9 AM – 6 PM",
      description: "Immediate assistance for urgent matters",
      color: "from-green-500/10 to-emerald-500/10",
      iconBg: "bg-green-500/10 text-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      primary: "swanthanarehab@gmail.com",
      secondary: "Replies within 24 hours",
      description: "Detailed inquiries and documentation",
      color: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Center",
      primary: "Saroornagar, Hyderabad",
      secondary: "H.No. 17-1-391/T/261, Saraswathi Nagar",
      description: "Schedule a visit to see our facility",
      color: "from-purple-500/10 to-violet-500/10",
      iconBg: "bg-purple-500/10 text-purple-600",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "admission", label: "Admission Information" },
    { value: "volunteer", label: "Volunteer Opportunities" },
    { value: "donation", label: "Donation & Support" },
    { value: "partnership", label: "Partnership" },
    { value: "urgent", label: "Urgent Support" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-dark bg-gradient-to-br from-brand-primary via-brand-primary/70 to-brand-secondary py-[120px] md:py-[180px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-transparent to-brand-secondary/20" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5 rounded-full blur-2xl animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
                Get In
              </span>
              <br />
              <span className="text-white/90">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're here to support your journey. Reach out for psychiatric
              support, referrals, volunteering, donations, or any
              recovery-related queries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badge={{ icon: <MessageCircle />, text: "Connect With Us" }}
            title="Multiple Ways to"
            gradientText="Reach Us"
            description="Choose the most convenient way to connect with our team for support, information, or partnership opportunities"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${method.color} rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`w-16 h-16 ${method.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {method.title}
                </h3>
                <div className="text-lg font-semibold text-brand-dark mb-1">
                  {method.primary}
                </div>
                <div className="text-sm text-brand-gray mb-3">
                  {method.secondary}
                </div>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">
                Find Our Location
              </h3>
              <p className="text-brand-gray">
                H.No. 17-1-391/T/261, Saraswathi Nagar, Saroornagar, Hyderabad –
                500035, Telangana, India
              </p>
            </div>
            <div className="h-80">
              <iframe
                title="Swanthana Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.698369260399!2d78.54048907417972!3d17.429982983469863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993948eaaac1%3A0x4bc287d7a4ff3ef4!2sSaraswathi%20Nagar%2C%20Saroornagar%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-brand-dark mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-brand-gray leading-relaxed">
                    Fill out the form below and our team will get back to you
                    shortly. For urgent support, please call directly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-brand-gray mb-6">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-brand-dark font-semibold mb-3">
                        Type of Inquiry
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({
                                ...f,
                                inquiryType: type.value,
                              }))
                            }
                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                              form.inquiryType === type.value
                                ? "bg-brand-primary text-white border-brand-primary"
                                : "bg-white text-brand-gray border-gray-200 hover:border-brand-primary/50"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-brand-dark font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, name: e.target.value }))
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-brand-dark font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-brand-dark font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                          required
                          value={form.phone}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, phone: e.target.value }))
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-brand-dark font-semibold mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          placeholder="Brief subject of your message"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                          required
                          value={form.subject}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, subject: e.target.value }))
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-brand-dark font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Support Card */}
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8 border border-gray-100">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  Support Our Mission
                </h3>
                <p className="text-brand-gray mb-6 leading-relaxed">
                  Help women overcome addiction and mental illness. Volunteer
                  your time or support our cause through donations.
                </p>
                <button className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors flex items-center gap-2">
                  Join Our Cause
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Visit Card */}
              <div className="bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-3xl p-8 border border-gray-100">
                <div className="w-16 h-16 bg-brand-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  Schedule a Visit
                </h3>
                <p className="text-brand-gray mb-6 leading-relaxed">
                  See Swanthana in action. Meet our team and learn how we're
                  helping women recover and rebuild their lives.
                </p>
                <button className="bg-brand-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-secondary/90 transition-colors flex items-center gap-2">
                  Book a Visit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-brand-primary" />
                  <h3 className="text-xl font-bold text-brand-dark">
                    Operating Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Monday - Friday</span>
                    <span className="font-semibold text-brand-dark">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Saturday</span>
                    <span className="font-semibold text-brand-dark">
                      9:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gray">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm text-brand-gray">
                      Emergency support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
