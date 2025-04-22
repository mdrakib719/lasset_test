import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";

export default function News() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            News & Events
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Keep up with the latest happenings at our lab, from research
            breakthroughs to upcoming events.
          </p>
        </div>

        <Tabs defaultValue="news">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="news">Latest News</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="news">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Item 1 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//27.jpg"
                    alt="Research breakthrough"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    April 15, 2025
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-4 w-4" />3 min read
                  </div>
                  <CardTitle>
                    BRACU ALTER selected for the final round of ROBOCUP 2025 in
                    Brazil
                  </CardTitle>
                  <CardDescription>
                    The RoboCup Rescue Robot League is not just any competition;
                    it’s a global arena where the brightest minds converge to
                    push the boundaries of robotics and artificial intelligence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The Frontier Research Lab has been awarded a significant
                    grant from the National Science Foundation to continue its
                    groundbreaking work on collaborative robotics systems for
                    emergency response scenarios.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="px-0 text-research-600 hover:text-research-700"
                    onClick={() =>
                      window.open(
                        "https://bracuexpress.com/bracu-alter-excels-for-the-finals-of-robocup-2024/?utm_source=chatgpt.com",
                        "_blank"
                      )
                    }
                  >
                    Read full story <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* News Item 2 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//469825232_1373973917214824_5337420237526801877_n.jpg"
                    alt="New partnership"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    April 8, 2025
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-4 w-4" />4 min read
                  </div>
                  <CardTitle>
                    Bangladeshi team 'BRACU Alter' in the finals of RoboCup
                    Rescue Robot League
                  </CardTitle>
                  <CardDescription>
                    Team from BracU qualifies for final round of RoboCup Rescue
                    2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    BRAC University's rescue robot team "BRACU Alter" has
                    secured a spot in the finals of the 2024 RoboCup Rescue
                    Robot League, a prestigious international robotics
                    competition.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="px-0 text-research-600 hover:text-research-700"
                    onClick={() =>
                      window.open(
                        "https://www.thedailystar.net/tech-startup/news/team-bracu-qualifies-final-round-robocup-rescue-2024-3582531?utm_source=chatgpt.com",
                        "_blank"
                      )
                    }
                  >
                    Read full story <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              {/* News Item 3 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//30.jpg"
                    alt="Research publication"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    March 28, 2025
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-4 w-4" />2 min read
                  </div>
                  <CardTitle>
                    Team from BracU qualifies for final round of RoboCup Rescue
                    2024
                  </CardTitle>
                  <CardDescription>
                    Our research on advanced navigation algorithms has been
                    accepted for presentation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    BRACU ALTER, a rescue rover team from the Laboratory of
                    Space System Engineering and Technology (LaSSET) at BRAC
                    University's BSRM School of Engineering, in qualifying for
                    the final round of the RoboCup Rescue Robot League 2024.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="px-0 text-research-600 hover:text-research-700"
                  >
                    Read full story <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="font-medium">
                View all news
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Event 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>AI in Space Applications Workshop</CardTitle>
                  <CardDescription>
                    A two-day workshop exploring the latest developments in AI
                    for space.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">May 5-6, 2025</p>
                        <p className="text-sm text-gray-500">
                          9:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">
                          Science Building, Conference Room A
                        </p>
                        <p className="text-sm text-gray-500">
                          123 University Avenue
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      Join us for a comprehensive workshop on artificial
                      intelligence applications in space technology, featuring
                      keynote speakers from NASA, SpaceX, and leading academic
                      institutions.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button className="bg-research-600 hover:bg-research-700">
                    Register
                  </Button>
                </CardFooter>
              </Card>

              {/* Event 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Guest Lecture: The Future of Robotics</CardTitle>
                  <CardDescription>
                    Distinguished lecture by Prof. Sarah Johnson from MIT.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">April 22, 2025</p>
                        <p className="text-sm text-gray-500">
                          3:00 PM - 5:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Main Auditorium</p>
                        <p className="text-sm text-gray-500">
                          University Campus
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      Prof. Sarah Johnson, a leading expert in robotics and
                      automation, will discuss emerging trends and future
                      directions in the field of robotics.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button className="bg-research-600 hover:bg-research-700">
                    RSVP
                  </Button>
                </CardFooter>
              </Card>

              {/* Event 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Research Symposium: Next-Gen Space Technology
                  </CardTitle>
                  <CardDescription>
                    Annual symposium showcasing latest innovations in space
                    technology.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">June 15-17, 2025</p>
                        <p className="text-sm text-gray-500">All Day</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">
                          University Conference Center
                        </p>
                        <p className="text-sm text-gray-500">
                          123 University Avenue
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      Our annual research symposium brings together experts from
                      around the world to discuss and showcase the latest
                      innovations in space technology and exploration.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Program</Button>
                  <Button className="bg-research-600 hover:bg-research-700">
                    Register
                  </Button>
                </CardFooter>
              </Card>

              {/* Event 4 */}
              <Card>
                <CardHeader>
                  <CardTitle>Open House: Tour Our Facilities</CardTitle>
                  <CardDescription>
                    See our state-of-the-art labs and meet the research team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CalendarDays className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">May 20, 2025</p>
                        <p className="text-sm text-gray-500">
                          1:00 PM - 4:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-research-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">
                          Science Building, Main Entrance
                        </p>
                        <p className="text-sm text-gray-500">
                          123 University Avenue
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      Join us for an open house event where you can tour our
                      state-of-the-art research facilities, see live
                      demonstrations, and meet the team behind our
                      groundbreaking research.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Learn More</Button>
                  <Button className="bg-research-600 hover:bg-research-700">
                    RSVP
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="font-medium">
                View full calendar
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-research-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Stay updated on our latest research breakthroughs, upcoming
              events, and opportunities by subscribing to our newsletter.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-research-500 focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  className="bg-research-600 hover:bg-research-700"
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                We respect your privacy and will not share your information with
                third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
