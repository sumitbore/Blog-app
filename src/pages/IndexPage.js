import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  
  return (
    <>
    <section className="mx-14 mt-5  lg:mx-40">
      <h1 className="mt-28 mb-8 text-black text-5xl text-center mt-10 font-bold animate-fade-in-down ">Exploring the World, One Blog at a Time</h1>
      <h3 className="text-xl font-semibold text-center text-gray-400 ">Navigating Life's Adventures Through Words</h3>
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
      
      </div>
      </section>
    </>
  );
}
