import { Link } from "react-router-dom";

export default function Alter() {
  return (
    <div className="mt-16">
      {/* Current Projects */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Current Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src="https://i.ibb.co.com/HLSq3JfB/IMG-0844.jpg"
            alt="Autonomous Robot Navigation"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Dipto</h3>
            <p className="text-gray-600 mb-4">
              Dipto is an initiative under LaSSET, BSRM School of Engineering dedicated to designing and manufacturing affordable and accessible satellite training kits to enrich STEM culture and promote space education in Bangladesh. Our goal is to bridge the gap between theoretical knowledge and hands-on experience by providing students, educators, and enthusiasts with practical tools to explore satellite technology.

Through Dipto, we aim to inspire the next generation of engineers, scientists and innovators, especially in underrepresented and underserved communities. By fostering curiosity and creativity, we believe Dipto can be a stepping stone toward a thriving space ecosystem in Bangladesh and beyond.

            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-research-100 text-research-800 px-3 py-1 rounded-full">
                Active
              </span>
              <span className="text-sm text-gray-500">
                Started: January 2025
              </span>
             
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src="https://i.ibb.co.com/PZwNSn9D/Whats-App-Image-2025-04-21-at-11-24-49-b8c09fe8.jpg"
            alt="Space Debris Capture System"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">R.A.V.E.N
(Research on Aerial Vehicle with Enhanced Neural network)
</h3>
            <p className="text-gray-600 mb-4">
            R.A.V.E.N is an innovative research project focused on integrating neural networks into drone flight control systems. The core objective is to develop intelligent algorithms that enable aerial vehicles to maintain flight stability in turbulent air conditions.

By combining machine learning with real-time sensor data, R.A.V.E.N aims to create drones that can adapt dynamically to unpredictable environmental challenges—making autonomous flight safer, smarter, and more reliable.

This project has the potential to advance applications in disaster response, surveillance and remote sensing  especially in regions with complex weather patterns or uncertain flight paths.

            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-research-100 text-research-800 px-3 py-1 rounded-full">
                Active
              </span>
              
            </div>
          </div>
        </div>
        
      </div>
      

      {/* Contact Prompt */}
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600">
          Interested in our research methodology or want to explore more
          projects?
        </p>
        <p className="mt-2 text-research-600">
          Contact us to learn more about our work or potential collaboration
          opportunities.
        </p>
      </div>
    </div>
  );
}
