import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Care Street, City, State 12345",
      color: "from-rose-500/20 to-pink-500/20 text-rose-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "contact@swanthana.org",
      color: "from-amber-500/20 to-orange-500/20 text-amber-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/contact-pattern.svg')] opacity-5" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-secondary/10 via-brand-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <div className="badge badge-primary inline-flex mb-4">
                Contact Us
              </div>
              <h2 className="text-heading mb-6">
                Get in <span className="text-brand-primary">Touch</span>
              </h2>
              <p className="text-body text-brand-gray max-w-lg">
                We're here to help. Reach out to us for any queries or support.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-20 rounded-2xl transition-opacity group-hover:opacity-30`}
                  />
                  <div className="relative flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-white ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-dark mb-1">
                        {info.title}
                      </h3>
                      <p className="text-brand-gray">{info.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-[40px] transform rotate-6" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[40px] border border-white/20 shadow-xl p-8">
              <div className="absolute -right-12 -top-12">
                <Image
                  src="/images/contact-vector.svg"
                  alt="Contact Decoration"
                  width={120}
                  height={120}
                  className="animate-float"
                />
              </div>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="input" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input"
                />
                <textarea placeholder="Your Message" className="input" />
                <button type="submit" className="btn-primary w-full">
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
