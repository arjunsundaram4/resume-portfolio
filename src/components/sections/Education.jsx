import education from "../../assets/education.json"

export default function Education() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Education</h2>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="border-l-2 pl-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-700">{edu.school}</p>
            <p className="text-gray-500 text-sm">
              {edu.location} • {edu.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
