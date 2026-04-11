// =============================
// Services.tsx
// =============================
export default function Services() {
  const items = [1, 2, 3, 4];
  return (
    <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-6">
      {items.map((i) => (
        <div key={i} className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">Service {i}</h3>
          <p className="text-gray-500 text-sm">
            Description about service.
          </p>
        </div>
      ))}
    </section>
  );
}
