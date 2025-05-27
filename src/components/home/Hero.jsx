import TypeingText from './TypingText'
import Button from '../utils/Button';
import SocialTabs from '../utils/SocialTabs';
import { useDarkMode } from '../../context/DarkModeContext';

import image from '../../assets/forest.png';
import valet from '../../assets/valet.png';

const Hero = () => {
    const { isDark } = useDarkMode();
    const maskStyle = isDark
        ? 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)'
        : 'linear-gradient(to bottom, black 0%, black 95%, transparent 100%)';

    return (
        <section
            className="box-contains h-auto md:h-[100vh] w-full md:gap-12 gap-y-8 py-12 md:py-12 px-3 md:px-8"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitMaskImage: maskStyle,
                maskImage: maskStyle,
            }}
        >

            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[90%] rounded-xl md:bg-[#344b3d]/60 md:backdrop-blur-[6px] md:shadow-lg shadow-lime-950 md:outline-2 outline-gray-400/80 mt-5 md:mt-10 mb-5 md:mb-0">
                <div className="bg-[#0d2733]/50 md:bg-transparent rounded-lg h-full  flex flex-col items-center justify-center md:items-center py-6 px-4 md:px-12">

                    <h1 className="w-full not-md:text-center not-lg:text-center not-xl:text-center text-2xl md:text-5xl font-extrabold text-white">
                        Hello, <br />
                        This is, <br />
                        <TypeingText />
                    </h1>
                    <div className="hidden md:flex w-full">
                        <SocialTabs />
                    </div>
                    <div className="w-max p-5 flex justify-around md:justify-normal mx-auto md:mx-0 md:mr-auto space-x-3 md:space-x-0 md:[&>*]:mx-5">
                        <Button text="Contact me" />
                        <Button text="Get Resume" />
                    </div>

                </div>
                <div className="h-[50vh] md:h-full">
                    <img className='absolute md:h-full md:w-auto bottom-2 md:-bottom-[15%] md:-right-10' src={valet} alt="" />
                </div>
            </div>

        </section>
    );
}

export default Hero;