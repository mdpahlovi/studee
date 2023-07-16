import { useUpdateReviewMutation } from '@/redux/features/books/bookApi';
import { Button, Input, Spinner } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function AddReview({ id, user }: { id: string; user: string }) {
    const [comment, setComment] = useState('');
    const [updateReview, { isLoading, isSuccess, isError }] = useUpdateReviewMutation();

    const handleComment = () => {
        const payload = { user, comment };

        updateReview({ id, ...payload });
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Review Added Successfully');
        } else if (isError) {
            toast.error('Something Error!');
        }
    }, [isError, isSuccess]);

    return (
        <div className="relative">
            <Input variant="standard" label="Comment" onChange={e => setComment(e.target.value)} />
            <Button
                size="sm"
                disabled={!comment || isLoading}
                onClick={handleComment}
                className="!absolute right-1 top-1 flex justify-center items-center gap-1"
            >
                {isLoading ? (
                    <>
                        <Spinner /> Loading...
                    </>
                ) : (
                    'Submit'
                )}
            </Button>
        </div>
    );
}
