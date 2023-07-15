import { Link } from 'react-router-dom';
import AuthContainer from '@/layouts/AuthContainer';
import { Button, Input, Spinner } from '@material-tailwind/react';
import Logo from '@/assets/logo.png';
import Github from '@/assets/icon/github.png';
import Google from '@/assets/icon/google.png';
import { IAuthInput } from '@/types';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import  toast  from 'react-hot-toast';
import { loginUser } from '@/redux/features/users/userSlice';

export default function Login() {

    const { register, handleSubmit } = useForm<IAuthInput>();

    const { isLoading, isError, error } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleLogin = (data: IAuthInput) => {
        dispatch(loginUser(data));
    };

    if(isError){
        toast.error(error || 'Something Error!')
    }

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
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-8">
                <Input variant="standard" label="Your Email" {...register('email' )} />
                <Input variant="standard" label="Your Password" {...register('password')} />
                <Button type="submit" fullWidth className="flex justify-center items-end gap-2" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Spinner /> Loading...
                        </>
                    ) : (
                        'login'
                    )}
                </Button>
                <Link to="/signup" className="block hover:underline hover:text-primary">
                    Create new account
                </Link>
            </form>
        </AuthContainer>
    );
}
