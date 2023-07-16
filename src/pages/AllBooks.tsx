import { useState } from 'react';
import BookCard from '@/components/Common/BookCard';
import SectionHeader from '@/components/Common/SectionHeader';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types';
import { Button, Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import FilterBookDrawer from '@/components/Common/FilterBookDrawer';
import { format, parseISO } from 'date-fns';

export default function AllBooks() {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useGetBooksQuery(query, { refetchOnMountOrArgChange: true });
    const { user } = useAppSelector(state => state.user);
    const { genres, publicationYears } = useAppSelector(state => state.book);

    let books;
    if (genres?.length !== 0) {
        books = data?.data?.filter((book: { genre: string }) => genres?.includes(book?.genre));
    } else if (publicationYears?.length !== 0) {
        books = data?.data?.filter((book: { publicationDate: string }) =>
            publicationYears?.includes(format(parseISO(book?.publicationDate), 'yyyy'))
        );
    } else {
        books = data?.data;
    }

    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>All Books</SectionHeader>
            </div>
            <section className="my-16 sm:my-20">
                <div className="flex justify-between mb-8 sm:mb-10">
                    <div className="flex items-center gap-4">
                        <div>
                            <Button onClick={() => setOpen(true)} className="whitespace-nowrap">
                                Filter Option
                            </Button>
                        </div>
                        <Input
                            label="Search"
                            onChange={e => setQuery(e.target.value)}
                            icon={<MagnifyingGlassIcon className="w-5 h-5 hover:text-primary cursor-pointer" />}
                        />
                    </div>
                    {user?.email && (
                        <Link to="/add-book">
                            <Button>Add New</Button>
                        </Link>
                    )}
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="grid lg:grid-cols-2 gap-6">
                        {books?.map((book: IBook) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                )}
            </section>
            <FilterBookDrawer open={open} setOpen={setOpen} />
        </>
    );
}
