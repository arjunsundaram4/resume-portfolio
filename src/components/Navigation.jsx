import { useState } from "react"

export default function Navigation({ active, setActive }) {
  const sections = ["about", "education", "skills", "experience", "projects"]
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <div className="font-bold text-lg">Arjun</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {sections.map(s => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`px-4 py-2 rounded ${
                active === s ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          {sections.map(s => (
            <button
              key={s}
              onClick={() => {
                setActive(s)
                setOpen(false) // close menu after selection
              }}
              className={`w-full text-left px-4 py-3 border-b hover:bg-gray-100 ${
                active === s ? "bg-black text-white" : "text-gray-700"
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
