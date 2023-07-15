import { useParams } from 'react-router-dom';
import SectionHeader from '@/components/Common/SectionHeader';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import EditBook from '@/components/Common/EditBook';
import { useAppSelector } from '@/redux/hooks';

export default function BookDetails() {
    const { id } = useParams();
    const { data, isLoading } = useSingleBookQuery(id);
    const { user } = useAppSelector(state => state.user);

    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>Book Details</SectionHeader>
            </div>
            <section className="py-20 grid sm:grid-cols-2 lg:grid-cols-[4fr_8fr] gap-8">
                {isLoading ? (
                    <div>Loading</div>
                ) : (
                    <>
                        <div>
                            <img src={data?.data?.cover} alt="" className="w-[24rem]" />
                        </div>
                        <div>
                            <p className="text-primary">{data?.data?.genre}</p>
                            <h3>{data?.data?.title}</h3>
                            <div>
                                <p>Author : </p>
                                <p>Publication Year : {data?.data?.publicationYear}</p>
                                <p>Price : {data?.data?.price}$</p>
                                <p>Rating : {data?.data?.rating}</p>
                            </div>
                            <p>{data?.data?.synopsis}</p>
                        </div>
                    </>
                )}
            </section>
            {user?.email && user?.email === data?.data?.publisher?.email && <EditBook id={data?.data?._id} />}
        </>
    );
}
