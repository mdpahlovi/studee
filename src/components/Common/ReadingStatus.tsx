import { useUpdateReadlistMutation } from '@/redux/features/readlist/readlistApi';
import { IReadlist } from '@/types';
import { Checkbox } from '@material-tailwind/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ReadingStatus({ id, readingStatus }: { id: string; readingStatus: Partial<IReadlist> }) {
    const { isFinished, isReading, planToRead } = readingStatus;
    const [updateReadList, { isError, isSuccess, error }] = useUpdateReadlistMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success('Successfully Added');
        } else if (isError) {
            toast.error('Something Error!');
        }
    }, [isError, isSuccess]);

    console.log(error);

    return (
        <div className="pr-6 flex flex-col justify-center gap-2.5">
            <div className="flex justify-end items-center gap-2 whitespace-nowrap">
                Plan To Read
                <Checkbox
                    ripple={false}
                    checked={planToRead}
                    disabled={planToRead}
                    onClick={() => updateReadList({ id, planToRead: true })}
                    containerProps={{ className: 'p-0' }}
                />
            </div>
            <div className="flex justify-end items-center gap-2 whitespace-nowrap">
                Reading
                <Checkbox
                    ripple={false}
                    checked={isReading}
                    disabled={isReading}
                    onClick={() => updateReadList({ id, isReading: true })}
                    containerProps={{ className: 'p-0' }}
                />
            </div>
            <div className="flex justify-end items-center gap-2 whitespace-nowrap">
                Finished
                <Checkbox
                    ripple={false}
                    checked={isFinished}
                    disabled={isFinished}
                    onClick={() => updateReadList({ id, isFinished: true })}
                    containerProps={{ className: 'p-0' }}
                />
            </div>
        </div>
    );
}
