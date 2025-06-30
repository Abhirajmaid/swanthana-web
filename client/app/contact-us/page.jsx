"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-[120px] md:py-[180px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
            alt="Contact Us Hero"
            className="w-full h-full object-cover object-center"
            priority
            sizes="100vw"
            width={1500}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-dark/60 to-brand-background" />
        </div>
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg text-center">
            Contact Swanthana NGO
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-0 drop-shadow text-center">
            We’re here to help children and families thrive. Reach out for
            support, volunteering, donations, or partnership opportunities.
          </p>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl -z-1" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-secondary/10 rounded-full blur-2xl -z-1" />
      </section>
      {/* Contact Info & Map */}
      <section className="py-16 bg-brand-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="uppercase text-brand-primary font-semibold tracking-widest text-sm mb-2 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get in Touch With Swanthana
            </h2>
            <p className="text-brand-gray max-w-xl mx-auto">
              Whether you’re a parent, donor, volunteer, or supporter, we’d love
              to connect. Visit our center, call, or email us for more
              information about our programs and how you can make a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-brand-background rounded-2xl p-8 flex flex-col items-center text-dark shadow">
              <span className="text-3xl mb-3">📞</span>
              <div className="font-bold text-xl mb-1">Phone</div>
              <div className="text-dark text-xl">+91 98450 12345</div>
              <div className="text-dark/60 text-base mt-2">
                Mon-Sat, 9am-6pm
              </div>
            </div>
            <div className="bg-brand-background rounded-2xl p-8 flex flex-col items-center text-dark shadow">
              <span className="text-3xl mb-3">✉️</span>
              <div className="font-bold text-xl mb-1">Email</div>
              <div className="text-dark text-xl">contact@swanthana.org</div>
              <div className="text-dark/60 text-base mt-2">
                We reply within 24 hours
              </div>
            </div>
            <div className="bg-brand-background rounded-2xl p-8 flex flex-col items-center text-dark shadow">
              <span className="text-3xl mb-3">📍</span>
              <div className="font-bold text-lg mb-1">Swanthana Center</div>
              <div className="text-dark/80 text-center">
                Swanthana Rehabilitation Centre,
                <br />
                #123, 2nd Cross, 5th Main, Jayanagar,
                <br />
                Bengaluru, Karnataka 560041, India
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow mb-12">
            <iframe
              title="Swanthana Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.964726021002!2d77.583805!3d12.925872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d1e9e8e8e1%3A0x1a1a1a1a1a1a1a1a!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      {/* Request a Quote & Side Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Request a quote form */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-brand-gray mb-6">
              Fill out the form and our Swanthana team will get back to you as
              soon as possible. For urgent queries, please call us directly.
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // handle form submit here
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 rounded-lg border border-brand-primary/20 focus:border-brand-primary outline-none"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-lg border border-brand-primary/20 focus:border-brand-primary outline-none"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="px-4 py-3 rounded-lg border border-brand-primary/20 focus:border-brand-primary outline-none"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="px-4 py-3 rounded-lg border border-brand-primary/20 focus:border-brand-primary outline-none"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value }))
                  }
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-brand-primary/20 focus:border-brand-primary outline-none"
                required
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-3 rounded-full font-semibold shadow hover:bg-brand-primary/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Side Info */}
          <div className="flex flex-col justify-between">
            <div className="bg-gradient-to-br from-brand-primary/90 to-brand-secondary/80 rounded-2xl p-8 text-white shadow mb-8">
              <span className="uppercase text-sm font-bold text-orange-200 mb-2 block">
                Support Swanthana
              </span>
              <h4 className="text-2xl font-bold mb-2">
                Become a Volunteer or Donor
              </h4>
              <p className="text-white/80 mb-4">
                Join us in making a difference for children with special needs.
                Volunteer your time or support us with a donation—every
                contribution counts!
              </p>
              <button className="bg-white text-brand-primary font-semibold px-6 py-2 rounded-full shadow hover:bg-orange-100 transition">
                Join Us
              </button>
            </div>
            <div className="bg-gradient-to-br from-brand-secondary/90 to-brand-primary/80 rounded-2xl p-8 text-white shadow">
              <span className="uppercase text-sm font-bold text-orange-200 mb-2 block">
                Visit Us
              </span>
              <h4 className="text-2xl font-bold mb-2">
                See Swanthana in Action
              </h4>
              <p className="text-white/80 mb-4">
                We welcome visitors and partners to our center. Schedule a visit
                to experience our programs and meet our team.
              </p>
              <button className="bg-white text-brand-primary font-semibold px-6 py-2 rounded-full shadow hover:bg-orange-100 transition">
                Book a Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
