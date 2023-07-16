import { setUser } from '@/redux/features/users/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { auth } from '@/utils/firebase';
import { Button, Spinner } from '@material-tailwind/react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function AuthButton({ className }: { className: string }) {
    const { isLoading, user } = useAppSelector(state => state.user);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        });
    };

    return (
        <div className={className}>
            {isLoading ? (
                <Button size="sm" disabled={isLoading} className="flex justify-center items-center gap-1">
                    <Spinner /> Loading...
                </Button>
            ) : user?.email ? (
                <Button size="sm" onClick={handleLogout}>
                    Logout
                </Button>
            ) : (
                <Link to="/login">
                    <Button size="sm">Login / Signup</Button>
                </Link>
            )}
        </div>
    );
}

//  <Link to="/login" className="hidden lg:block"></Link>
