import React, { useState } from 'react'
/* import '../component/Header' */
import Add from '../component/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import View from '../component/View'
import Category from '../component/Category'


function Home() {
  const [addStatus,setAddStatus]=useState([])
  const [dragStatus,setDragStatus]=useState(false)
  return (
    <>
   <div className='d-flex p-5 mt-2'>
      <Add setAddStatus={setAddStatus}/>
      <h5 className='ms-auto mt-2 p-4'><Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}></Link>watch history<FontAwesomeIcon icon={faClock} /></h5>
      </div>
      <div className="row w-100 p-4">
        <div className="col-md-9 ">
<h4>All videos</h4>
<View addStatus={addStatus}/>
</div>
<div className="col-md-3">
  <Category dragStatus={dragStatus} />
</div>
</div>
      
      
    </>
  )
}

export default Home