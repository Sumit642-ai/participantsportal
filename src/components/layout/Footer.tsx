import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "Schedule", to: "/schedule" },
      { label: "Accommodation", to: "/accommodation" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container px-4 pb-24">
        <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#2d1c1b] via-[#14151e] to-[#0d0d15] shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#ff784f]/25 blur-3xl" />
          <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-[#ff5a45]/15 blur-3xl" />

          <div className="relative px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-4">
                  <img
                    src="/ges.png"
                    alt="GES logo"
                    className="h-16 w-auto drop-shadow-[0_12px_30px_rgba(255,90,69,0.35)]"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-[32px]">
                  Join us to inspire innovation
                </h2>

                <form
                  className="flex flex-col gap-4 sm:flex-row"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                    <Input
                      type="email"
                      placeholder="Your mail address"
                      className="h-12 rounded-full border-white/15 bg-white/5 pl-12 text-base text-white placeholder:text-white/60 focus-visible:ring-amber-400 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-12 rounded-full bg-gradient-to-r from-[#ff7a3c] via-[#ff5a45] to-[#ff3d3d] px-8 text-base font-semibold uppercase tracking-tight text-white shadow-[0_18px_50px_rgba(255,90,69,0.35)] transition-transform hover:-translate-y-0.5"
                  >
                    Register
                  </Button>
                </form>
              </div>

              <div className="flex justify-start lg:justify-end">
                {navColumns.map((column) => (
                  <div key={column.title} className="space-y-4 text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                      {column.title}
                    </p>
                    <div className="flex flex-col gap-3 text-base text-white">
                      {column.links.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="group relative inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white w-fit"
                        >
                          <span>{item.label}</span>
                          <span className="h-px w-6 origin-left scale-x-0 bg-white/40 transition-transform duration-200 group-hover:scale-x-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
              <span>(c) 2026 GES Entrepreneurship Cell</span>

              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  Connect With
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/ecell.iitkgp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ecell_iitkgp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/entrepreneurship-cell-iit-kharagpur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;