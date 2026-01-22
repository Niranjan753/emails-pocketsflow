"use client";

import { usePathname } from "next/navigation";
import * as React from "react";
import { Logo } from "./Logo";
import { LockOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Navbar1 = () => {

    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [showUnlockDialog, setShowUnlockDialog] = useState(false);

    const isJobs = pathname === "/jobs" || pathname.startsWith("/jobs");
    const isBlog = pathname.startsWith("/blog");
    const isPortfolio = pathname.startsWith("/portfolio");
    const isJoin = pathname.startsWith("/join");
    const isHire = pathname.startsWith("/hire");


    const navLinks = [
        { name: "Remote Jobs", href: "/jobs", active: isJobs },
        { name: "Blog", href: "/blog", active: isBlog },
        { name: "Portfolio", href: "/portfolio", active: isPortfolio },
        { name: "Join", href: "/join", active: isJoin },
        { name: "Post a Job", href: "/hire", active: isHire },
    ];

    return (
        <>
            <div>
                <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1b1b1b] backdrop-blur text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <Link href="/" className="flex items-center gap-2" >
                                <Logo width={28} height={20} />
                                <span className="text-xl font-bold">
                                    Navbar 1
                                </span>
                            </Link>


                            <nav className="hidden md:flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn("px-4 py-2 rounded-md text-md font-medium transition",
                                            link.active
                                                ? "bg-white/10 text-white" :
                                                "text-gray-300 hover:bg-white hover:text-black"
                                        )}>
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="hidden md:flex items-center gap-3">
                                <button
                                    onClick={() =>
                                        setShowUnlockDialog(true)}
                                    className="flex items-center gap-2 rouned-md bg-[#FF5A1F] px-6 py-2 text-md font-bold text-white hover:bg-[#FF5A1F]/90 cursor-pointer"
                                >
                                    <LockOpen className="h-4 w-4" />
                                    Unlock Jobs
                                </button>
                            </div>

                            <button
                                onClick={() => setMobileOpen(true)}
                                className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
                            >
                                <Menu size={22} />
                            </button>
                        </div>
                    </div>
                </header>

                <div
                    onClick={() => setMobileOpen(false)}
                    className={cn("fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden", mobileOpen ? "opacity-100" : "pointer-events-none opacity-0")}>
                </div>

                <div
                    className={cn("fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-[#121212] shadow-2xl transition-all ease-[cubic-bezier(0.2,0.6,0.2,0.6)] duration-300 md:hidden",
                        mobileOpen ? "translate-x-0" : "translate-x-full"
                    )}>
                    <div className="flex h-16 items-center text-white justify-between border-b border-white/10 px-5">
                        <div className="flex items-center gap-2">
                            <Logo width={24} height={18} />
                            <span className="font-bold text-white">Nav1</span>
                        </div>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="rounded0-md p-2 hover:bg-white/10"
                        >
                            <X size={20} />
                        </button>
                    </div>


                    <div className="flex flex-col px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn("rounded-lg px-4 py-3 text-base font-medium transition", link.active
                                    ? "bg-white/10 text-white"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>


                    <div className="space-y-3 px-4">
                        <button onClick={() => {
                            setMobileOpen(false);
                            setShowUnlockDialog(true);
                        }}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF5A1F] py-3 font-bold text-white"
                        >
                            <LockOpen className="h-4 w-4" />
                            Unlock jobs
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}