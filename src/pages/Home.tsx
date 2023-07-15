import { IBook } from "@/types";
import Hero from "@/components/Home/Hero";
import BookCard from "@/components/Common/BookCard";
import SectionHeader from "@/components/Common/SectionHeader";
import { useGetTenBookQuery } from "@/redux/features/books/bookApi";

export default function Home() {
    const { data, isLoading } = useGetTenBookQuery(10);

    return (
        <>
            <Hero />
            <section>
                <SectionHeader>Recent Added Books</SectionHeader>
                <div className="mt-16 mb-16 sm:mb-20 grid lg:grid-cols-2 gap-6">
                    {isLoading ? <div>Loading...</div> : data?.data?.map((book: IBook) => <BookCard key={book._id} book={book} />)}
                </div>
            </section>
        </>
    );
}
