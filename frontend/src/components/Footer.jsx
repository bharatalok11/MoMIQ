import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="bodyAlign">
        <div className="py-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={logo} className="h-12" alt="MoMIQ Logo" />
              </div>
    
              <p className="text-sm text-gray-400 max-w-xs">
                Transforming meeting transcripts into actionable insights with AI-powered summarization.
              </p>
            </div>

            {/* Technology Stack */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-xl">Built With</h3>
              <div className="flex flex-wrap gap-2">
                <span className="techStack text-blue-400">
                  React
                </span>
                <span className="techStack text-green-400">
                  Node.js
                </span>
                <span className="techStack text-purple-400">
                  Groq AI
                </span>
                <span className="techStack text-cyan-400">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-base">Features</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>AI-Powered Summarization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  <span>Custom Prompts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>Instant Sharing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-2 -mb-4">
            <div className="alignCenter">
              <p className="text-sm text-gray-500">
                &copy; 2025 MoMIQ || All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;