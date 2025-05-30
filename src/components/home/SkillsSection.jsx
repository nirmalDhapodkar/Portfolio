import { useDarkMode } from "../../context/DarkModeContext";


const SkillsSection = () =>
{
    const { isDark } = useDarkMode();
    return (
        <section className="w-full h-[100vh] p-12">
            <div className="w-full h-full border-2 rounded-2xl border-[#00E087]  md:bg-[#344b3d]/10 md:backdrop-blur-[6px] md:shadow-lg shadow-lime-950 md:outline-2 p-6">
                <h1 className={`${isDark?'text-[#00E087]':'text-white text-shadow-lg'} w-full text-center text-2xl md:text-3xl font-extrabold underline`}>SKills Aquired</h1>
            </div>
        </section>
    );
}

export default SkillsSection;