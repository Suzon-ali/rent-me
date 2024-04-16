
function Footer() {
  return (
    <footer className=" bg-[#1c1c1c] text-gray-300 px-2 lg:px-0 mt-24">
      <div className="container max-w-[1170px] mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-200">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-400">123 Maple Avenue<br />Cityville, State 12345<br />Phone: (123) 456-7890<br />Email: contact@example.com</p>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rent Me. All rights reserved.</p>
          <p className="mt-2">Designed by Sujon Ali</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
