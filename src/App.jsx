import { useState } from "react";

import CustomForm from './components/CustomForm'
import OneThing from './components/OneThing'
import JSConfetti from "js-confetti";


function getSuccessMessage(){
  const messages =['congrats', 'woo','done','ok']
  return messages[Math.floor(Math.random() * messages.length)]
}
export default function App() {

  const[thing,setThing] = useState('')
  const[isCompleted, setIsCompleted] = useState(true)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setIsCompleted(false)
    console.log(e)
  }

  const handleInput = (e) =>{
    console.log(e.target.value)
    setThing(e.target.value)
  }

  const handleCompletedThing = async (e) =>{
    e.target.setAttribute('disabled', true)
    setThing(getSuccessMessage())
    const Confetti = new JSConfetti()
    await Confetti.addConfetti()
    setIsCompleted(true)
    
  }

 return (

    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200
      dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && <CustomForm 
        thing = {thing}
        handleInput={handleInput}
        handleSubmit = {handleSubmit} />}
        {
          !isCompleted && <OneThing
          thing = {thing}
          handleCompletedThing={handleCompletedThing} />
        }
      </div>
    </main>
  );
}
