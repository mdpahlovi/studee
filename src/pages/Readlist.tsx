import ReadListCard from '@/components/Common/ReadListCard';
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
                    <div className="grid lg:grid-cols-2 gap-6">
                        {data?.data?.map((readlist: IReadlist) => (
                            <ReadListCard key={readlist?._id} readlist={readlist} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
