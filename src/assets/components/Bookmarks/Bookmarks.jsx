import PropTypes from 'prop-types';
import SingleBookmark from '../SingleBookmark/SingleBookmark';

const Bookmarks = ({bookmarks}) => {

    return (
        <div className="md:w-1/3">
           
              {
                bookmarks.map(p => <SingleBookmark 
                key={p.id}
                bookmark={p}
                
                ></SingleBookmark> )
              }
            </div>
    );
};

Bookmarks.PropTypes{
    bookmarks:PropTypes.array
}
export default Bookmarks;