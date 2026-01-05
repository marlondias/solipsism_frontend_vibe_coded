import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    const { username } = useParams();
    return (
        <MainLayout>
            <div>UserProfile: {username}</div>
        </MainLayout>
    );
}
