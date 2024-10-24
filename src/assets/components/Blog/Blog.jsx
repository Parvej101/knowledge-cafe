import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title,cover, author,author_img,reading_time,posted_date, hashtags} = blog
    return (
        <div className='mb-6 space-y-4'>
            <img className='w-full' src={cover} alt={`cover photo title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p className='text-xl'>{posted_date}</p>
                    </div>
                </div>
                <div><span className='text-xs mr-4'>{reading_time} Min Read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className='text-2xl'><CiBookmarkPlus></CiBookmarkPlus></button>
                </div>
            </div>
            <h2 className='text-2xl'>Title {title}</h2>
            <p className='text-sm'>
                {hashtags.map((hash, idx) =><span key={idx}><a href="#">#{hash}</a> </span>)}
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead : PropTypes.func

}
export default Blog;