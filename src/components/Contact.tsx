
const Contact = () => {
  return (
      <div className="text-center mt-5">
        <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-blue-900">
          <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-12 mr-3 sm:h-9" alt="Landwind Logo" />
           start
          </a>

          <span className="block text-sm text-center text-gray-500">
            © 2020-2025 AI™. All Rights Reserved.
            Built with 
            <a href="https://google.com" className="text-purple-600 hover:underline">Portfolio</a> and 
            <a href="https://Microsoft.com" className="text-purple-600 hover:underline">Motion</a>.
          </span>

          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 
                </svg>
              </a>
            </li>
          </ul>
        </div>
    );
};

export default Contact;