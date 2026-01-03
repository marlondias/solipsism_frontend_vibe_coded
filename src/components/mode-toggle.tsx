"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ModeToggleProps {
    minimal?: boolean
}

export function ModeToggle({ minimal }: ModeToggleProps) {
    const { theme, setTheme } = useTheme()

    const cycleTheme = () => {
        if (theme === "light") setTheme("dark")
        else if (theme === "dark") setTheme("system")
        else setTheme("light")
    }

    return (
        <Button
            variant={minimal ? "ghost" : "outline"}
            size="icon"
            onClick={cycleTheme}
            title={`Current theme: ${theme}`}
            className={cn(minimal && "rounded-full border-none shadow-none")}
        >
            {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
            {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
            {theme === "system" && <Monitor className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

