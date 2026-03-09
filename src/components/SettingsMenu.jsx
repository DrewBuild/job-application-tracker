import { auth } from "../firebase"
import { signOut,deleteUser,updateProfile } from "firebase/auth"
import { useState } from "react"

function SettingsMenu({close,user}){

const [first,setFirst] = useState("")
const [last,setLast] = useState("")

async function saveName(){

const name=`${first} ${last}`

await updateProfile(auth.currentUser,{
displayName:name
})

window.location.reload()

}

async function logout(){

await signOut(auth)

window.location.reload()

}

async function deleteAccount(){

if(confirm("Delete account permanently?")){
await deleteUser(auth.currentUser)
window.location.reload()
}

}

return(

<div className="modal-overlay">

<div className="auth-modal">

<button
className="modal-close"
onClick={close}
>
✕
</button>

<h2>Settings</h2>

<input
placeholder="First name"
value={first}
onChange={e=>setFirst(e.target.value)}
/>

<input
placeholder="Last name"
value={last}
onChange={e=>setLast(e.target.value)}
/>

<button
className="purple-btn"
onClick={saveName}
>
Save Name
</button>

<button
className="purple-btn"
onClick={logout}
>
Logout
</button>

<button
className="delete-btn"
onClick={deleteAccount}
>
Delete Account
</button>

</div>

</div>

)

}

export default SettingsMenu