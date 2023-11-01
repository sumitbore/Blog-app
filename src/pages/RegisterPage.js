import {useState} from "react";
import { Navigate } from "react-router-dom";


export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
      return <Navigate to={'/'} />
    } else {
      alert('registration failed');
    }
  }
  return (
    <form className="register font-semibold text-3xl " onSubmit={register}>
      <h1 classname='font-semibold text-3xl '>Register</h1>
      <input type="text"
             class="bg-gray-100 rounded-lg px-5 py-2 mb-4 text-center text-sm focus:border focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-small md:w-72 lg:w-[340px]"

             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
            class="bg-gray-100 rounded-lg px-5 py-2 mb-4 text-center text-sm focus:border focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-small md:w-72 lg:w-[340px]"

             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button className="bg-purple-400 rounded-lg px-2 py-2 text-center text-sm focus:border focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]">Register</button>
    </form>
  );
}