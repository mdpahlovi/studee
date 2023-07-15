import BookCard from '@/components/Common/BookCard';
import SectionHeader from '@/components/Common/SectionHeader';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types';
import { Button, Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function AllBooks() {
    const { data, isLoading } = useGetBooksQuery(undefined);
    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>All Books</SectionHeader>
            </div>
            <section className="my-16 sm:my-20">
                <div className="flex justify-between mb-8 sm:mb-10">
                    <div>
                        <Input label="Search" icon={<MagnifyingGlassIcon className="w-5 h-5" />} />
                    </div>
                    <Link to="/add-book">
                        <Button>Add New</Button>
                    </Link>
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="grid lg:grid-cols-2 gap-6">
                        {data?.data?.map((book: IBook) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
