import { IBook } from '@/types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Button } from '@material-tailwind/react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function BookCard({ book }: { book: IBook }) {
    const { _id, cover, genre, title, synopsis, author, publicationYear, price, rating } = book;

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
                    <p>Publication Year : {publicationYear}</p>
                    <p>Price : {price}$</p>
                    <p>Rating : {rating}</p>
                </div>
                <Link to={`/book/${_id}`}>
                    <Button className="mt-2 flex items-center gap-2">
                        View More
                        <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </Card>
    );
}
