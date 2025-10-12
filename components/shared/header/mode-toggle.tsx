'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
 } from "@radix-ui/react-dropdown-menu";
import { MoonIcon, SunIcon, SunMoon} from "lucide-react";

import { useTheme } from "next-themes";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    },[]);
    if (!mounted) {
        return null;
    }
    return ( <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='link' className="focus-visible:ring-0 focus-visible:ring-offset-0">
                { theme === 'system' ?
                (<SunMoon />) 
                : theme ==='dark' ?
                  (<MoonIcon />) 
                : (<SunIcon />)
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-48 p-2 ">
            <DropdownMenuLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300 " >Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1 border-t border-gray-300 dark:border-gray-600" />
            <DropdownMenuCheckboxItem className="hover:bg-amber-400 p-1 dark:hover:bg-transparent cursor-pointer rounded-e-lg" checked={ theme === 'system'} onClick={ () => setTheme('system') }>
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator className="my-1 border-t w-20 border-gray-300 dark:border-gray-600" />
            <DropdownMenuCheckboxItem className="hover:bg-amber-400 p-1 dark:hover:bg-transparent cursor-pointer rounded-e-lg" checked={ theme === 'dark'} onClick={ () => setTheme('dark') }>
                Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator className="my-1 border-t w-20 border-gray-300 dark:border-gray-600" />

            <DropdownMenuCheckboxItem className="hover:bg-amber-400 p-1 dark:hover:bg-transparent cursor-pointer rounded-e-lg" checked={ theme === 'Light'} onClick={ () => setTheme('light') }>
                Light
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
    );
};
 
export default ModeToggle;