import { Link } from 'react-router-dom';
import Logo from '@/assets/logo.png';

export default function Footer() {
    return (
        <footer className="border-t py-8">
            <section className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 md:justify-between">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-40" />
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
                    <Link to="/" className="hover:underline">
                        About Us
                    </Link>
                    <Link to="/" className="hover:underline">
                        License
                    </Link>
                    <Link to="/" className="hover:underline">
                        Contribute
                    </Link>
                    <Link to="/" className="hover:underline">
                        Contact Us
                    </Link>
                </div>
            </section>
            <hr className="m-8 border" />
            <p className="text-center">&copy; 2023 Material Tailwind</p>
        </footer>
    );
}
