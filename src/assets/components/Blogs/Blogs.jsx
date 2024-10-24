import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {

  const [blogs, setBlogs]=useState([]);

  useEffect(()=>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])

    return (
        <div className="md:w-2/3">
           
              {
                blogs.map(p => <Blog 
                key={p.id}
                blog={p}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog> )
              }
            </div>
       
    );
};

Blogs.propTypes ={
  handleAddToBookmark:PropTypes.func,
  handleMarkAsRead : PropTypes.func

}
export default Blogs;