/* =================================================
AUTH COMPONENT
Handles login and account creation
================================================= */

import { useState } from "react"
import { auth } from "../firebase"

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
updateProfile
} from "firebase/auth"

function Auth({ close }) {

const [mode,setMode] = useState("login")

const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirm,setConfirm] = useState("")

/* =================================================
SUBMIT
================================================= */

async function handleSubmit(e){

e.preventDefault()

try{

if(mode==="create"){

if(password!==confirm){
alert("Passwords do not match")
return
}

const userCred = await createUserWithEmailAndPassword(auth,email,password)

await updateProfile(userCred.user,{
displayName:`${firstName} ${lastName}`
})

}else{

await signInWithEmailAndPassword(auth,email,password)

}

close()

}catch(err){

alert(err.message)

}

}

/* =================================================
UI
================================================= */

return(

<div className="modal-overlay">

<div className="auth-modal">

{/* EXIT BUTTON */}

<button
className="modal-close"
onClick={close}
>
✕
</button>

<h2>

{mode==="login"
? "Login to CareerFlow"
: "Create CareerFlow Account"}

</h2>

<form onSubmit={handleSubmit}>

{/* NAME FIELDS */}

{mode==="create" && (

<>

<input
type="text"
placeholder="First Name"
value={firstName}
onChange={(e)=>setFirstName(e.target.value)}
required
/>

<input
type="text"
placeholder="Last Name"
value={lastName}
onChange={(e)=>setLastName(e.target.value)}
required
/>

</>

)}

{/* EMAIL */}

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

{/* PASSWORD */}

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

{/* CONFIRM PASSWORD */}

{mode==="create" && (

<input
type="password"
placeholder="Confirm Password"
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}
required
/>

)}

<button className="purple-btn">

{mode==="login"
? "Login"
: "Create Account"}

</button>

</form>

{/* SWITCH LOGIN / CREATE */}

<p
className="auth-switch"
onClick={()=>setMode(mode==="login" ? "create" : "login")}
>

{mode==="login"
? "Create an account"
: "Already have an account?"}

</p>

</div>

</div>

)

}

export default Auth