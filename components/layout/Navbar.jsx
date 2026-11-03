"use client";

import React, { useState, useEffect } from "react";
import { siteMetadata, navigationLinks } from "@/data/content";
import { Menu, X, Terminal, Shield, LogIn, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#05070E]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/30"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#05070E] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-6 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  Vault<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ofCodes</span>
                </span>
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase -mt-1">
                  EdTech &bull; SaaS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#free-tests"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLoginModal(true);
                }}
                className="px-3 py-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 rounded-full transition-colors hover:bg-cyan-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                Free Tests
              </a>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={handleLoginClick}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-200 hover:text-white border border-white/10 hover:border-white/20 rounded-xl bg-white/5 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <LogIn className="w-4 h-4 text-blue-400" />
                Login
              </button>
              <a
                href="#programs"
                onClick={(e) => handleNavClick(e, "#programs")}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:from-blue-600 group-hover:to-cyan-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#05070E] group-hover:bg-opacity-0 rounded-[10px] text-white">
                  Get Started
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={handleLoginClick}
                className="px-3 py-1.5 text-xs font-medium text-slate-200 border border-white/10 rounded-lg bg-white/5"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#05070E]/98 border-b border-white/10 backdrop-blur-xl p-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#free-tests"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setShowLoginModal(true);
                }}
                className="px-4 py-3 text-base font-medium text-cyan-400 bg-cyan-950/30 rounded-xl border border-cyan-500/20"
              >
                Free Skill Diagnostic Tests
              </a>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleLoginClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-white/10"
                >
                  <LogIn className="w-4 h-4 text-blue-400" />
                  Student & Partner Login
                </button>
                <a
                  href="#programs"
                  onClick={(e) => handleNavClick(e, "#programs")}
                  className="w-full text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/20"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Simulated Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-blue-500/10">
            <button
              type="button"
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">VaultofCodes Portal</h3>
                <p className="text-xs text-slate-400 font-mono">Authentication Gateway</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Welcome! Student portal access, code playground sandboxes, and enterprise recruiter accounts are available for active cohort members and verified partners.
            </p>

            <div className="space-y-3 mb-6">
              <input
                type="email"
                placeholder="student@example.edu"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                defaultValue=""
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                defaultValue=""
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="w-1/2 py-2.5 px-4 text-sm font-medium text-slate-400 hover:text-white rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert("Simulated authentication: Welcome to VaultofCodes! Full authentication backend is scheduled for Phase 2 expansion.");
                  setShowLoginModal(false);
                }}
                className="w-1/2 py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-md shadow-blue-500/20 hover:opacity-95 transition-opacity"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
