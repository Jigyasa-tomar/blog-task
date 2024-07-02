import React,{useContext} from 'react'
import { DataContext } from '../DataContext';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

 const Pagination = () => {
    const { currentPage, setCurrentPage, posts, postsPerPage } = useContext(DataContext);
    const totalPages = Math.ceil(posts.length / postsPerPage);
  
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const renderPageNumbers = () => {
      let startPage, endPage;
      if (totalPages <= 3) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (currentPage <= 2) {
          startPage = 1;
          endPage = 3;
        } else if (currentPage + 1 >= totalPages) {
          startPage = totalPages - 2;
          endPage = totalPages;
        } else {
          startPage = currentPage - 1;
          endPage = currentPage + 1;
        }
      }
  
      return (
        <>
          {startPage > 1 && (
            <button
              onClick={() => handlePageChange(startPage - 1)}
              className="mx-1 p-2 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex justify-center items-center hover:bg-gray-300"
            >
              <FaAngleLeft className="text-gray-400" />
            </button>
          )}
          {pageNumbers.slice(startPage - 1, endPage).map(number => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`mx-1 p-2 w-8 h-8 rounded-full flex justify-center items-center ${currentPage === number ? 'bg-white text-gray-500 text-lg font-bold' : 'bg-gray-400 text-white'} ${currentPage === number ? 'scale-110' : 'hover:bg-gray-300'}`}
              style={{ transform: currentPage === number ? 'scale(1.2)' : 'scale(1)' }}
            >
              {number}
            </button>
          ))}
          {endPage < totalPages && (
            <button
              onClick={() => handlePageChange(endPage + 1)}
              className="mx-1 p-2 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex justify-center items-center hover:bg-gray-300"
            >
              <FaAngleRight className="text-gray-400" />
            </button>
          )}
        </>
      );
    };
  
    return (
      <div className="flex justify-center items-center my-4">
        {renderPageNumbers()}
      </div>
    );
  };

export default Pagination;
