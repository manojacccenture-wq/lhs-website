import Button from "../../ui/Button";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-20 px-4">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-neutral-800)" }}>
          Contact Us
        </h2>
        <p className="text-lg" style={{ color: "var(--color-neutral-600)" }}>
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-6 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-neutral-800)" }}>
            Name
          </label>
          <input 
            type="text"
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition"
            placeholder="Your name"
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-neutral-800)" }}>
            Email
          </label>
          <input 
            type="email"
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition"
            placeholder="your@email.com"
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />
        </div>

        {/* Subject Input */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-neutral-800)" }}>
            Subject
          </label>
          <input 
            type="text"
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition"
            placeholder="What is this about?"
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-neutral-800)" }}>
            Message
          </label>
          <textarea 
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-1)] focus:border-transparent transition resize-none"
            placeholder="Your message"
            rows={6}
            style={{ backgroundColor: "var(--color-neutral-100)" }}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button variant="primary">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
}
