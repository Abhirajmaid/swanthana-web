import { navLinks } from "../../constants/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-background pt-16 pb-8 border-t border-brand-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo1.png"
                alt="Swanthana Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
                priority
              />
              <h3 className="text-xl font-semibold text-brand-primary">
                Swanthana
              </h3>
            </div>
            <p className="text-brand-gray">
              Swanthana is a women-exclusive rehabilitation center offering
              psychiatric care, de-addiction programs, trauma therapy, and
              holistic recovery for women in need.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks
                .filter((link) => !link.subLinks)
                .map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-brand-gray hover:text-brand-primary transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-primary">
              Contact Us
            </h3>
            <div className="space-y-2 text-brand-gray text-sm">
              <p>
                📍 H.No. 17-1-391/T/261,
                <br />
                Saraswathi Nagar, Saroornagar,
                <br />
                Hyderabad – 500035, Telangana, India
              </p>
              <p>📞 +91 98495 37798</p>
              <p>✉️ swanthanarehab@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-brand-primary/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-brand-gray text-sm">
              &copy; {new Date().getFullYear()} Swanthana. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/swanthanarehab" // Update if actual page exists
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-brand-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f text-lg" />
              </a>
              <a
                href="https://www.instagram.com/swanthanarehab" // Placeholder
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-brand-primary transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-lg" />
              </a>
              <a
                href="https://www.youtube.com/@swanthanarehabilitation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-brand-primary transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <i className="fab fa-youtube text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
