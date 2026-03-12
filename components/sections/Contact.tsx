"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    // Replace with your form submission logic (e.g. API route, Resend, Formspree)
    console.log("Form submitted:", form);
    alert("Message sent! (wire up your API route)");
  };

  const inputClass =
    "w-full bg-[#111111] border border-white/[0.07] rounded-sm px-4 py-3.5 text-white placeholder-[#555] text-[14px] focus:outline-none focus:border-[#c9a84c] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)] transition-all";

  return (
    <section id="contact" className="py-32 px-12 bg-[#080808] relative overflow-hidden">
      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none -z-0"
        style={{
          width: 500,
          height: 500,
          background: "rgba(201,168,76,0.04)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2
          className="font-display text-white leading-none tracking-[0.03em] mb-4"
          style={{ fontSize: "clamp(42px,6vw,80px)" }}
        >
          Let's Build
          <br />
          Something
        </h2>
        <p className="text-[15px] text-[#555] mb-14 leading-[1.7]">
          Have a project in mind? Let's talk about it.
        </p>

        <div className="space-y-5">
          {/* Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-mono text-[10px] tracking-[0.12em] text-[#555] uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-[0.12em] text-[#555] uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[10px] tracking-[0.12em] text-[#555] uppercase mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block font-mono text-[10px] tracking-[0.12em] text-[#555] uppercase mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-[#c9a84c] text-[#080808] font-bold text-[12px] tracking-[0.12em] uppercase rounded-sm hover:bg-[#dbb95a] hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] transition-all mt-2"
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}
