import { Drawer, Button, IconButton } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function FilterBookDrawer({ open, setOpen }: { open: boolean; setOpen: (arg: boolean) => void }) {
    return (
        <Drawer open={open} onClose={() => setOpen(false)} className="p-4">
            <div className="mb-6 flex items-center justify-between">
                <h3>Filter Options</h3>
                <IconButton variant="text" onClick={() => setOpen(false)}>
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
            </div>
            <h3 className="mb-8 pr-4 font-normal">
                Material Tailwind features multiple React and HTML components, all written with Tailwind CSS classes and Material Design
                guidelines.
            </h3>
            <div className="flex gap-2">
                <Button size="sm">Get Started</Button>
                <Button size="sm" variant="outlined">
                    Documentation
                </Button>
            </div>
        </Drawer>
    );
}
