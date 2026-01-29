import profile from "../assets/profile.json";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import profileImage from "../assets/profile.jpeg";

export default function Header() {
  return (
    <header className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt={profile.name}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:flex-1">
          <h1 className="text-5xl font-bold">{profile.name}</h1>
          <p className="text-xl text-gray-400 mt-2">{profile.title}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-gray-400">
            <a href={`mailto:${profile.email}`}><Mail /></a>
            <a href={`tel:${profile.phone}`}><Phone /></a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer"><Github /></a>
            <span className="flex items-center gap-1"><MapPin />{profile.location}</span>
          </div>
        </div>

      </div>
    </header>
  )
}
