export default function Space() {
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
            src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-23%20at%202.37.53%20PM.png"
            alt="Autonomous Robot Navigation"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">BRACU Digonto</h3>
            <p className="text-gray-600 mb-4">
              Developing robust navigation systems for robots operating in
              challenging environments without GPS or pre-mapped routes.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-research-100 text-research-800 px-3 py-1 rounded-full">
                Active
              </span>
              <span className="text-sm text-gray-500">
                Started: January 2025
              </span>
              {/* <span>
                <a
                  href="https://bracu-alter.web.app/"
                  className="text-research-600 hover:text-research-800"
                >
                  View Project
                </a>
              </span> */}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//IMG_0844.JPG"
            alt="Space Debris Capture System"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">BRACU Dipto</h3>
            <p className="text-gray-600 mb-4">
              Designing a novel system for identifying, tracking, and safely
              removing orbital debris to reduce collision risks.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-research-100 text-research-800 px-3 py-1 rounded-full">
                Active
              </span>
              <span className="text-sm text-gray-500">
                Started: October 2024
              </span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//WhatsApp%20Image%202025-04-21%20at%2011.24.49_b8c09fe8.jpg"
            alt="Space Debris Capture System"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">BRACU Raven</h3>
            <p className="text-gray-600 mb-4">
              Designing a novel system for identifying, tracking, and safely
              removing orbital debris to reduce collision risks.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-research-100 text-research-800 px-3 py-1 rounded-full">
                Active
              </span>
              <span className="text-sm text-gray-500">
                Started: October 2024
              </span>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-23%20at%202.30.09%20PM.png"
            alt="Space Debris Capture System"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">BRACU Rocketry</h3>
            <p className="text-gray-600 mb-4">
              Designing a novel system for identifying, tracking, and safely
              removing orbital debris to reduce collision risks.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-research-100 text-research-800 px-3 py-1 rounded-full">
                Active
              </span>
              <span className="text-sm text-gray-500">
                Started: October 2024
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
