import React from 'react';

const NotFound = () => {
    return (
        <div>
            
            <div className="flex items-center justify-center h-screen">
                <div className="text-2xl font-bold text-red-500">
                    404 - Page Not Found
                </div>
            </div>
            <div className="flex items-center justify-center h-screen">
                <div className="text-gray-500 text-lg">
                    The page you are looking for does not exist.
                </div>
            </div>
            
        </div>
    );
};

export default NotFound;