import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "4IR: Robotics Research",
    description:
      "Our team has developed a breakthrough in autonomous navigation that enables robots to navigate complex and dynamic environments with unprecedented accuracy.",
    image:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//27.jpg",
    category: "Robotics",
    link: "/alter",
  },
  {
    id: 3,
    title: "Space systems",
    description:
      "Enhancing productivity and safety in human-robot collaborative environments through advanced sensing and responsive systems.",
    image:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//294597575_454838666650924_6642076040121578354_n.jpg",
    category: "Interdisciplinary",
    link: "/space",
  },
];

export function ResearchHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Research Highlights
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Recent breakthroughs and ongoing projects from our laboratory
          </p>
        </div>

        {/* Responsive Layout: Flex on md+, vertical stack on small */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {highlights.map((highlight) => (
            <Card
              key={highlight.id}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 md:w-[48%]"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge
                    variant="outline"
                    className="bg-research-100 text-research-800 hover:bg-research-200"
                  >
                    {highlight.category}
                  </Badge>
                </div>
                <CardTitle className="mt-2">{highlight.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {highlight.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {highlight.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  to={highlight.link}
                  className="text-research-600 hover:text-research-700 inline-flex items-center text-sm font-medium"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/research"
            className="inline-flex items-center text-research-600 hover:text-research-800 font-medium"
          >
            View all research projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
