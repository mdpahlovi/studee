import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import AllBooks from '../pages/AllBooks';
import AddBook from '../pages/AddBook';
import BookDetails from '../pages/BookDetails';

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
                element: <AddBook />,
            },
            {
                path: '/book/:id',
                element: <BookDetails />,
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
