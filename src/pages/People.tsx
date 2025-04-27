export default function People() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Meet the researchers, faculty, and students who make our
            cutting-edge research possible.
          </p>
        </div>

        {/* Leadership Section */}
        {/* Leadership Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Directors
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Director */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center w-80">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.42.21%20AM.png"
                alt="Abdulla Hil Kafi"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Abdulla Hil Kafi</h3>
              <p className="text-research-600 font-medium">
                Lecturer (On study leave)
              </p>
              <p className="mt-2 text-gray-600">
                Department of Electrical and Electronic Engineering
              </p>
              {/* <p className="mt-1 text-sm text-gray-500">
                Specializing in autonomous systems and human-robot interaction
                with over 15 years of research experience.
              </p> */}
            </div>

            {/* Associate Director */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center w-80">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.45.20%20AM.png"
                alt="Raihana Shams Islam Antara"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Raihana Shams Islam Antara</h3>
              <p className="text-research-600 font-medium">
                Lecturer (On study leave)
              </p>
              <p className="mt-2 text-gray-600">
                Department of Electrical and Electronic Engineering
              </p>
              {/* <p className="mt-1 text-sm text-gray-500">
                Leading our space engineering initiatives with expertise in
                orbital mechanics and spacecraft design.
              </p> */}
            </div>
          </div>
        </div>

        {/* Associate Director
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.45.20%20AM.png"
                alt="Raihana Shams Islam Antara"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Raihana Shams Islam Antara</h3>
              <p className="text-research-600 font-medium">
                Lecturer (On study leave)
              </p>
              <p className="mt-2 text-gray-600">
                Department of Electrical and Electronic Engineering
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Leading our space engineering initiatives with expertise in
                orbital mechanics and spacecraft design.
              </p>
            </div>
          </div>
        </div> */}

        {/* Faculty Researchers */}
        {/* Research Assistants Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Research Assistants
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Muntasir Ahad */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center w-80">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.48.50%20AM.png"
                alt="Muntasir Ahad"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Muntasir Ahad</h3>
              <p className="text-research-600 font-medium">
                Research Assistant
              </p>
              <p className="mt-2 text-gray-600">
                Robotics And Intelligent Systems
              </p>
            </div>

            {/* Md. Firoz Wadud */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center w-80">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.55.42%20AM.png"
                alt="Md. Firoz Wadud"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Md. Firoz Wadud</h3>
              <p className="text-research-600 font-medium">
                Research Assistant
              </p>
              <p className="mt-2 text-gray-600">AI and Vision systems</p>
            </div>

            {/* Cironjit Roy */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center w-80">
              <img
                src="https://i.ibb.co.com/chw5pgWz/Whats-App-Image-2025-04-27-at-11-17-57-PM.jpg"
                alt="Cironjit Roy"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">ChironJeet das Joy</h3>
              <p className="text-research-600 font-medium">
                Research Assistant
              </p>
            </div>
          </div>
        </div>
        {/* Research Assistants and Students */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Students</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                 
                  <div>
                    <p className="font-medium text-gray-900">
                      {
                        [
                          " Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                        ][i]
                      }{" "}
                      {
                        [
                          " Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                          "Member",
                        ][i]
                      }
                    </p>
                    <p className="text-sm text-gray-500">
                      {i < 6 ? "Ph.D. Student" : "Master's Student"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-16 bg-research-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented researchers and students who are
            passionate about robotics, space engineering, and interdisciplinary
            science.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-research-600 hover:bg-research-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-research-500">
              View Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
