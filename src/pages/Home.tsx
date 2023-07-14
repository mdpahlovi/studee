import Hero from '../components/Home/Hero';
import SectionHeader from '../components/Common/SectionHeader';
import { useGetTenBookQuery } from '../redux/features/books/bookApi';
import BookCard from '../components/Common/BookCard';
import { IBook } from '../types';

export default function Home() {
    const { data, isLoading } = useGetTenBookQuery(undefined);

    return (
        <>
            <Hero />
            <section>
                <SectionHeader>Recent Added Books</SectionHeader>
                <div className="mt-16 mb-16 sm:mb-20 grid lg:grid-cols-2 gap-6">
                    {isLoading ? <div>Loading...</div> : data?.data?.map(book => <BookCard key={book._id} book={book} />)}
                </div>
            </section>
        </>
    );
}
