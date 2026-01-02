import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import logo from '../assets/images/solipsism_logo.png';

import { Link } from 'react-router';

interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
            {/* Top Header */}
            <header className="h-16 w-full border-b border-border flex items-center justify-between px-6 bg-card sticky top-0 z-50">
                <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-1">
                    <img src={logo} alt="Solipsism Logo" className="h-20 w-auto" />
                    <span className="font-bold text-2xl tracking-tight hidden sm:inline-block text-primary">Solipsism</span>
                </Link>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors cursor-pointer" title="User Profile">
                        <User size={20} />
                    </button>
                    <button className="p-2 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors cursor-pointer" title="Settings">
                        <Settings size={20} />
                    </button>
                    <button className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors cursor-pointer" title="Log Out">
                        <LogOut size={20} />
                    </button>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <aside className="w-[30%] border-r border-border p-6 flex items-center justify-center bg-muted/30">
                    <div className="text-center">
                        <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                            THIS IS THE LEFT SECTION
                        </p>
                    </div>
                </aside>

                {/* Central Area */}
                <main className="flex-1 p-6 flex flex-col items-center justify-center">
                    <div className="text-center w-full max-w-2xl">
                        <h1 className="text-2xl font-bold mb-4">THIS IS THE CENTRAL SECTION</h1>
                        {children}
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="w-[20%] border-l border-border p-6 flex items-center justify-center bg-muted/30">
                    <div className="text-center">
                        <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                            THIS IS THE RIGHT SECTION
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default MainLayout;
