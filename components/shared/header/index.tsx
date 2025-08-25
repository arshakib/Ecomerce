import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './menu';



const Header = () => {
    return (
        <div>
            <header className=" shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        className="block h-8 w-auto"
                                        src="/images/logo.svg"
                                        alt="Workflow"
                                        width={32}
                                        height={32}
                                        priority={true}
                                    />
                                    <span className="hidden lg:block ml-2 text-xl font-bold">My E-commerce</span>
                                </Link>
                            </div>
                        </div>
                      <Menu />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;