import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { Button, IconButton, MobileNav, Navbar as MTNavbar } from '@material-tailwind/react';
import Logo from '../assets/logo.png';

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);

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
            <NavLink to="/add-book" className={navLink}>
                Add Book
            </NavLink>
        </div>
    );

    return (
        <MTNavbar fullWidth shadow className="sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-40" />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{NavList}</div>
                    <Link to="/login" className="hidden lg:block">
                        <Button size="sm">Login / Signup</Button>
                    </Link>
                    <IconButton ripple={false} onClick={() => setOpenNav(!openNav)} className="lg:hidden">
                        {openNav ? <CgClose size={20} /> : <CgMenuRight size={20} />}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                {NavList}
                <Link to="/login">
                    <Button size="sm">Login / Signup</Button>
                </Link>
            </MobileNav>
        </MTNavbar>
    );
}
