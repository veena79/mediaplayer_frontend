import React from 'react'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../component/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
         <div className='row mt-5 w-100  align-items-center justify-content-center'>
      <div className="col-md-1"></div>
      <div className="col-md-5 ">
        <h4>Welcome to <span className='text-warning'>Media Player</span></h4>
        <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus omnis sint blanditiis ratione, eos, excepturi dolor ullam optio adipisci aliquid sapiente facilis sequi quod a eveniet perspiciatis libero suscipit similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quam soluta ab ullam alias velit veritatis, magni eos quos, ipsa aliquid. Recusandae ipsum numquam, placeat amet culpa totam tempore dolorem!</p>
     <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
      </div>
<div className="col-md-5 d-flex align-items-center justify-content-center p-5">
  <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
</div>
<div className="col-md-1"></div>
    </div>
    <div className="row w-100 mt-5 mt-3">
      <h3 className='text-center  mb-5'>Features</h3>
      <div className="col-md-1 me-md-5"></div>
      <div className="col-md-3  px-5 px-md-4 mt-3">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" className='w-100' height={'200px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-3">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" className='w-100' height={'200px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-3">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" className='w-100' height={'200px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-1"></div>
    </div>

    <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0 p-4">
      <div className="col-md-1"></div>
      <div className="col-md-10 border p-4 rounded m-md-5">
        <div className="row w-100 ">
          <div className="col-md-6">
            <h4 className='text-warning mt-2'>Simple fast and Powerful</h4>
            <p className='mt-4'><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum repudiandae adipisci harum perspiciatis ipsa sed?</p>
            <p className='mt-4'><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum repudiandae adipisci harum perspiciatis ipsa sed? </p>
            <p className='mt-4'><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum repudiandae adipisci harum perspiciatis ipsa sed? </p>

          </div>
          <div className="col-md-6">
          <iframe width="100%" height="355" src="https://www.youtube.com/embed/KUN5Uf9mObQ" title="Arabic Kuthu - Video Song | Beast | Thalapathy Vijay | Pooja Hegde | Sun Pictures | Nelson | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          </div>
        </div>

      </div>
      <div className="col-md-1"></div>
      
    </div>
    </>
  )
}

export default Landingpage