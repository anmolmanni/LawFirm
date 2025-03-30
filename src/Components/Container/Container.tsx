import React from "react";

const Container: React.FC = () => {
    return (
        <div className="bg-[#F2EFE7] min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#006A71] text-white text-center py-6">
                    <h1 className="text-3xl font-bold">Welcome to Our Law Firm</h1>
                    <p className="text-[#9ACBD0] mt-2">Your Trusted Legal Advisors</p>
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-[#48A6A7] mb-4">
                        Our Services
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="w-3 h-3 bg-[#006A71] rounded-full mr-3"></span>
                            <p className="text-gray-700">Corporate Law</p>
                        </li>
                        <li className="flex items-center">
                            <span className="w-3 h-3 bg-[#006A71] rounded-full mr-3"></span>
                            <p className="text-gray-700">Family Law</p>
                        </li>
                        <li className="flex items-center">
                            <span className="w-3 h-3 bg-[#006A71] rounded-full mr-3"></span>
                            <p className="text-gray-700">Criminal Defense</p>
                        </li>
                        <li className="flex items-center">
                            <span className="w-3 h-3 bg-[#006A71] rounded-full mr-3"></span>
                            <p className="text-gray-700">Real Estate Law</p>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <p className="text-gray-600 mb-4">
                            At our law firm, we are committed to providing personalized legal solutions tailored to your unique needs. Our team of experienced attorneys is here to guide you through complex legal matters with professionalism and care.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Whether you are dealing with corporate disputes, family issues, or criminal charges, we are dedicated to protecting your rights and achieving the best possible outcome for your case. Trust us to be your reliable legal partner.
                        </p>
                    </div>
                    <div className="mt-6 text-center">
                        <button className="bg-[#48A6A7] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#006A71] transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;