export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Our Lab
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Pioneering research in robotics and space engineering to solve
            tomorrow's challenges through interdisciplinary collaboration and
            innovation.
          </p>
        </div>

        {/* History and Founding */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            History and Founding
          </h2>
          <p className="text-gray-600 mb-4">
            The Laboratory of Space System Engineering and Technology was
            founded in 2019 by Raihana Shams Islam Antara and Abdullahil Kafi
            with the vision of advancing research in space systems and
            cutting-edge robotics. Since its inception, the lab has been
            dedicated to exploring innovative solutions in aerial vehicle
            technologies, satellite systems, and autonomous robotics to
            contribute to the future of space exploration and intelligent
            systems.
          </p>
          <p className="text-gray-600">
            What began as a small team of researchers has now expanded to
            include over 30 scientists, engineers, and support staff working
            across multiple specialized facilities.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Mission and Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To critically advance space and robotics research by addressing
                real-world challenges, fostering innovation, and enabling
                sustainable impact on the economy, industry, and society.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To redefine Bangladesh’s technological future through
                transformative research in space systems and robotics that
                shapes global discourse and drives inclusive progress.
              </p>
            </div>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Robotics
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Autonomous Ground Robotics</li>
                <li>SLAM and Localization Technologies</li>
                <li>Aerial Vehicle Systems</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Space Engineering
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Satellite Systems and Subsystems</li>
                <li>CubeSat and CanSat Development</li>
                <li>Thrust Vector and Propulsion Control</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//30.jpg"
                alt="Laboratory space"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//IMG_3776.JPG"
                alt="Computing facility"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-8 mb-2">
            State-of-the-Art Laboratories
          </h3>
          <p className="text-gray-600">
            Our lab has two fully equipped research facilities at BRAC
            University, featuring advanced tools for robotics, aerospace, and
            satellite systems. We developed Bangladesh’s first rescue rover
            capable of stair traversal using flipper-based mobility, along with
            another autonomous rover integrated with GPS, SLAM, and a 6-DOF
            robotic arm. In aerial systems, we operate high-performance
            multirotor drones and a custom-built VTOL platform named Vitor, used
            for autonomous navigation, mapping, and environmental monitoring.
            Our space research includes in-house designed CubeSats and CanSats,
            enabling experiments in telemetry, onboard computing, and satellite
            communication systems.
          </p>
        </div>
      </div>
    </div>
  );
}
