import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookModal from './BookModal';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// PiBookOpenTextLight 
// BiUserCircle
// BiShow
// AiOutlineEdit 
// BsInfoCircle
// MdOutlineAddBox
// MdOutlineDelete

const BookSingleCard = ({book}) => {
    const [showModal, setShowModal] = useState(false);


  return (
     <div key={book._id} className='border-2 border-gray-500 rounded-lg shadow-lg px-6 py-4 m-4 relative flex flex-col justify-between hover:shadow-xl transition-shadow duration-300'>
    {/* Publish Year Badge */}
    <span className='absolute top-2 right-2 px-4 py-1 bg-sky-200 text-sky-800 rounded-full text-sm font-semibold'>
        {book.publishYear}
    </span>
    
    {/* Book ID */}
    <h4 className='my-2 text-gray-500 text-xs'>{book._id}</h4>

    {/* Book Title */}
    <div className='flex items-center gap-x-2 my-1'>
        <PiBookOpenTextLight className='text-sky-500 text-3xl' />
        <h2 className='text-lg font-bold text-gray-800'>{book.title}</h2>
    </div>

    {/* Author */}
    <div className='flex items-center gap-x-2 my-1'>
        <BiUserCircle className='text-red-500 text-3xl' />
        <h2 className='text-md text-gray-600 font-medium'>{book.author}</h2>
    </div>
    
    {/* Action Buttons */}
    <div className='flex justify-end items-center gap-x-4 mt-4'>
        {/* Show Modal Button */}
        <BiShow 
            className='text-2xl text-blue-600 hover:text-black cursor-pointer' 
            onClick={() => setShowModal(true)} 
        />
        
        {/* Details Link */}
        <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className='text-2xl text-green-600 hover:text-black' />
        </Link>
        
        {/* Edit Link */}
        <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        
        {/* Delete Link */}
        <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
    </div>

    {/* Book Modal (Fixed Conditional Rendering) */}
    {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
    )}
</div>
  )
}

export default BookSingleCard