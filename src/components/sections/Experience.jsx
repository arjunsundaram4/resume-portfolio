import experience from "../../assets/experience.json"

export default function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-8">
        {experience.map((job, i) => (
          <div key={i} className="border-l-2 pl-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-800">{job.company}</p>
            <p className="text-gray-500 text-sm mb-3">
              {job.location} • {job.period}
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
