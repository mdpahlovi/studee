import SectionHeader from '@/components/Common/SectionHeader';
import { IBook, IBookInput } from '@/types';
import { Button, Input, Textarea } from '@material-tailwind/react';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function AddBook() {
    const { register, handleSubmit } = useForm<IBookInput>();

    const handleAddBook: SubmitHandler<IBookInput> = ({ author1, author2, publisherName, ...bookData }) => {
        const newBook: IBook = {
            author: [author1, author2],
            publisher: { name: publisherName, email: '' },
            reviews: [],
            ...bookData,
        };
        console.log(newBook);
    };

    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>Add New Book</SectionHeader>
            </div>
            <section className="my-16 sm:my-20">
                <form
                    onSubmit={handleSubmit(handleAddBook)}
                    className="sm:max-w-xl mx-auto bg-background rounded-3xl border flex flex-col gap-y-8 p-10"
                >
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input variant="standard" label="Genre" {...register('genre')} />
                        <Input variant="standard" label="Title" {...register('title')} />
                    </div>
                    <Input variant="standard" label="Cover" {...register('cover')} />
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input variant="standard" label="Author 1" {...register('author1')} />
                        <Input variant="standard" label="Author 2" {...register('author2')} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input type="number" variant="standard" label="Publication Year" {...register('publicationYear')} />
                        <Input variant="standard" label="Publisher Name" {...register('publisherName')} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input type="number" max={5} variant="standard" label="Rating" {...register('rating')} />
                        <Input type="number" variant="standard" label="Price" {...register('price')} />
                    </div>
                    <Textarea variant="standard" label="Synopsis" {...register('synopsis')} />
                    <Button type="submit" fullWidth>
                        Submit
                    </Button>
                </form>
            </section>
        </>
    );
}
