import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  //create a state to holddata from input
  const [video,setVideo]=useState({
    caption:"",
    image:"",
    url:""
  })
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setVideo({
        caption:"",
    image:"",
    url:""
      })
    }
    const handleShow = () => setShow(true);
     

     const validateLink=(e)=>{
    console.log(e.target.value);
     const link=e.target.value
    if(link.endsWith('?feature=shared')){
      const yKey=link.slice(-26,-15)
      console.log(yKey);
      let embedLink=`https://www.youtube.com/embed/${yKey}`
      setVideo({...video,url:embedLink})
    }
    else if(link.startsWith('https://youtu.be')){
      const yKey=link.slice(17,28)
      console.log(yKey);
      let embedLink=`https://www.youtube.com/embed/${yKey}`
      setVideo({...video,url:embedLink})
    }
    else{
      const yKey=link.slice(-11)
      console.log(yKey);
      let embedLink=`https://www.youtube.com/embed/${yKey}`
      setVideo({...video,url:embedLink})
    }
  }
  console.log(video); 
   
   const handleUpload=async(e)=>{
    e.preventDefault()
    const {caption,image,url}=video
    if(!caption||!image||!url){
      toast.info('pleasee fill the form completely')
    }
   else{
        const result= await addVideoApi(video)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('video uploaded successfully')
          setAddStatus(result.data)
          handleClose()
        }
        else{
          toast.error('something went wrong')
          handleClose
        }
   }
   }

   //https://www.youtube.com/watch?v=tOM-nWPcR4U
   
//https://youtu.be/tOM-nWPcR4U?si=JxaNoNtycKZP04RI

   //https://www.youtube.com/embed/tOM-nWPcR4U


   //<iframe width="853" height="480" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload new video</h5>
        <button className='btn mb-1' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl'/></button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the folowing details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text"  placeholder='Video caption 'className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text"  placeholder='Video image 'className='form-control mt-3'onChange={(e)=>setVideo({...video,image:e.target.value})}/>
            <input type="text"  placeholder='Video url 'className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Add