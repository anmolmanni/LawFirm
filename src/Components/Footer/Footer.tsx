const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Law Firm. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-4">
                    <li>
                        <a href="/privacy-policy" className="text-gray-400 hover:text-gray-200">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/terms-of-service" className="text-gray-400 hover:text-gray-200">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="/contact-us" className="text-gray-400 hover:text-gray-200">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;