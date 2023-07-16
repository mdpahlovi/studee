import SectionHeader from '@/components/Common/SectionHeader';
import WishlistCard from '@/components/Common/WishlistCard';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hooks';
import { IBook } from '@/types';

export default function Wishlist() {
    const { data, isLoading } = useGetBooksQuery('');
    const { books } = useAppSelector(state => state.wishlist);
    const bookIds = books?.map(book => book?.book);

    let wishlistBooks;
    if (!isLoading) {
        wishlistBooks = data?.data?.filter((book: { _id: string }) => bookIds?.includes(book?._id));
    }

    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>Readlists</SectionHeader>
            </div>
            <section className="my-16 lg:my-20">
                {isLoading ? (
                    <div>loading</div>
                ) : (
                    <div className="grid lg:grid-cols-2 gap-6">
                        {wishlistBooks?.map((book: IBook) => (
                            <WishlistCard key={book?._id} book={book} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
