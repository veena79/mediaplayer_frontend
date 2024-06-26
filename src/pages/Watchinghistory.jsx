import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteVideoFromHistoryApi, getVideoFromHistoryApi } from '../services/allApi';




function Watchinghistory() {
  const [videoHistory,setVideoHistory]=useState([])
  const [deleteStatus,setDeleteStatus]=useState([])
  const getHistory=async()=>{
    const result=await getVideoFromHistoryApi()
   
    if(result.status>=200 && result.status<300){
      setVideoHistory(result.data)
    }
  }
 
  console.log(videoHistory);
  useEffect(()=>{
    getHistory()
  },[deleteStatus])
  const deleteHistory=async(id)=>{
    const result=await deleteVideoFromHistoryApi(id)
    console.log(result);
    setDeleteStatus(result.data)
  }
  return (
    <>
      <div className='d-flex 
       mt-3  w-100 me-3 mb-3'>
        <h5 className='ms-md-5'>Watch History</h5>
        <h5 className='me-md-5 ms-auto'><Link style={{textDecoration:'none',color:'white'}} to={'/home'}><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home<FontAwesomeIcon icon={faHouse} className='ms-2' /></Link></h5>
      </div>
       <div className='row w-100 mt-5'>
        <div className="col-md-2"></div>
        <div className="col-md-8">
         {videoHistory?.length>0?
          <Table className='table table-bordered table-light'>
          <thead>
            <tr>
            <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      
          </thead>
          <tbody>
       { videoHistory?.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td>  <Link to={item?.url} target='_blank'>{item?.url}</Link></td>
          <td>{item?.timeStamp}</td>
          <td><Button className='btn btn-danger ms-auto' onClick={()=>deleteHistory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></Button></td>
        </tr>))}

        </tbody>
          </Table>
          :
          <p className='text-warning fs-5'>No watch history</p>
         }</div>
        <div className="col-md-2"></div>


       {/* <Table striped bordered hover variant="secondary">
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>LEO</td>
          <td></td>
          <td></td>
          <td><Button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
       
      </tbody>
    </Table> */}
       </div>
    </>
    
  )
}

export default Watchinghistory