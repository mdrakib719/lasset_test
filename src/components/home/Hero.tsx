import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//27.jpg",
  "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//469825232_1373973917214824_5337420237526801877_n.jpg",
  "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-21%20at%201.16.08%20PM.png",
  "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//21.jpg",
  "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//WhatsApp%20Image%202025-04-21%20at%2011.19.27_9edbb9b5.jpg",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="relative bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <img
            src={images[currentImageIndex]}
            alt="Laboratory research"
            className="h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-research-900/80 to-research-700/50 mix-blend-multiply" />
        </div>

        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {/* <span className="block">LaSSET</span> */}
              <span className="block text-research-200">
                Innovating Beyond Earth – From Ground to Orbit
              </span>
            </h1>
            {/* <p className="mt-6 text-xl leading-8 text-gray-200">
              Pioneering research in robotics and space engineering to solve
              tomorrow's challenges through interdisciplinary collaboration and
              cutting-edge innovation.
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/research">
                <Button
                  size="lg"
                  className="bg-research-600 hover:bg-research-500"
                >
                  Explore Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-black border-white hover:bg-black/10"
                >
                  About Our Lab
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
