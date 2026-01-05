import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';
import {
    Calendar,
    Link as LinkIcon,
    MapPin,
    Cake,
    ArrowLeft,
    CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Mock user data based on requirements
const MOCK_USER = {
    id: 1,
    username: 'johndoe',
    name: 'John Doe',
    bio: 'Digital Architect | Coffee Addict | Building @Solipsism 🚀\nCrafting immersive experiences through code and design.',
    birthDate: '1995-05-15',
    joinedAt: '2023-01-10',
    avatarPictureURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    coverPictureURL: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop',
    followersCount: 1240,
    followingCount: 450,
    postsCount: 89,
    mentionsCount: 22
};

export default function UserProfile() {
    const { username } = useParams();

    // In a real app, we would fetch user data by username
    // For now, we use the MOCK_USER
    const user = { ...MOCK_USER, username: username || MOCK_USER.username };

    return (
        <MainLayout>
            <div className="w-full max-w-2xl mx-auto bg-card min-h-screen border-x border-border/50 shadow-2xl">
                {/* Profile Header (Back button + Name) */}
                <div className="sticky top-16 z-40 bg-card/80 backdrop-blur-md px-4 py-2 flex items-center gap-6 border-b border-border/10">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <div className="flex items-center gap-1">
                            <h1 className="text-xl font-black tracking-tight">{user.name}</h1>
                            <CheckCircle2 className="w-4 h-4 text-primary fill-primary/10" />
                        </div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{user.postsCount} Posts</p>
                    </div>
                </div>

                {/* Banner/Cover Image */}
                <div className="relative w-full aspect-[3/1] bg-muted overflow-hidden">
                    <img
                        src={user.coverPictureURL}
                        alt="Profile Banner"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Profile Identity Section */}
                <div className="px-5 pb-6">
                    <div className="relative flex justify-between items-end mb-4">
                        {/* Avatar (Overlapping) */}
                        <div className="absolute -top-1/2 left-0 w-32 h-32 rounded-full border-4 border-card bg-card overflow-hidden shadow-xl ring-4 ring-primary/5">
                            <img
                                src={user.avatarPictureURL}
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="ml-auto pt-4 flex gap-2">
                            <Button variant="outline" className="rounded-full font-bold px-6 h-10 border-border hover:bg-muted transition-all active:scale-95">
                                Edit Profile
                            </Button>
                        </div>
                    </div>

                    {/* Name & Handle */}
                    <div className="mt-14 space-y-1">
                        <div className="flex items-center gap-1.5">
                            <h2 className="text-2xl font-extrabold text-foreground">{user.name}</h2>
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-muted-foreground font-medium">@{user.username}</p>
                    </div>

                    {/* Bio */}
                    <p className="mt-4 text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium">
                        {user.bio}
                    </p>

                    {/* Meta Info */}
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5 group cursor-default">
                            <MapPin className="w-4 h-4 group-hover:text-primary transition-colors" />
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-1.5 group cursor-pointer hover:text-primary transition-colors">
                            <LinkIcon className="w-4 h-4" />
                            <span className="text-primary hover:underline">solipsism.io</span>
                        </div>
                        <div className="flex items-center gap-1.5 group cursor-default">
                            <Cake className="w-4 h-4 group-hover:text-primary transition-colors" />
                            <span>Born {new Date(user.birthDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5 group cursor-default">
                            <Calendar className="w-4 h-4 group-hover:text-primary transition-colors" />
                            <span>Joined {new Date(user.joinedAt).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</span>
                        </div>
                    </div>

                    {/* Follow Counts */}
                    <div className="mt-4 flex gap-5 text-[14px]">
                        <button className="hover:underline flex gap-1.5 items-baseline">
                            <span className="font-bold text-foreground">{user.followingCount}</span>
                            <span className="text-muted-foreground">Following</span>
                        </button>
                        <button className="hover:underline flex gap-1.5 items-baseline">
                            <span className="font-bold text-foreground">{user.followersCount}</span>
                            <span className="text-muted-foreground">Followers</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="px-5 mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Card className="p-4 flex flex-col items-center justify-center gap-1 bg-muted/30 border-none shadow-none group hover:bg-muted/50 transition-all cursor-default">
                        <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">{user.postsCount}</span>
                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Posts</span>
                    </Card>
                    <Card className="p-4 flex flex-col items-center justify-center gap-1 bg-muted/30 border-none shadow-none group hover:bg-muted/50 transition-all cursor-default">
                        <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">{user.mentionsCount}</span>
                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Mentions</span>
                    </Card>
                    <Card className="p-4 flex flex-col items-center justify-center gap-1 bg-muted/30 border-none shadow-none group hover:bg-muted/50 transition-all cursor-default">
                        <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">12.4k</span>
                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Upvotes</span>
                    </Card>
                    <Card className="p-4 flex flex-col items-center justify-center gap-1 bg-muted/30 border-none shadow-none group hover:bg-muted/50 transition-all cursor-default">
                        <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">95%</span>
                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Vibe Rate</span>
                    </Card>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-border/50 px-2 overflow-x-auto scrollbar-hide">
                    {['Posts', 'Replies', 'Highlights', 'Media', 'Likes'].map((tab, i) => (
                        <button
                            key={tab}
                            className={`flex-1 min-w-fit px-6 py-4 text-sm font-bold transition-all relative group
                                ${i === 0 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {tab}
                            {i === 0 && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-primary rounded-t-full shadow-[0_-4px_10px_rgba(var(--primary),0.5)]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area (Placeholder) */}
                <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                    <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mb-6">
                        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 tracking-tight">Loading Timeline...</h3>
                    <p className="text-muted-foreground max-w-xs text-sm font-medium">
                        We're fetching the latest vibes from @{user.username}'s dimension. Just a conscious second.
                    </p>
                </div>
            </div>
        </MainLayout>
    );
}
