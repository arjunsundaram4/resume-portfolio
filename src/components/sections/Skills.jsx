import skills from "../../assets/skills.json"

export default function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold capitalize mb-2">
            {category.replace(/_/g, " ")}
          </h3>

          <div className="flex flex-wrap gap-2">
            {items.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 border rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
