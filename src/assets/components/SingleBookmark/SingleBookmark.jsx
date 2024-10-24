import PropTypes from 'prop-types';

const SingleBookmark = ({bookmark}) => {
    const {title} =bookmark
    return (
        <div className='bg-slate-300 p-4 m-4'>
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};


SingleBookmark.propTypes ={
    SingleBookmark:PropTypes.array,
  

}

  export default SingleBookmark;