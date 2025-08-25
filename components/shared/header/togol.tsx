'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';

const Togol = () => {
    const [mount , setMount] = React.useState(false);
    React.useEffect(() => {
        setMount(true);
    }, []);
  // Using useTheme hook to get the current theme and setTheme function
  const {theme, setTheme} = useTheme();

  if (!mount) return null;
 
    return (
        <div>
               <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{theme === "system" ? <SunMoon></SunMoon> : theme === "dark" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon> }</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Set Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
    );
};

export default Togol;