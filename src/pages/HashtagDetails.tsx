import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';

export default function HashtagDetails() {
    const { hashtag } = useParams();
    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto w-full p-6">
                <h1 className="text-2xl font-bold mb-4">Hashtag Details</h1>
                <div className="p-6 border rounded-xl bg-muted/20">
                    <span className="text-primary font-bold text-xl">#{hashtag}</span>
                    <p className="mt-2 text-muted-foreground">Showing the latest posts tagged with this vibration.</p>
                </div>
            </div>
        </MainLayout>
    );
}
