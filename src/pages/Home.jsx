import React, { useEffect ,useState}from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/card';
import axios from 'axios';
const Home = () => {
  const[blogs,setBlogs]=useState([])
  async function fetchBlogs(){
    const response= await axios.get("https://687af3c4abb83744b7ee4a32.mockapi.io/blogs")
    // console.log(response.data)
    console.log(response)
    if(response.status===200){
      setBlogs(response.data)
    }
      else{
        alert("Error ayoooo !!")
      }
    }

    //  setBlogs(response.data)
  
  useEffect(function(){ 
    fetchBlogs()
// anonymous/callback function
  },[]) 
  console.log(blogs,"This is blogs")  //dependent Array//
  return (
   <>
      <Navbar/>
      <div className="flex justify-between flex-wrap">
        {blogs.map(function(blog){
          return(   
          <Card blog={blog}/>
          )
        
         })}
      </div>
      
   </>
  );
};
export default Home;
