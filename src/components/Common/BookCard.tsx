import { IBook } from '@/types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Button, Rating } from '@material-tailwind/react';
import { format, parseISO } from 'date-fns';
import AddToReadlist from './AddToReadlist';
import { useAppSelector } from '@/redux/hooks';
import AddToWishlist from './AddToWishList';

export default function BookCard({ book }: { book: IBook }) {
    const { user } = useAppSelector(state => state.user);
    const { _id, cover, genre, title, synopsis, author, publicationDate, price, rating } = book;
    const date = format(parseISO(publicationDate as string), 'PPP');

    return (
        <Card className="sm:flex-row w-full">
            <CardHeader shadow={false} floated={false} className="hidden sm:block w-2/5 shrink-0 m-0 rounded-r-none">
                <img src={cover} alt="Cover" className="w-full h-full object-cover" />
            </CardHeader>
            <div className="flex flex-col gap-2.5 justify-center px-8 py-6">
                <p className="text-primary">{genre}</p>
                <h3>{title}</h3>
                <p className="line-clamp-2">{synopsis}</p>
                <div>
                    <p>Author : {...author}</p>
                    <p>Publication Date : {date}</p>
                    <p>Price : {price}$</p>
                    <p className="flex flex-wrap items-center gap-1">
                        Rating : <Rating value={Math.round(rating)} /> ({rating})
                    </p>
                </div>
                <Link to={`/book/${_id}`} className="mt-2">
                    <Button size="sm">Details</Button>
                </Link>
                {user?.email && (
                    <div className="flex gap-4 mt-2">
                        <AddToWishlist book={_id!} />
                        <AddToReadlist user={user?.email} book={_id!} />
                    </div>
                )}
            </div>
        </Card>
    );
}
