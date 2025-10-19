import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">Koushik Reddy Womens Hostel</h2>
            <p className="text-sm text-purple-200">Safe & Comfortable Accommodation</p>
          </div>
          <div className="  text-center text-sm text-purple-200">
          <p>© {new Date().getFullYear()} Koushik Reddy Womens Hostel. All rights reserved.</p>
        </div>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">Terms of Service</a>
            <a href="/contact" className="text-sm text-purple-200 hover:text-white transition-colors">Contact</a>
          </div> */}
          {/* <div className="flex space-x-4">
        <a
          href="https://x.com/chennashivagan2"
            target="_blank"

          className="p-2 bg-white dark:bg-white rounded-full text-gray-700 dark:text-gray-300    transition-colors duration-300"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/chennashivaganesh/"
            target="_blank"

          className="p-2 bg-white dark:bg-white rounded-full text-gray-700 dark:text-gray-300    transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
         
        <a
          href="https://www.instagram.com/shivaganesh_chenna/"
            target="_blank"

          className="p-2 bg-white dark:bg-white rounded-full text-gray-700 dark:text-gray-300    transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
       
      </div> */}
        </div>
        
      </div>
    </footer>
  )
}