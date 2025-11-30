import { Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Internstap</span>
            </div>
            <p className="text-sm text-gray-400">
              Your gateway to finding the perfect internship and launching your career.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-blue-500">Browse Jobs</a></li>
              <li><a className="hover:text-blue-500">Career Resources</a></li>
              <li><a className="hover:text-blue-500">Resume Builder</a></li>
              <li><a className="hover:text-blue-500">Interview Tips</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-blue-500">Post a Job</a></li>
              <li><a className="hover:text-blue-500">Search Candidates</a></li>
              <li><a className="hover:text-blue-500">Pricing</a></li>
              <li><a className="hover:text-blue-500">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-blue-500">About Us</a></li>
              <li><a className="hover:text-blue-500">Contact</a></li>
              <li><a className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a className="hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2025 Internstap. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
