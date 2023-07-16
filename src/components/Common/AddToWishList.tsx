import { addToWishlist } from '@/redux/features/wishlist/wishlistSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Button } from '@material-tailwind/react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid';

export default function AddToWishlist({ book }: { book: string }) {
    const dispatch = useAppDispatch();

    return (
        <Button size="sm" color="orange" onClick={() => dispatch(addToWishlist(book))} className="flex justify-center items-center gap-1">
            Wishlist
            <ClipboardDocumentIcon className="w-4 h-4" />
        </Button>
    );
}
