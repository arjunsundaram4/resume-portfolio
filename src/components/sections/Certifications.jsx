import data from "../../assets/profileExtras.json"

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Certifications</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.certifications.map((cert, i) => (
          <div key={i} className="bg-white border rounded-xl p-5 shadow">
            <p className="font-semibold">{cert.title}</p>
            <p className="text-sm text-gray-500">{cert.issuer}</p>
            <p className="text-xs text-gray-400 mt-1">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}