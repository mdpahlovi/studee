import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import ErrorImage from '@/assets/icon/404.svg';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
            <img src={ErrorImage} alt="ErrorImage" />
            <div className="max-w-lg mx-auto w-full mt-12 space-y-6">
                <h2>Page not found</h2>
                <div>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</div>
            </div>
            <Link to="/" className="mt-8">
                <Button>Go to homepage</Button>
            </Link>
        </div>
    );
}
