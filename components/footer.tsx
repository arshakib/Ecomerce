import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="bg-gray-800 py-4">
                <p className="text-center text-white">
                    &copy; {currentYear} My E-commerce. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;