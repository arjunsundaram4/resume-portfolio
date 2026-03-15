import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation({ active, setActive }) {
  const [open, setOpen] = useState(false)

  const sections = [
    "about",
    "education",
    "skills",
    "experience",
    "projects",
    "courses",
    "certifications",
    "recommendations"
  ]

  const handleClick = (section) => {
    setActive(section)
    setOpen(false)
  }

  return (
    <nav className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-5xl mx-auto px-4">

        {/* Top bar */}
        <div className="flex justify-between items-center py-3">

          <span className="md:hidden font-semibold text-lg">
            Portfolio
          </span>

          {/* Hamburger button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-4">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`px-3 py-2 rounded-md text-sm transition ${
                  active === s
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>

        </div>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col gap-2 pb-4 md:hidden">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => handleClick(s)}
                className={`px-3 py-2 rounded-md text-left ${
                  active === s
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        )}

      </div>
    </nav>
  )
}