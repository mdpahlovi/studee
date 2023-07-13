import { Link } from 'react-router-dom';
import AuthContainer from '../layouts/AuthContainer';
import { Button, Input } from '@material-tailwind/react';
import Logo from '../assets/logo.png';
import Github from '../assets/icon/github.png';
import Google from '../assets/icon/google.png';

export default function Login() {
    return (
        <AuthContainer>
            <Link to="/" className="flex justify-center lg:hidden">
                <img src={Logo} alt="logo" className="w-40" />
            </Link>
            <h3>Login to your account</h3>
            <div className="grid sm:grid-cols-2 gap-6">
                <Button color="white" fullWidth className="flex items-center justify-center gap-2">
                    <img src={Google} className="w-5" alt="" />
                    <span className="">With Google</span>
                </Button>
                <Button color="white" fullWidth className="flex items-center justify-center gap-2">
                    <img src={Github} className="w-5" alt="" />
                    <span className="">With Github</span>
                </Button>
            </div>
            <form className="space-y-8">
                <Input variant="standard" label="Your Email" />
                <Input variant="standard" label="Your Password" />
                <Button fullWidth>Login</Button>
                <Link to="/signup" className="block hover:underline hover:text-primary">
                    Create new account
                </Link>
            </form>
        </AuthContainer>
    );
}
