import SectionHeader from '@/components/Common/SectionHeader';
import { useGetReadlistsQuery } from '@/redux/features/readlist/readlistApi';
import { useAppSelector } from '@/redux/hooks';
import { IReadlist } from '@/types';

export default function Readlist() {
    const { user } = useAppSelector(state => state.user);
    const { data, isLoading } = useGetReadlistsQuery(user?.email, { refetchOnMountOrArgChange: true });

    return (
        <>
            <div className="bg-primary py-20">
                <SectionHeader>Readlists</SectionHeader>
            </div>
            <section className="my-16 sm:my-20">
                {!user?.email || isLoading ? (
                    <div>loading</div>
                ) : (
                    <div>
                        {data?.data?.map((readlist: IReadlist) => (
                            <div key={readlist?.book?._id}>{readlist?.book?.title}</div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}