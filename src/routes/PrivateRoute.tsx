import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }: { children: ReactNode }) {
    const { user, isLoading } = useAppSelector(state => state.user);

    const { pathname } = useLocation();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!user?.email && !isLoading) {
        return <Navigate to="/login" state={{ path: pathname }} />;
    }

    return children;
}
