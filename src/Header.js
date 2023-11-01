import {Link , Navigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import {TbLogout} from "react-icons/tb"


export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);


   async function logout() {
    const response = await fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    
  }

  const username = userInfo?.username;

  return (
    <header className="  p-3 flex justify-between items-center shadow-2xl">
      <Link to="/" className="logo text-black uppercase pl-5 py-4 text-lg font-sans font-bold">My Blog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create" className=" font-bold font-sans uppercase  hover:text-white">Create</Link>
            <Link onClick={logout} to="/"><a className="flex font-medium rounded border border-solid border-purple-600 px-2 hover:bg-purple-600 hover:text-white">{username} <TbLogout className=" text-[15px] mt-[2px] mx-2"/></a></Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className=" inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-m font-bold uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900">Login</Link>
            <Link to="/register" className=" inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-m font-bold uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900 mr-10">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
