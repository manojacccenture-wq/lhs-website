// =============================
// Contact.tsx
// =============================
export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-16">
      <h2 className="text-center font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Message" />
        <button className="bg-green-500 text-white px-6 py-3 rounded-full w-full">
          Send Message
        </button>
      </form>
    </section>
  );
}
