"use client";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SectionHeader from "@/src/components/common/SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Center",
      primary: "Saroornagar, Hyderabad",
      secondary: "H.No. 17-1-391/T/261, Saraswathi Nagar",
      color: "from-purple-500/10 to-violet-500/10",
      iconBg: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Today",
      primary: "+91 98495 37798",
      secondary: "Mon–Sat, 9 AM – 6 PM",
      color: "from-green-500/10 to-emerald-500/10",
      iconBg: "bg-green-500/10 text-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      primary: "swanthanarehab@gmail.com",
      secondary: "Replies within 24 hours",
      color: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500/10 text-blue-600",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-white to-brand-secondary/3"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <SectionHeader
          badge={{ icon: <Mail />, text: "Contact Us" }}
          title="Get in"
          gradientText="Touch"
          description="We're here to help. Reach out to us for any queries, support, or to learn more about our services"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${info.color} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 ${info.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-dark mb-1">
                        {info.title}
                      </h3>
                      <div className="text-brand-dark font-medium mb-1">
                        {info.primary}
                      </div>
                      <p className="text-brand-gray text-sm">
                        {info.secondary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-brand-gray mb-6">
                For urgent support or detailed inquiries, visit our
                comprehensive contact page or call us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Full Contact Page
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919849537798"
                  className="bg-white text-brand-primary border-2 border-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Quick Message
                </h3>
                <p className="text-brand-gray">
                  Send us a quick message and we'll get back to you soon.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-brand-dark font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-brand-dark font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-brand-dark font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
