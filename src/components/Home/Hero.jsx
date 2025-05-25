import TypeingText from './TypingText'
import image from '../../assets/forest.png';

const Hero = () => {

    return (
        <section className="box-contains h-auto md:h-[110vh] w-full md:gap-12 gap-y-8 py-12 md:py-12 px-3 md:px-8" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 0%, black 85%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 0%, black 85%, transparent 100%)',
        }}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[80vh] rounded-xl md:bg-[#344b3d]/60 md:backdrop-blur-[6px] md:shadow-lg shadow-lime-950 md:outline-2 outline-gray-400/80 mt-5 md:mt-10 mb-5 md:mb-0">
                <div className=" bg-[#0d2733]/50 md:bg-transparent rounded-lg h-full flex md:items-center py-6 px-6 md:px-12">
                    <h1 className="w-full not-md:text-center not-lg:text-center not-xl:text-center text-3xl md:text-5xl font-extrabold text-white">
                        Hello, <br />
                        This is, <br />
                        <TypeingText />
                    </h1>
                </div>
                <div className="h-[50vh]"></div>
            </div>
        </section>
    );
}

export default Hero;