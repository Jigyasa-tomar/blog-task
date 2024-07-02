import React, { useEffect, useState, createContext } from "react";
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data);
            }
            catch(error){
                console.error("Error fetching the posts", error);
            }
        }
        fetchData()
    }, []);

    // console.log(posts);

    const value = {posts, setPosts, currentPage, setCurrentPage, loading, setLoading, postsPerPage};

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );    
};


