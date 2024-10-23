import PropTypes from 'prop-types';

const SingleBookmark = ({p}) => {
    const {title} = p
    return (
        <div>
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};


SingleBookmark.propTypes {
   p : PropTypes.array
}
export default SingleBookmark;
