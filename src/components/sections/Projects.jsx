import projects from "../../assets/projects.json"

export default function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <article
            key={i}
            className="border rounded-xl p-5 sm:p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">
              {project.name}
            </h3>

            {/* Meta */}
            <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-3">
              {project.organization} • {project.period}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              {project.highlights.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 text-gray-400">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Optional GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
