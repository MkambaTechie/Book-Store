import { Link } from 'react-router-dom';
// PiBookOpenTextLight 
// BiUserCircle
// AiOutlineEdit 
// BsInfoCircle
// MdOutlineAddBox
// MdOutlineDelete
import BookSingleCard from './BookSingleCard';

const BooksCard = ({books}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
        {books.map((item) => (
           <BookSingleCard key={item._id} book={item} />
        ))}
    </div>
  )
}

export default BooksCard