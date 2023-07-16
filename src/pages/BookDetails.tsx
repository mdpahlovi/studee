import { useParams } from 'react-router-dom';
import SectionHeader from '@/components/Common/SectionHeader';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import EditBook from '@/components/Common/EditBook';
import { useAppSelector } from '@/redux/hooks';
import { Rating, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem } from '@material-tailwind/react';
import AddReview from '@/components/Common/AddReview';
import { IReview } from '@/types';
import { format, parseISO } from 'date-fns';
import AddToReadlist from '@/components/Common/AddToReadlist';
import AddToWishlist from '@/components/Common/AddToWishList';

export default function BookDetails() {
    const { id } = useParams();
    const { data, isLoading } = useSingleBookQuery(id);
    const { user } = useAppSelector(state => state.user);

    let date;
    if (!isLoading) {
        date = format(parseISO(data?.data?.publicationDate), 'PPP');
    }

    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>Book Details</SectionHeader>
            </div>
            <section className="py-20">
                {isLoading ? (
                    <div>Loading</div>
                ) : (
                    <>
                        <div>
                            <img src={data?.data?.cover} alt="" className="w-[20rem] mb-3.5 float-left mr-8 rounded-lg" />
                        </div>
                        <div className="space-y-4">
                            {user?.email && (
                                <div className="flex gap-4 mt-2">
                                    <AddToWishlist book={id!} />
                                    <AddToReadlist user={user?.email} book={id!} />
                                </div>
                            )}
                            <p className="text-primary">{data?.data?.genre}</p>
                            <h3>{data?.data?.title}</h3>
                            <div>
                                <p>Author : {...data?.data?.author}</p>
                                <p>Publication Date : {date}</p>
                                <p>Price : {data?.data?.price}$</p>
                                <p className="flex flex-wrap items-center gap-1">
                                    Rating : <Rating value={Math.round(data?.data?.rating)} /> ({data?.data?.rating})
                                </p>
                            </div>
                            <p>{data?.data?.synopsis}</p>
                        </div>
                    </>
                )}
            </section>
            {user?.email && user?.email === data?.data?.publisher?.email && <EditBook id={data?.data?._id} />}
            <section className="mb-20 md:max-w-2xl space-y-10">
                <SectionHeader>Book Reviews</SectionHeader>
                {user?.email && <AddReview id={id!} user={user?.email} />}
                <div>
                    {data?.data?.reviews.map((review: IReview, idx: number) => (
                        <TimelineItem key={idx} className="h-max pb-8">
                            {idx + 1 !== data?.data?.reviews.length && <TimelineConnector className="!w-[78px]" />}
                            <TimelineHeader className="relative rounded-lg border bg-background py-3 pl-4 pr-8 shadow-lg">
                                <TimelineIcon variant="ghost">
                                    <div className="w-4 h-4 flex justify-center items-center text-white">{idx + 1}</div>
                                </TimelineIcon>
                                <p>{review?.comment}</p>
                            </TimelineHeader>
                        </TimelineItem>
                    ))}
                </div>
            </section>
        </>
    );
}
