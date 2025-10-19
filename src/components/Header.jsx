import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Koushik Reddy Womens Hostel
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-sm font-medium text-purple-700 hover:text-pink-600 transition-colors">Home</a>
            <a href="/services" className="text-sm font-medium text-purple-700 hover:text-pink-600 transition-colors">Services</a>
            <a href="/rooms" className="text-sm font-medium text-purple-700 hover:text-pink-600 transition-colors">Rooms</a>
            <a href="/about" className="text-sm font-medium text-purple-700 hover:text-pink-600 transition-colors">About</a>
            <a href="/contact" className="text-sm font-medium text-purple-700 hover:text-pink-600 transition-colors">Contact</a>
          </nav>
          
         <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-white dark:bg-zinc-900 px-6">
       
        <nav className="flex flex-col justify-center items-center space-y-6 mt-10">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Rooms", "/rooms"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="text-lg font-medium text-purple-700 dark:text-purple-300 hover:text-pink-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
        </div>
      </div>
    </header>
  )
}