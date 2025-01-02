'use client'

import { CalendarDays } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'CashBook', href: '/cashbook' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Shop', href: '/shop' },
    { name: 'Users', href: '/users' },
]

export function Navbar() {
    const pathname = usePathname()
    const currentTime = new Date().toLocaleString()

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-primary px-4">
            <div className="flex h-14 items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="HKB Logo"
                            width={32}
                            height={32}
                            className="rounded-full bg-white p-1"
                        />
                        <span className="font-semibold text-primary-foreground">
                            HKB Service Manager
                        </span>
                    </Link>
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                variant={pathname === item.href ? "secondary" : "ghost"}
                                className={cn(
                                    "text-primary-foreground hover:text-primary-foreground/90",
                                    pathname === item.href && "bg-white/10 hover:bg-white/20"
                                )}
                                asChild
                            >
                                <Link href={item.href}>{item.name}</Link>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-primary-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span className="text-sm">{currentTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground">
                        <span className="text-sm">Hlakabar(admin)</span>
                        <Button variant="secondary" size="sm">
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

