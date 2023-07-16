import { usePostReadlistMutation } from '@/redux/features/readlist/readlistApi';
import { Button, Spinner } from '@material-tailwind/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

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
        <Button size="sm" color="orange" onClick={handleAdd} className="flex justify-center items-end gap-2" disabled={isLoading}>
            {isLoading ? (
                <>
                    <Spinner color="orange" /> Loading...
                </>
            ) : (
                'AddToReadlist'
            )}
        </Button>
    );
}
