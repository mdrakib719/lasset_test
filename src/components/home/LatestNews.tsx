import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "BRACU ALTER selected for the final round of ROBOCUP 2025 in Brazil",
    summary:
      "The RoboCup Rescue Robot League is not just any competition; it’s a global arena where the brightest minds converge to push the boundaries of robotics and artificial intelligence.",
    date: "April 12, 2025",
    readTime: "3 min read",
    link: "https://bracuexpress.com/bracu-alter-excels-for-the-finals-of-robocup-2024/?utm_source=chatgpt.com",
  },
  {
    id: 2,
    title:
      "Bangladeshi team 'BRACU Alter' in the finals of RoboCup Rescue Robot League",
    summary:
      'BRAC University\'s rescue robot team "BRACU Alter" has secured a spot in the finals of the 2024 RoboCup Rescue Robot League, a prestigious international robotics competition.',
    date: "April 5, 2024",
    readTime: "1 min read",
    link: "/news/ai-space-workshop",
  },
  {
    id: 3,
    title: "Team from BracU qualifies for final round of RoboCup Rescue 2024",
    summary:
      "BRACU ALTER, a rescue rover team from the Laboratory of Space System Engineering and Technology (LaSSET) at BRAC University's BSRM School of Engineering, in qualifying for the final round of the RoboCup Rescue Robot League 2024.",
    date: "July 24, 2024",
    readTime: "2 min read",
    link: "https://www.thedailystar.net/tech-startup/news/team-bracu-qualifies-final-round-robocup-rescue-2024-3582531?utm_source=chatgpt.com",
  },
];

export function LatestNews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest News & Events
          </h2>
          <Link
            to="/news"
            className="text-research-600 hover:text-research-800 font-medium flex items-center"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="flex items-center mt-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.date}
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  {item.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.summary}</p>
              </CardContent>
              <CardFooter>
                <Link
                  to={item.link}
                  className="text-research-600 hover:text-research-700 text-sm font-medium"
                >
                  Read more →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-research-50 rounded-lg border border-research-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Subscribe to Our Newsletter
              </h3>
              <p className="mt-1 text-gray-600">
                Get the latest updates on research breakthroughs and upcoming
                events.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex w-full md:w-auto">
              <div className="relative rounded-md shadow-sm w-full md:w-auto">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-research-600"
                  placeholder="Your email"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="button"
                    className="rounded-r-md bg-research-600 h-full px-4 text-sm font-semibold text-white hover:bg-research-700"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
