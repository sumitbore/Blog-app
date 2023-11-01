import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";

export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form className="login font-semibold text-3xl  text-gray-700 m-2 " onSubmit={login}>
      <h1 classname="mt-6">Here you can Login </h1>
      <h2 className="text-sm font-semibold text-black  text-center mb-3 mr-20"> Let's join us </h2>
      <input type="text "
      class="bg-gray-100 rounded-lg px-5 py-2 mb-4 text-center text-sm focus:border focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-small md:w-72 lg:w-[340px]"
             placeholder="username "
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
      class="bg-gray-100 rounded-lg px-5 py-2 mb-4 text-center text-sm focus:border focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button className="bg-purple-400 rounded-lg px-2 py-2 text-center text-sm focus:border focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]">Login</button>
    </form>
  );
}