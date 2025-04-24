import SectionHeader from "@/components/SectionHeader";
import { Trophy, FileText, Handshake, Settings, CheckCircle, CreditCard, ActivitySquare, Bot, Navigation, Map } from "lucide-react";





  const achievements = [
    {
      icon: <Trophy className="h-10 w-10 text-amber-500" />,
      title: "Successful Feasibility Test",
      description: "The team conducted successful tests on the rover at two different industries — the Construction of Chemical Warehouse in Tongi and Eastern Tubes Limited. This led to a Performance Certificate and praise for the rover's capabilities."
    },
    {
      icon: <Handshake className="h-10 w-10 text-rescue-600" />,
      title: "Partnership Opportunity",
      description: "After demonstrating the rover's features to industry officials, BRACU ALTER received interest for a partnership to develop an industrial-grade version of the Rescue Rover for chemical operations."
    },
    {
      icon: <FileText className="h-10 w-10 text-emerald-500" />,
      title: "ICT Ministry Support",
      description: "The team had a meeting with the Honorable Secretary of the ICT Ministry, who was impressed by the rover's capabilities and promised funding of 10 lakh BDT if they pass the Feasibility Test."
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-500" />,
      title: "Semi-Finals of Idea Innovation 5.0",
      description: "BRACU ALTER reached the semi-finals in the Idea Innovation 5.0 competition, showcasing the innovation and potential of their rover project."
    },
    {
      icon: <Settings className="h-10 w-10 text-indigo-500" />,
      title: "RoboCup 2024",
      description: "BRACU ALTER showcased their rover's capabilities with successful control systems and maneuvering, preparing for future enhancements."
    },
    {
      icon: <Settings className="h-10 w-10 text-purple-500" />,
      title: "RoboCup 2025",
      description: "BRACU ALTER showcased their rover's capabilities with successful control systems and maneuvering, preparing for future enhancements."
    }
  ];


  const goals = [
    {
      title: "Humanitarian Mission-Driven",
      description:
        " We pioneer drone technology for meaningful contributions to humanity, particularly in crisis response. Our recent mission in Feni during severe floods demonstrated this, where our drones successfully delivered essential supplies to isolated areas, reaching 100% of targeted communities where traditional aid was impossible.",
    },
    {
      title: "Advancing Science & Technology",
      description:
        " BRACU RaptorX is committed to driving technology innovation that supports scientific research, from disaster management to scalable drone applications. Our drones are designed to be not only high-functioning but also reliable and adaptable for diverse real-world challenges.",
    },
   
  ];
  const features = [
    {
      title: "Real-time 2D & 3D mapping with LiDAR and RGB-depth cameras",
      icon: <Map className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.27.jpeg",
    },
    {
      title: "Autonomous navigation in rugged & hazardous terrain",
      icon: <Navigation className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.28%20(1).jpeg",
    },
    {
      title:
        "Object detection using YOLOv5 (trained on Hazmat & QR code datasets ",
      icon: <Bot className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.28.jpeg",
    },
    {
      title: "Thermal imaging & environmental sensing",
      icon: <ActivitySquare className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.49.47.jpeg",
    },
    {
      title: "6-track drive system for high stability",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.32.jpeg",
    },
    {
      title: "4 dynamic flippers with PID control for stair/obstacle traversal",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.31.jpeg",
    },
    {
      title: "UFactory xArm 6 (6 DoF) for manipulation tasks ",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.30%20(1).jpeg",
    },
    // {
    //   title: "6-track drive system for high stability",
    //   icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
    //   image: "https://images.unsplash.com/photo-1593790132854-fc1a5b39a5b3",
    // },
    {
      title: "Customized GUI for intuitive control",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.56.18.jpeg",
    },
    {
      title:
        "Base Station: centralized system for real-time monitoring, advanced control & seamless communication",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.29.jpeg",
    },
  ];
  



export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="About the Mission" />

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/d4846jQF/Whats-App-Image-2025-04-21-at-11-06-21-e97ea9e9.jpg"
                alt="Underground exploration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            RaptorX is an innovative unmanned aerial system (UAS) designed to elevate operational capability. Equipped with VTOL (Vertical Take-Off and Landing) functionality, RaptorX effortlessly switches between vertical and horizontal flight modes, making it highly versatile for both confined environments and extended missions. Autonomous navigation systems enable it to independently plan routes, avoid obstacles, and adapt to real-time changes, reducing the need for continuous human supervision.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This innovative solution aims to aid in infrastructure
              maintenance, emergency response, and scientific research by
              minimizing human risk and increasing data reliability.
            </p>
          </div>
        </div>
      </div>
      {/* goals section  */}
      <section id="goals" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Core Goals"
          subtitle="Empowering national resilience with robotic innovation, strategic safety, and long-term industrial growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-rescue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* features section  */}
    <section id="features" className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <SectionHeader title="Key Features" />

    <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Versatile & High-Capacity</h3>
        <p className="text-gray-700 leading-relaxed">
        VTOL functionality for flexible take-offs and landings, and a 7 kg payload capacity, making RaptorX ideal for both confined and long-range missions.

        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Cost-Effective & Easily Maintained</h3>
        <p className="text-gray-700 leading-relaxed">
        Modular design with 3D-printed parts enables quick, low-cost repairs and maintenance with readily available components in Bangladesh.

        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <h3 className="text-xl font-semibold mb-2">MAdvanced Autonomy & Stability</h3>
        <p className="text-gray-700 leading-relaxed">
        Intelligent navigation for autonomous route planning and obstacle avoidance, paired with optimized aerodynamics for reliable performance in diverse conditions.

        </p>
      </div>

      
    </div>
  </div>
</section>

     
    </section>
  );
}
