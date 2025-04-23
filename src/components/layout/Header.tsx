import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "News", href: "/news" },
  { name: "People", href: "/people" },
  // { name: "Alter", href: "/alter" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//269265388_437140104692210_184097023900869449_n.png"
              alt="LaSSET Logo"
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-bold text-research-700">
                LaSSET
              </span>
              <span className="text-s text-accent-500 -mt-1">
                Laboratory of Space System Engineering and Technology
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu - Right Aligned */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-xl font-semibold leading-6 text-gray-900 hover:text-research-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-2xl font-bold text-research-700">
                  Research<span className="text-accent-500">Hub</span>
                </span>
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
