import { IReadlist } from '@/types';
import { Card, Rating } from '@material-tailwind/react';
import ReadingStatus from './ReadingStatus';

export default function ReadListCard({ readlist }: { readlist: IReadlist }) {
    const { _id, book, ...readingStatus } = readlist;
    const { title, cover, genre, rating } = book;

    return (
        <Card className="flex-row">
            <img className="hidden sm:block w-32 rounded-l-xl" src={cover} alt="" />
            <div className="w-full flex flex-col justify-center p-6 pr-0">
                <h3>{title}</h3>
                <p className="text-secondary">Genre : {genre}</p>
                <p className="flex flex-wrap items-center gap-1">
                    Rating : <Rating value={Math.round(rating)} /> ({rating})
                </p>
            </div>
            <ReadingStatus id={_id!} readingStatus={readingStatus} />
        </Card>
    );
}
