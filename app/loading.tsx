import React from 'react';

const loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="ml-4 text-gray-500 text-lg">Loading, please wait...</div>
        </div>
    );
};

export default loading;
