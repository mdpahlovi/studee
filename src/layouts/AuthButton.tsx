import { useAppSelector } from '@/redux/hooks';
import { Button, Spinner } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function AuthButton({ className }: { className: string }) {
    const { isLoading, user } = useAppSelector(state => state.user);

    return (
        <div className={className}>
            {isLoading ? (
                <Button size="sm" disabled={isLoading} className="flex justify-center items-end gap-2">
                    <Spinner /> Loading...
                </Button>
            ) : user?.email ? (
                <Button size="sm">Logout</Button>
            ) : (
                <Link to="/login">
                    <Button size="sm">Login / Signup</Button>
                </Link>
            )}
        </div>
    );
}

//  <Link to="/login" className="hidden lg:block"></Link>
