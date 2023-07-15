import { Link } from 'react-router-dom';
import AuthContainer from '@/layouts/AuthContainer';
import { Button, Input } from '@material-tailwind/react';
import Logo from '@/assets/logo.png';

export default function Signup() {
    return (
        <AuthContainer>
            <Link to="/" className="flex justify-center lg:hidden">
                <img src={Logo} alt="logo" className="w-40" />
            </Link>
            <h3>Create new account</h3>
            <form className="space-y-8">
                <Input variant="standard" label="Your Name" />
                <Input variant="standard" label="Your Email" />
                <Input variant="standard" label="Your Password" />
                <Button fullWidth>Login</Button>
                <Link to="/login" className="block hover:underline hover:text-primary">
                    Login to your account
                </Link>
            </form>
        </AuthContainer>
    );
}
