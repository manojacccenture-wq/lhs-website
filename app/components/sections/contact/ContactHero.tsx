"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactInfoCardProps {
  title: string;
  description: string;
}

function ContactInfoCard({ title, description }: ContactInfoCardProps) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <h3 className="text-black font-bold text-2xl leading-[35px]">{title}</h3>
      <p className="text-neutral-600 text-base leading-[28.916px]">{description}</p>
    </div>
  );
}

export default function ContactHero() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full py-20 px-6 relative bg-gradient-to-b from-primary/5 to-transparent mt-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* 2-Column Grid: Content Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12">
            {/* Main Heading */}
            <div className="flex flex-col gap-6">
              <h1 className="text-primary text-4xl font-bold leading-[46px]">Contact US</h1>
              <p className="text-neutral-600 text-lg leading-7 max-w-md">
                We'd love to hear from you. Whether you have a question, need support, or want to discuss a project, feel free to reach out to us anytime.
              </p>
            </div>

            {/* Contact Info (Email + Phone) */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-neutral-600 text-lg leading-7">LHS@india.com</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-neutral-600 text-lg leading-7">9098789045</p>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ContactInfoCard
                title="Reach out"
                description="We're here to connect. Reach out to us for inquiries, collaborations, or support — and we'll respond promptly."
              />
              <ContactInfoCard
                title="Needs assistance"
                description="Have questions or need assistance? Our team is ready to help you with the right solutions."
              />
            </div>
          </div>

          {/* RIGHT COLUMN - FORM CARD */}
          <div className="bg-white rounded-3xl border border-neutral-300 p-8 shadow-sm h-fit sticky top-20">
            <div className="mb-8">
              <h2 className="text-primary text-2xl font-bold leading-[35px] mb-2">Get in touch here</h2>
              <p className="text-neutral-600 text-lg leading-7">You can reach us any time</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Carter"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3">
                <label className="text-neutral-800 text-sm font-normal">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="border border-neutral-300 rounded-2xl px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
