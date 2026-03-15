import data from "../../assets/profileExtras.json"

export default function Courses() {
  return (
    <section id="courses" className="py-16">
      <h2 className="text-3xl font-bold mb-10">Graduate Coursework</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {data.courses.map((course, i) => (
          <div key={i} className="border rounded-lg p-4">
            <p className="font-semibold">{course.title}</p>
            <p className="text-sm text-gray-500">
              {course.code} • {course.university}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}