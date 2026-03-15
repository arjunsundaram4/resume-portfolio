import data from "../../assets/profileExtras.json"

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Recommendations</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.recommendations.map((rec, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <p className="italic text-gray-700">“{rec.quote}”</p>

            <div className="mt-4">
              <p className="font-semibold">{rec.name}</p>
              <p className="text-sm text-gray-500">
                {rec.role} • {rec.relationship}
              </p>
              <p className="text-xs text-gray-400 mt-1">{rec.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}