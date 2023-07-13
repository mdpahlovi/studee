import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
