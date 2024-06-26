import {  faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import VideoCard from './VideoCard';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AllCategoryApi, AvideoApi, addCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
 

function Category() {
const [show, setShow] = useState(false);
const [CategoryName,setCategoryName]=useState([])
const [allCategory,setAllCategory]=useState([])
const [addStatus,setAddStatus]=useState(false)
  const handleClose = () => {setShow(false)
    setCategoryName("")
  };
  const handleShow = () => setShow(true);
  
  const addCategory=async()=>{
   if(CategoryName){
    const reqBody={
      CategoryName,
      allVideo:[]
    }
    const result=await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAddStatus(true)
      handleClose()
      toast.success('category added successfully')

    }
    else{
      console.log(result);
    }
   }
   else{
    toast.info(`please add the category name`)
   }
  }
  const getAllCategory=async()=>{
   const result=await AllCategoryApi()
   console.log(result); 
   if(result.status>=200 && result.status<300){
    setAllCategory(result.data)
    
   }
  }  
  console.log(allCategory);   

  const DragStart=(e,videoId,categoryId)=>{
    console.log(videoId);
    console.log(categoryId);
    let dataShare={
      videoId,categoryId
    }
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
  }

  const delCategory=async(id)=>{
    const result=await deleteCategoryApi(id)
    console.log(result);
    getAllCategory()

  }
  const DragOver=(e)=>{
    e.preventDefault()

  }
  const videoDrop=async(e,categoryId)=>{
console.log(`category id is:${categoryId}`);
//access video id from view component
const videoId=e.dataTransfer.getData("videoId")
console.log("video id",videoId);   
//get video details from backend
const {data}= await AvideoApi(videoId) 
console.log(data);  
const selectedCategory=allCategory.find((item)=>item.id==categoryId)
if(selectedCategory.allVideo.find((item)=>item.id==data.id)){
  toast.warning(`video already exist in category`)
}
else{
  selectedCategory.allVideo.push(data)
}
await updateCategoryApi(categoryId,selectedCategory)
  }
  console.log(allCategory);
  useEffect(()=>{ 
    getAllCategory()
    setAddStatus(false)
  },[addStatus])
  return (
    <>
   
    <div className='w-100 mt-md-1-1 mt-4 p-4 '>
    <button onClick={handleShow} className='btn btn-warning p-3 w-100  '>
      Add New Category+
    </button>
    </div>
    {allCategory?.length>0?
    allCategory?.map((item)=>(
      <div className='mt-md-5 mt-2' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
      <div className='border border-secondary mt-3 rounded' >
      <div className='d-flex'>
        <h5>{item.CategoryName}</h5>
        <button className='btn btn-danger ms-auto' onClick={()=>delCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
  
      </div>
      <Row>
        {item?.allVideo?.length>0?
        item?.allVideo?.map((videoItem)=>(<Col sm={12} draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>
       <VideoCard displayVideo={videoItem} isPresent={true}/> 
       </Col>))
       :null
    }
       </Row>
      </div>
     </div>
    ))
    :null}
 
   
       
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faPencil} />Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  className='border rounded p-3 border-secondary'>
            <input type="text" placeholder='Category Name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)}/>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
  </>
    
  )
}

export default Category