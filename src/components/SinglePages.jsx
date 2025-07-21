import Navbar from "./Navbar";
import axios from "axios";
import React, { useEffect ,useState}from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const data =useParams()
  const navigate= useNavigate()

  const[blogs,setBlogs]=useState({})
  async function fetchBlogs(){
    const response= await axios.get("https://687af3c4abb83744b7ee4a32.mockapi.io/blogs/"+data.id)
    // console.log(response.data)
    if(response.status===200){
      setBlogs(response.data)
    }
      else{
        alert("Something went wrong !!")
      }
    }

    //  setBlogs(response.data)//
    async function deleteBlogs(){
    const response= await axios.delete("https://687af3c4abb83744b7ee4a32.mockapi.io/blogs/"+data.id)
    // console.log(response.data)
    if(response.status===200){
      navigate("/")
      setBlogs(response.data)
    }
      else{
        alert("Something went wrong !!")
      }
    }
  
  useEffect(function(){ 
    fetchBlogs()
// anonymous/callback function
  },[]) 
  console.log(blogs,"This is blogs") 
  
  return(
    <>
    <Navbar/> 
    
    <div className="mt-20 ml-3">
      <img src={blogs.image} alt="" />
      <h1 className=" text-black text-3xl font-bold">{blogs.title}</h1>
      <h1>{blogs.Subtitle}</h1>
      <h1>{blogs.Description}</h1>
      <div className="flex space-x-4">
      <button onClick={deleteBlogs} className="bg-[#AE6FAF] border-black text-white  px-3 py-2 mt-4 rounded-2xl ">Delete</button>
 <Link  to={"/edit/"+ blogs.id} className="bg-[#603b61] border border-black space-x-4 text-white rounded-2xl px-3 py-2 mt-4"> Edit Me</Link>
 </div>
    </div>
    </>
  )
}

export default SinglePage