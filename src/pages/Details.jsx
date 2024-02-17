import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { deleteData, readPost } from '../utilities/crudUtility';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { EditPost } from '../components/EditPost';



export const Details = () => {
  const {user, admin} = useContext(UserContext);
  const [post, setPost] = useState(null);
  const [open, setOpen] = useState(false);
  
  let params = useParams();
  const navigate = useNavigate();
  console.log(params.id);

  useEffect(() => {
    readPost(params.id, setPost)
  },[])

  const handleDelete = async () => {
    if (user && admin) {
      await deleteData(post.id, post.photoUrl, "posts");
      navigate('/');
    }
  }

  const handleEdit = () => {
    if (user && admin) {
      setOpen(true);
    }
  }

  return (
    <>
    <div className='container details mt-3'>
      <div style={{display: 'flex', justifyContent: 'center', height: "auto", width: 'auto'}}>
      {post && <img src={post?.photoUrl} alt={post?.title} className='img-fluid' />}
      </div> 
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '2rem'}}>
      {post && parse(post?.title)}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {post && parse(post.description)}
      </div>
      {user && user.uid === "XjjdcxlAOwgfcJ2cSNpUPgNSYZM2" && <div className='d-flex justify-content-center p-3'>
        <span>
          <DeleteIcon titleAccess='Törlés' sx={{color: 'red', fontSize: '2rem', cursor: 'pointer'}} onClick={handleDelete} />
         </span>
         <span>
          <EditIcon titleAccess='Módosítás' sx={{color: 'green', fontSize: '2rem', cursor: 'pointer'}} onClick={handleEdit} />
         </span>
      </div>}
      <div className='d-flex justify-content-center'>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Vissza</button>
      </div>
    </div>
    {open && <EditPost open = {open} setOpen = {setOpen} id = {post.id} desc = {post.description} t={post.title} photo={post.photoUrl} />}
  </>
  )
}