import MainLayout from '../components/MainLayout';

export default function Trending() {
    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto w-full p-6">
                <h1 className="text-2xl font-bold mb-4">Trending</h1>
                <div className="border border-dashed rounded-lg p-10 opacity-50 text-center">
                    Discover what's vibe-coding right now.
                </div>
            </div>
        </MainLayout>
    );
}
