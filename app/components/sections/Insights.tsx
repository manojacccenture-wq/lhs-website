// =============================
// Insights.tsx
// =============================
export default function Insights() {
  return (
    <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-6 bg-white rounded shadow">
          <h3 className="text-2xl font-bold">35 Years</h3>
          <p className="text-gray-500 text-sm">Experience</p>
        </div>
      ))}
    </section>
  );
}