const Form = ({thing, handleInput, handleSubmit})=>{
   return (
        <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center"> What is your "One Thing"</h1>
      <form 
      onSubmit={handleSubmit}
      >
        <input type="text" 
          value = {thing}
          onInput={handleInput}/>
        <button className="border-white" > Submit  </button>
      </form>
      </>
      )}
      



export default Form