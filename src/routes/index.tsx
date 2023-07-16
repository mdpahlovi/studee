import { createBrowserRouter } from 'react-router-dom';
import Main from '@/layouts/Main';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';
import AllBooks from '@/pages/AllBooks';
import AddBook from '@/pages/AddBook';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import PrivateRoute from './PrivateRoute';
import Readlist from '@/pages/Readlist';
import Wishlist from '@/pages/Wishlist';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/all-books',
                element: <AllBooks />,
            },
            {
                path: '/add-book',
                element: (
                    <PrivateRoute>
                        <AddBook />
                    </PrivateRoute>
                ),
            },
            {
                path: '/readlist',
                element: (
                    <PrivateRoute>
                        <Readlist />
                    </PrivateRoute>
                ),
            },
            {
                path: '/wishlist',
                element: (
                    <PrivateRoute>
                        <Wishlist />
                    </PrivateRoute>
                ),
            },
            {
                path: '/book/:id',
                element: <BookDetails />,
            },
            {
                path: '/edit-book/:id',
                element: (
                    <PrivateRoute>
                        <EditBook />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default routes;
