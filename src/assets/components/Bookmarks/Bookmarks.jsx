import PropTypes from 'prop-types';
import SingleBookmark from '../SingleBookmark/SingleBookmark';

const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="md:w-1/3 bg-slate-200">

           <h2 className='text-3xl p-4 bg-white'> Reading Time :{readingTime} Min</h2>
           <h2 className='ml-4 text-3xl pt-4'> Bookmarks : {bookmarks.length}</h2>
              {
                bookmarks.map((p, idx) => <SingleBookmark 
                key={idx}
                bookmark={p}
                
                ></SingleBookmark> )
              }
            </div>
    );
};

Bookmarks.propTypes ={
  Bookmarks:PropTypes.array,
  readingTime : PropTypes.number,
  

}
export default Bookmarks;