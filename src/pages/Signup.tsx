import { Link } from 'react-router-dom';
import AuthContainer from '@/layouts/AuthContainer';
import { Button, Input, Spinner } from '@material-tailwind/react';
import Logo from '@/assets/logo.png';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createUser } from '@/redux/features/users/userSlice';
import toast from 'react-hot-toast';
import { IAuthInput } from '@/types';

export default function Signup() {
    const { register, handleSubmit } = useForm<IAuthInput>();

    const { isLoading, isError, error } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleSignup = (data: IAuthInput) => {
        dispatch(createUser(data));
    };

    if (isError) {
        toast.error(error || 'Something Error!');
    }

    return (
        <AuthContainer>
            <Link to="/" className="flex justify-center lg:hidden">
                <img src={Logo} alt="logo" className="w-40" />
            </Link>
            <h3>Create new account</h3>
            <form onSubmit={handleSubmit(handleSignup)} className="space-y-8">
                <Input variant="standard" label="Your Name" />
                <Input variant="standard" label="Your Email" {...register('email')} />
                <Input variant="standard" label="Your Password" {...register('password')} />
                <Button type="submit" fullWidth className="flex justify-center items-end gap-2" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Spinner /> Loading...
                        </>
                    ) : (
                        'Signup'
                    )}
                </Button>
                <Link to="/login" className="block hover:underline hover:text-primary">
                    Login to your account
                </Link>
            </form>
        </AuthContainer>
    );
}
