import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/logo.png';

export default function AuthContainer({ children }: { children: ReactNode }) {
    return (
        <div className="bg-auth bg-cover bg-center ">
            <section className="min-h-screen grid lg:grid-cols-2 items-center">
                <Link to="/" className="hidden lg:block xl:mx-auto">
                    <img src={Logo} alt="logo" className="w-40" />
                </Link>
                <div className="w-full sm:w-[28rem] bg-background rounded-3xl border flex flex-col gap-y-8 p-10 my-10 mx-auto lg:ml-auto xl:mr-10">
                    {children}
                </div>
            </section>
        </div>
    );
}
