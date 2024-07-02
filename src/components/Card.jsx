import React,{useState} from 'react'

const Card = ({post, onDelete}) => {

const [readmoreTitle, setReadmoreTitle] = useState(false);
const [readmoreBody, setReadmoreBody] = useState(false);
const title = readmoreTitle == true ? post.title : `${post.title.slice(0,40)}...`;
const body = readmoreBody == true ? post.body :`${post.body.substring(0,40)}...`;

 const handleDelete = () => {
    onDelete(post.id);
 };

  return (
    <div className='w-[230px] bg-white rounded-md p-4 gap-1.5 flex flex-col'>

        <i className="fa-solid fa-xmark text-red-400 self-end cursor-pointer"
         onClick={handleDelete}
         >
             
        </i>

        <h2 onClick={() => {
            setReadmoreTitle(!readmoreTitle);
        }}
        className='text-lg font-bold leading-5'>
            {title}
        </h2>

        <p onClick={()=>{
            setReadmoreBody(!readmoreBody);
        }}
        className='text-sm leading-5'>
            {body}
        </p>

        <p className='text-gray-400 text-xs'>
            Mon, 21 Dec 2020 14:57 GMT
        </p>

        <img src='./src/assets/img.jpg' alt='image' 
        className='w-[100%] h-[130px] rounded-md '></img>
      
    </div>
  )
}

export default Card
