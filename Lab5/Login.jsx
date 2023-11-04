import { useState, userState } from "react"
export default function Register() {
 const [data,setData]=useState({
 name:'',
 email:'',
 password:'',
 })
 const registerUser=(e)=>{
 e.preventDefault()
 }
 return (
 <div>
 <form onSubmit={registerUser}>
 <label>Name</label>
 <br />
 <input type="text" placeholder='enter name....'
value={data.name} onChange={(e)=>setData({...data,name: e.target.value})}/>
 <br />
 <label>Email</label>
 <br />
 <input type="email" placeholder='enter 
email....' value={data.email}
onChange={(e)=>setData({...data,email: e.target.value})}/>
 <br />
 <label>Password</label>
 <br />
 <input type="password" placeholder='enter 
password....' value={data.password}
onChange={(e)=>setData({...data,password: e.target.value})}/>
 <br />
 <button type='submit'>Submit</button>
 </form>
 </div>
 ) }
