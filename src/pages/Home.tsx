import MainLayout from '../components/MainLayout';

export default function Home() {
    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto w-full p-6">
                <div className="mt-4 p-4 border border-dashed rounded-lg opacity-50">
                    (This is content coming from the Home page component)
                </div>
            </div>
        </MainLayout>
    );
}

