import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IBook } from '@/types';
import { Card, IconButton } from '@material-tailwind/react';
import { ChevronUpIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/solid';
import { addToWishlist, removeFromWishlist, removeOne } from '@/redux/features/wishlist/wishlistSlice';

export default function WishlistCard({ book }: { book: IBook }) {
    const dispatch = useAppDispatch();
    const { _id, title, cover, price } = book;
    const { books } = useAppSelector(state => state.wishlist);
    const wishlistBook = books?.find(wishlist => wishlist?.book === _id);
    const totalPrice = Number(price) * Number(wishlistBook?.quantity);

    return (
        <Card className="flex-row">
            <img className="hidden sm:block w-32 rounded-l-xl" src={cover} alt="" />
            <div className="w-full flex flex-col justify-center p-6 pr-0">
                <h3>{title}</h3>
                <p className="text-secondary">Quantity : {wishlistBook?.quantity}</p>
                <p>Price : ${totalPrice}</p>
            </div>
            <div className="p-6 flex flex-col justify-center gap-2">
                <IconButton variant="text" onClick={() => dispatch(addToWishlist(_id!))} className="bg-primary/30 text-white">
                    <ChevronUpIcon className="w-4 h-4" />
                </IconButton>
                <IconButton
                    variant="text"
                    color="red"
                    onClick={() => dispatch(removeFromWishlist(_id!))}
                    className="bg-red-500/30 text-white"
                >
                    <TrashIcon className="w-4 h-4" />
                </IconButton>
                <IconButton variant="text" onClick={() => dispatch(removeOne(_id!))} className="bg-primary/30 text-white">
                    <ChevronDownIcon className="w-4 h-4" />
                </IconButton>
            </div>
        </Card>
    );
}
