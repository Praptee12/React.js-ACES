import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Createblog = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // sent data to backened
    const response = await axios.post('https://687af3c4abb83744b7ee4a32.mockapi.io/blogs', formData);
    if (response.status === 201) {
      alert("Blog Created Successfully!");
      navigate('/');
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <><div >
      <Navbar className="bg-pink-300 "/>
      <div className="max-w-4xl mx-auto p-6 bg-[#f9f1f0] shadow-lg mt-10 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-black rounded-lg"
            required
          />
          <input 
            type="text"
            name="subtitle"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full p-3 border border-black rounded-lg"
            required
          />
          <textarea 
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-black rounded-lg"
            rows="4"
            required
          />
          <input 
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-3 border border-black rounded-lg"
          />
        </form>

        {/* Button outside of form, bottom-right aligned */}
        <div className="flex justify-end mt-6">
          <button 
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#ffa3b8] text-white rounded-full hover:bg-[#fb8da0] transition-all"
          >
            Create
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Createblog;
