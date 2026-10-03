import { motion } from "framer-motion";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&display=swap');
        .f-display { font-family: 'Archivo Black', sans-serif; }
        .f-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Main Footer */}
      <div className="py-20">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="f-display mb-4 text-xl">
                MED<span className="text-[#C6F135]">QUEL</span>
              </h3>
              <p className="f-body mb-4 text-sm text-white/50">
                Revolutionizing medical education through gamified learning
              </p>
              <p className="f-body text-xs text-white/30">
                Empowering medical aspirants since 2025
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="f-body mb-4 text-sm font-semibold text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Features", href: "#features" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Screenshots", href: "#screenshots" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="f-body mb-4 text-sm font-semibold text-white">
                Legal
              </h4>
              <ul className="space-y-2">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Refund Policy",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="f-body mb-4 text-sm font-semibold text-white">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#help"
                    className="f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@medquel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="f-body flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#C6F135]"
                  >
                    <Mail className="h-4 w-4" />
                    support@medquel.com
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="f-body text-sm text-white/50 transition-colors hover:text-[#C6F135]"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-2xl rounded-xl border border-white/10 bg-[#111] p-6"
          >
            <div className="mb-4 text-center">
              <h4 className="f-body text-lg font-semibold text-white">
                Stay Updated
              </h4>
              <p className="f-body mt-1 text-sm text-white/50">
                Get study tips, contest alerts, and updates directly to your
                inbox
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="f-body min-w-0 flex-1 rounded-lg border border-white/15 bg-[#1a1a1a] px-4 py-3 text-white placeholder:text-white/30 focus:border-[#C6F135] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="f-body flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#C6F135] px-6 py-3 font-medium text-black transition-colors hover:bg-[#d5fb5a]"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Social Media & Download */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <div className="flex items-center gap-4">
              <span className="f-body mr-2 text-sm text-white/40">
                Follow Us:
              </span>
              {[
                { icon: Instagram, link: "https://instagram.com/medquel" },
                { icon: Facebook, link: "https://facebook.com/medquel" },
                { icon: Twitter, link: "https://twitter.com/medquel" },
                { icon: Linkedin, link: "https://linkedin.com/medquel" },
                { icon: Youtube, link: "https://youtube.com/medquel" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111] transition-colors hover:border-[#C6F135]/60"
                >
                  <social.icon className="h-4 w-4 text-white/50 transition-colors group-hover:text-[#C6F135]" />
                </a>
              ))}
            </div>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black px-6 py-3 text-white transition-colors hover:border-[#C6F135]/60"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" />
              </svg>
              <div className="text-left">
                <div className="f-body text-xs text-white/50">Download on</div>
                <div className="f-body text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-8 py-6 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/30 md:flex-row">
            <p className="f-body">&copy; 2026 Med Quel. All rights reserved.</p>
            <p className="f-body">
              Made with ❤️ for medical aspirants worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
