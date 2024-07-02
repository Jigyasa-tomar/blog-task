import React from 'react'
import Card from './Card'
import { useContext } from 'react'
import { DataContext } from '../DataContext'

const Cards = () => {
  const { posts, currentPage, postsPerPage, setPosts } = useContext(DataContext);
  

  const endIndex = currentPage * postsPerPage;
  const startIndex = endIndex - postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const deleteCard = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className='grid grid-cols-3 gap-3'>
        {
            currentPosts.map(post => (
                <Card key={post.id} post = {post} onDelete={deleteCard}/>
            ))
        }
      
    </div>
  )
}

export default Cards;
