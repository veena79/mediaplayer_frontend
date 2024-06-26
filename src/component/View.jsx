import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { AllCategoryApi, getVideoApi, updateCategoryApi } from '../services/allApi'
import Category from './Category'


function View({addStatus}) {
  const [videoDetails,setVideoDetails]=useState()
  const [deleteVideoApi,setDeleteVideoStatus]=useState([])
  const getVideo=async()=>{
    const result=await getVideoApi()
    setVideoDetails(result.data);
  }
  const DragOver=(e)=>{
    e.preventDefault()
  }
  const videoDrop=async(e)=>{
   const{ videoId,categoryId}=JSON.parse(e.dataTransfer.getData("dataShared"))
   console.log(videoId,categoryId);
   //get all category
   const {data}=await AllCategoryApi()
   console.log(data);
   //get selected category

  const selectedCategory=data.find((item)=>item.id==categoryId)
  console.log(selectedCategory);
  //remove video from the selected category
  const result= selectedCategory.allVideo.filter((item)=>item.id!=videoId)
 const reqBody={
  CategoryName:selectedCategory.CategoryName,
  allVideo:result,
  id:selectedCategory.id
 }

 await updateCategoryApi(categoryId,reqBody)
  }
useEffect(()=>{
  getVideo()
},[addStatus,deleteVideoApi])
console.log(videoDetails);   
  return (
    <Row className='w-100' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>  
    {
    videoDetails?.length>0?
    videoDetails?.map((item)=>(<Col  xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
      
        <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>))
      :
      <p className='text-warning fs-5'>No video yet uploaded...</p>
      }
      
     
    </Row>
    
  )
}

export default View