import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction } from '@material-tailwind/react';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import DeleteBookDialog from './DeleteBookDialog';

export default function EditBook({ id }: { id: string }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div className="fixed bottom-6 xs:bottom-10 right-6 xs:right-10">
                <SpeedDial>
                    <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full">
                            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                    </SpeedDialHandler>
                    <SpeedDialContent>
                        <SpeedDialAction className="h-14 w-14">
                            <Link to={`/edit-book/${id}`}>
                                <PencilSquareIcon className="h-5 w-5" />
                                <div className="text-xs">Edit</div>
                            </Link>
                        </SpeedDialAction>
                        <button onClick={handleOpen}>
                            <SpeedDialAction className="h-14 w-14">
                                <TrashIcon className="h-5 w-5" />
                                <div className="text-xs">Delete</div>
                            </SpeedDialAction>
                        </button>
                    </SpeedDialContent>
                </SpeedDial>
            </div>
            <DeleteBookDialog id={id} open={open} handleOpen={handleOpen} />
        </>
    );
}
