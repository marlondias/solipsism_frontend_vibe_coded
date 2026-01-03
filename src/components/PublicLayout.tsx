import React from 'react';
import { ModeToggle } from '@/components/mode-toggle';

interface PublicLayoutProps {
    children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-background px-4">
            {/* Top Left Theme Toggle */}
            <div className="absolute top-4 left-4 z-50">
                <ModeToggle />
            </div>

            <main className="w-full flex justify-center py-12">
                {children}
            </main>
        </div>
    );
};

export default PublicLayout;
