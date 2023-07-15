import { IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction } from '@material-tailwind/react';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function EditBook({ id }: { id: string }) {
    return (
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
                    <SpeedDialAction className="h-14 w-14">
                        <TrashIcon className="h-5 w-5" />
                        <div className="text-xs">Delete</div>
                    </SpeedDialAction>
                </SpeedDialContent>
            </SpeedDial>
        </div>
    );
}
