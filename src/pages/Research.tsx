import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // Assuming you're using Lucide

export default function Research() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Research & Projects
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Exploring new frontiers in robotics and space engineering through
            innovative research and interdisciplinary collaboration.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Research Areas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Robotics */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md flex items-center justify-center mb-4">
                {/* SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Robotics</h3>
              <p className="text-gray-600 mb-4">
                Our robotics research focuses on developing advanced autonomous
                systems capable of operating in complex and dynamic
                environments.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Autonomous Navigation Systems</li>
                <li>Human-Robot Interaction</li>
                <li>Robotic Perception</li>
                <li>Multi-Agent Systems</li>
                <li>Soft Robotics</li>
              </ul>
            </div>

            {/* Space Engineering */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-md flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Space Engineering</h3>
              <p className="text-gray-600 mb-4">
                Our space engineering research addresses challenges in
                spacecraft design, orbital mechanics, and space exploration
                technologies.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Orbital Debris Mitigation</li>
                <li>In-Space Manufacturing</li>
                <li>Satellite Systems</li>
                <li>Propulsion Technologies</li>
                <li>Space Resource Utilization</li>
              </ul>
            </div>

            {/* Interdisciplinary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-700 rounded-md flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Interdisciplinary Projects
              </h3>
              <p className="text-gray-600 mb-4">
                We bring together expertise from multiple disciplines to tackle
                complex challenges at the intersection of robotics, space
                engineering, and other fields.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>AI for Space Applications</li>
                <li>Planetary Exploration Robotics</li>
                <li>Sustainability in Space</li>
                <li>Earth Observation Systems</li>
                <li>Crisis Response Technology</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//27.jpg"
                alt="Autonomous Robot Navigation"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  4IR: Robotics Research
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team has developed a breakthrough in autonomous navigation
                  that enables robots to navigate complex and dynamic
                  environments with unprecedented accuracy.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Active
                  </span>
                  <span className="text-sm text-gray-500">
                    Started: January 2025
                  </span>
                  <Link
                    to="/alter"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View all research projects{" "}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//294597575_454838666650924_6642076040121578354_n.jpg"
                alt="Space Debris Capture System"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Space Systems</h3>
                <p className="text-gray-600 mb-4">
                  Enhancing productivity and safety in human-robot collaborative
                  environments through advanced sensing and responsive systems.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Active
                  </span>
              
                  <span>
                  <Link
                    to="/sst"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View all research projects{" "}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  </span>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600">
            Interested in our research methodology or want to explore more
            projects?
          </p>
          <p className="mt-2 text-blue-600">
            Contact us to learn more about our work or potential collaboration
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
