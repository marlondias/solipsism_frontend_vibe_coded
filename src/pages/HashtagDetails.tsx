import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';

export default function HashtagDetails() {
    const { hashtag } = useParams();
    return (
        <MainLayout>
            <div>Hashtag: #{hashtag}</div>
        </MainLayout>
    );
}
