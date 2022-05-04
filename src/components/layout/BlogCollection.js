import React from 'react';
import Blogslider from './Blogslider.js'
import './BlogCollection.css'

function BlogCollection() {
    return(
        <div className="blog_list_page">
            <p className="blog_list_header">99health Blogs</p>
            <Blogslider />
            <div className="lastLine">
                <p>You can order medicines, book doctor appointments, and lab tests along with 
                health insurance to cover your medical expenses.</p>
            </div>
        </div>
    )
}

export default BlogCollection;
