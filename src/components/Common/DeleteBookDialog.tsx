import { Button, Dialog } from '@material-tailwind/react';
import { BellIcon } from '@heroicons/react/24/solid';
import { useDeleteBookMutation } from '@/redux/features/books/bookApi';
import { useNavigate } from 'react-router-dom';

export default function DeleteBookDialog({ id, open, handleOpen }: { id: string; open: boolean; handleOpen: () => void }) {
    const navigate = useNavigate();
    const [deleteBook] = useDeleteBookMutation();

    const handleBook = () => {
        deleteBook(id);
        handleOpen;
        navigate('/all-books');
    };

    return (
        <Dialog size="xs" open={open} handler={handleOpen}>
            <div className="grid place-items-center gap-4 pt-8">
                <BellIcon className="h-16 w-16 text-red-500" />
                <h3 className="text-center">
                    Are you sure! <br /> You want to do this
                </h3>
            </div>
            <div className="flex justify-end gap-2 p-6">
                <Button size="sm" variant="text" onClick={handleOpen}>
                    close
                </Button>
                <Button size="sm" color="red" onClick={handleBook}>
                    Ok, Got it
                </Button>
            </div>
        </Dialog>
    );
}
