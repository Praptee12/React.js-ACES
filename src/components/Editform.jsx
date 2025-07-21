import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
  const { id } = useParams(); // get blog ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(`https://687af3c4abb83744b7ee4a32.mockapi.io/blogs/${id}`);
        setFormData(response.data);
      } catch (err) {
        alert("Failed to fetch blog data.");
      }
    }

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://687af3c4abb83744b7ee4a32.mockapi.io/blogs/${id}`, formData);
      if (response.status === 200) {
        alert("Blog updated successfully!");
        navigate('/');
      } else {
        alert("Update failed!");
      }
    } catch (err) {
      alert("Error updating blog!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-[#ece3f0] shadow-lg mt-10 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>

        <form onSubmit={handleUpdate} className="space-y-4">
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
          <div className="flex justify-end mt-6">
            <button 
              type="submit"
              className="px-6 py-2 bg-[#d3bbdd]  text-black rounded-full hover:bg-[#c26dbc] transition-all"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditForm;
