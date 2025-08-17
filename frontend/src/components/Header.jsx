import logo from "../assets/logo.png"
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
      <div className="bodyAlign">
        <div className="alignCenter sm:py-4">
          <div className="flex items-center space-x-4">
            {/* Logo placeholder - replace with your actual logo */}
            <div className="rounded-lg alignCenter">
              <img src={logo} className="h-16"/>
            </div>
            
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                AI Meeting Notes Summarizer
              </h1>
              <p className="text-blue-50 text-sm font-medium">
                Upload TXT transcripts, customize prompts, and share summaries instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;