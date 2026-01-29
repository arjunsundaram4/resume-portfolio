import profile from "../../assets/profile.json"

export default function About() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">About</h2>

      <div className="bg-white border rounded-lg p-6 text-gray-700 leading-relaxed">
        <p>{profile.about}</p>
      </div>
    </section>
  )
}
