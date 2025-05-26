const Button = (props) => {

    return (
        <>
            <button
                className="text-white hover:text-[#00E188] text-lg font-semibold py-2 px-4 rounded-full bg-[#0d2733]/95"
            >{props.text}</button>
        </>
    )
};

export default Button