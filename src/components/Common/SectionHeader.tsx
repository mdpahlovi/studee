import { ReactNode } from 'react';

export default function SectionHeader({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col items-center">
            <h2>{children}</h2>
            <div className="mt-6 w-40 h-1.5 bg-secondary rounded" />
        </div>
    );
}
