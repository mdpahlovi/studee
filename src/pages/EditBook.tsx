/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import SectionHeader from '@/components/Common/SectionHeader';
import { IBook, IBookInput } from '@/types';
import { Button, Input, Spinner, Textarea } from '@material-tailwind/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSingleBookQuery, useUpdateBookMutation } from '@/redux/features/books/bookApi';

export default function EditBook() {
    const { id } = useParams();
    const { data } = useSingleBookQuery(id);
    const book = data?.data;
    const { register, handleSubmit } = useForm<IBookInput>();
    const [updateBook, { isLoading, isError, isSuccess }] = useUpdateBookMutation();

    const handleEditBook: SubmitHandler<IBookInput> = ({
        title,
        cover,
        author1,
        author2,
        genre,
        publicationYear,
        publisherName,
        rating,
        price,
        synopsis,
    }) => {
        const updatedBook: Partial<IBook> = {
            title: title ? title : book?.title,
            cover: cover ? cover : book?.cover,
            author: author1 || author2 ? [author1, author2] : book?.author,
            genre: genre ? genre : book?.genre,
            publicationYear: publicationYear ? Number(publicationYear) : Number(book?.publicationYear),
            publisher: publisherName ? { name: publisherName } : book?.publisher,
            rating: rating ? Number(rating) : Number(book?.rating),
            price: price ? Number(price) : Number(book?.price),
            synopsis: synopsis ? synopsis : book?.synopsis,
        };

        updateBook({ id, ...updatedBook });
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Book Updated Successfully');
        } else if (isError) {
            toast.error('Something Error!');
        }
    }, [isError, isSuccess]);

    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>Edit Book</SectionHeader>
            </div>
            <section className="my-16 sm:my-20">
                <form
                    onSubmit={handleSubmit(handleEditBook)}
                    className="sm:max-w-xl mx-auto bg-background rounded-3xl border flex flex-col gap-y-8 p-10"
                >
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input variant="standard" label="Genre" {...register('genre')} defaultValue={data?.data?.genre} />
                        <Input variant="standard" label="Title" {...register('title')} defaultValue={data?.data?.title} />
                    </div>
                    <Input variant="standard" label="Cover" {...register('cover')} defaultValue={data?.data?.cover} />
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input variant="standard" label="Author 1" {...register('author1')} defaultValue={data?.data?.author[0]} />
                        <Input variant="standard" label="Author 2" {...register('author2')} defaultValue={data?.data?.author[1]} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input
                            type="number"
                            variant="standard"
                            label="Publication Year"
                            {...register('publicationYear')}
                            defaultValue={data?.data?.publicationYear}
                        />
                        <Input
                            variant="standard"
                            label="Publisher Name"
                            {...register('publisherName')}
                            defaultValue={data?.data?.publisher?.name}
                        />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <Input
                            type="number"
                            max={5}
                            variant="standard"
                            label="Rating"
                            {...register('rating')}
                            defaultValue={data?.data?.rating}
                        />
                        <Input type="number" variant="standard" label="Price" {...register('price')} defaultValue={data?.data?.price} />
                    </div>
                    <Textarea variant="standard" label="Synopsis" {...register('synopsis')} defaultValue={data?.data?.synopsis} />
                    <Button type="submit" fullWidth className="flex justify-center items-end gap-2" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Spinner /> Loading...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </form>
            </section>
        </>
    );
}
