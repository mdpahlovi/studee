import { Button } from '@material-tailwind/react';
import HeroImage from '@/assets/hero.png';

export default function Hero() {
    return (
        <section className="py-16 sm:py-20">
            <div className="absolute inset-0 my-auto xs:w-96 h-32 rotate-45 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-50 dark:opacity-20" />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-8">
                    <h1>
                        I book can <span className="text-primary">change</span> <br />
                        your life.
                    </h1>
                    <p>
                        This enchanting novel explores the transformation power of following one's dreams, reminding readers to listen to
                        their hearts and pursue their true passions in life.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Button color="orange">Get Start</Button>
                        <Button variant="outlined" color="orange">
                            See All Book
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img src={HeroImage} alt="Hero" />
                </div>
            </div>
        </section>
    );
}
