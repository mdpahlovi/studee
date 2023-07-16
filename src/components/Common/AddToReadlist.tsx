import { usePostReadlistMutation } from '@/redux/features/readlist/readlistApi';
import { Button, Spinner } from '@material-tailwind/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';

export default function AddToReadlist({ user, book }: { user: string; book: string }) {
    const [postReadlist, { isLoading, isError, isSuccess }] = usePostReadlistMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success('Successfully Added');
        } else if (isError) {
            toast.error('Something Error!');
        }
    }, [isError, isSuccess]);

    const handleAdd = () => {
        postReadlist({ user, book });
    };

    return (
        <Button size="sm" color="orange" onClick={handleAdd} className="flex justify-center items-center gap-1" disabled={isLoading}>
            {isLoading ? (
                <>
                    <Spinner color="orange" /> Loading...
                </>
            ) : (
                <>
                    Readlist
                    <ClipboardDocumentListIcon className="w-4 h-4" />
                </>
            )}
        </Button>
    );
}
