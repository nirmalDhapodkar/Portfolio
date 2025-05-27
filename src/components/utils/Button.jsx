const Button = (props) => {

    return (
        <>
            <button
                className="transition-all text-white hover:scale-110 duration-300 hover:text-[#00E188] text-lg font-semibold py-2 px-4 rounded-full bg-[#0d2733]/95"
            >{props.text}</button>
        </>
    )
};

export default Button