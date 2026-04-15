"use client";

import { useState } from "react";
import Button from "../../ui/Button";

interface ApplyFormProps {
  jobTitle?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
}

export default function ApplyForm({ jobTitle = "Position", onSubmit }: ApplyFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 w-full">
      <h2 className="text-neutral-800 font-bold mb-2">Apply Here</h2>
      <p className="text-neutral-600 mb-8">
        Discover top remote tech opportunities and land your next role with ease, through our streamlined process.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Carter"
            value={formData.name}
            onChange={handleInputChange}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="John Carter"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="John Carter"
            value={formData.phone}
            onChange={handleInputChange}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary"
            required
          />
        </div>

        {/* Upload Resume */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">Upload your resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white cursor-pointer"
            accept=".pdf,.doc,.docx"
          />
          <span className="text-neutral-500 text-xs">No file chooser</span>
        </div>

        {/* Cover Letter */}
        <div className="flex flex-col gap-2">
          <label className="text-neutral-700 text-sm font-medium">Cover Letter</label>
          <textarea
            name="coverLetter"
            placeholder="Enter your message"
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows={5}
            className="border border-neutral-300 rounded-lg px-4 py-3 text-base placeholder-neutral-500 focus:outline-none focus:border-primary resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            variant="primary"
            className="w-full bg-primary text-white px-6 py-4 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
          >
            Apply now
          </Button>
        </div>
      </form>
    </div>
  );
}
