import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { readDatas } from '../utilities/crudUtility';
import { PostCard } from './PostCard';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  readDatas(setPosts, "posts");
},[])
posts.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));

console.log(posts);

return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 
    2, justifyContent: 'center'}}>
      {posts.length == 0 && <div>Nincs találat.</div> }
      
      {posts.map(obj => <PostCard key={obj.id} {...obj} />)}
    </div>
  )
}
