import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { Collapse, IconButton, Navbar as MTNavbar } from '@material-tailwind/react';
import Logo from '@/assets/logo.png';
import AuthButton from './AuthButton';
import { useAppSelector } from '@/redux/hooks';

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const { user } = useAppSelector(state => state.user);

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navLink = ({ isActive }: { isActive: boolean }) => (isActive ? 'font-medium underline' : '');
    const NavList = (
        <div className="my-4 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
            <NavLink to="/" className={navLink} end>
                Home
            </NavLink>
            <NavLink to="/all-books" className={navLink}>
                All Books
            </NavLink>
            {user?.email && (
                <>
                    <NavLink to="/add-book" className={navLink}>
                        Add Book
                    </NavLink>
                    <NavLink to="/wishlist" className={navLink}>
                        Wishlist
                    </NavLink>
                    <NavLink to="/readlist" className={navLink}>
                        Readlist
                    </NavLink>
                </>
            )}
        </div>
    );

    return (
        <MTNavbar fullWidth shadow className="sticky top-0 z-10">
            <section className="flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-40" />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{NavList}</div>
                    <AuthButton className="hidden lg:block" />
                    <IconButton ripple={false} onClick={() => setOpenNav(!openNav)} className="lg:hidden">
                        {openNav ? <CgClose size={20} /> : <CgMenuRight size={20} />}
                    </IconButton>
                </div>
            </section>
            <Collapse open={openNav}>
                {NavList}
                <AuthButton className="mb-1.5" />
            </Collapse>
        </MTNavbar>
    );
}
