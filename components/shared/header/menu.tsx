import React from 'react';
import Togol from './togol';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Menu = () => {
    return (
        <div className='flex justify-end gap-3'>
             <nav className='hidden md:flex w-full max-w-xs gap-1'>
                 <Togol /> 
                            <Link href="/cart">
                                <Button variant="ghost">
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Cart
                                </Button>
                            </Link>
                            <Link href="/profile">
                                <Button>
                                    <UserIcon className="mr-2 h-4 w-4" />
                                    Profile
                                </Button>
                            </Link>
             </nav>
             <nav className='md:hidden'>
             <Sheet>
  <SheetTrigger><EllipsisVertical /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
    <div className='flex flex-col gap-2 m-3.5'>
     <Togol />
                            <Link href="/cart">
                    <Button variant="ghost">
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Cart
                                </Button>
                            </Link>
                            <Link href="/profile">
                                <Button>
                                    <UserIcon className="mr-2 h-4 w-4" />
                                    Profile
                                </Button>
                            </Link>
                            </div>
  </SheetContent>
</Sheet>

             </nav>
        </div>
    );
};

export default Menu;