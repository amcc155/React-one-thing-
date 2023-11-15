const CustomButton = ({thing, handleCompletedThing, text}) =>{
    return(
        <>
        <button
        className="flex items-center space-x-3 text-2xl"
        onClick={handleCompletedThing}
        > 
            <span class = "pointer-events-none" > {text} </span>
        </button>
        </>
    )
}
export default CustomButton