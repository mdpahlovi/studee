import { Drawer, IconButton, Checkbox } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { genreConstant, yearConstant } from '@/utils/filterConstant';
import { useAppDispatch } from '@/redux/hooks';
import { setGenre, setPublicationYear } from '@/redux/features/books/bookSlice';

export default function FilterBookDrawer({ open, setOpen }: { open: boolean; setOpen: (arg: boolean) => void }) {
    const dispatch = useAppDispatch();

    const handleSetGenre = (value: string) => {
        dispatch(setGenre(value));
    };

    const handleSetYear = (value: string) => {
        dispatch(setPublicationYear(value));
    };

    return (
        <Drawer open={open} onClose={() => setOpen(false)} className="p-4 space-y-8">
            <div className="flex items-center justify-between">
                <h3>Filter Options</h3>
                <IconButton variant="text" onClick={() => setOpen(false)}>
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
            </div>
            <div className="space-y-4">
                <h4>Genre :</h4>
                <div className="flex flex-wrap gap-2.5">
                    {genreConstant?.map(genre => (
                        <div className="px-2 py-1 bg-secondary/30 rounded-lg flex justify-center items-center gap-2">
                            <Checkbox
                                color="brown"
                                ripple={false}
                                containerProps={{ className: 'p-0' }}
                                onClick={() => handleSetGenre(genre)}
                            />
                            {genre}
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-4">
                <h4>Publication Year :</h4>
                <div className="flex flex-wrap gap-2.5">
                    {yearConstant?.map(year => (
                        <div className="px-2 py-1 bg-secondary/30 rounded-lg flex justify-center items-center gap-2">
                            <Checkbox
                                color="brown"
                                ripple={false}
                                containerProps={{ className: 'p-0' }}
                                onClick={() => handleSetYear(year)}
                            />
                            {year}
                        </div>
                    ))}
                </div>
            </div>
        </Drawer>
    );
}
