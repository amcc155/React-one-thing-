import CustomButton from './CustomButton'
const OneThing = ({thing, handleCompletedThing}) =>{
    return(
        <>
 <h1 className="text-3xl sm:text-6xl font-bold text-center"> {thing}</h1>
    <CustomButton 
    text = 'mark Done'
    handleCompletedThing = {handleCompletedThing}
    />
        </>
    )
}

export default OneThing