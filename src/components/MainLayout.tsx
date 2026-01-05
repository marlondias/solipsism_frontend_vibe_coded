import { User, LogOut } from 'lucide-react';
import logo from '../assets/images/solipsism_logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ModeToggle } from '@/components/mode-toggle';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { logout } = useAuth();

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
                    <ModeToggle minimal={true} />

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors cursor-pointer" title="Log Out">
                                <LogOut size={20} />
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This will end your current session and you will need to log in again to access your account.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => logout()} className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Yes, log out!
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </header>

            <div className="flex flex-1 w-full">
                {/* Simplified Central Area - Each page controls its own width/constraints */}
                <main className="flex-1 w-full flex flex-col">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
