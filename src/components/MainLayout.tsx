import React from 'react';

interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full bg-background text-foreground">
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
                <div className="text-center">
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
    );
};

export default MainLayout;
