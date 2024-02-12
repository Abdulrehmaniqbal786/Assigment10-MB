import React from 'react'

const Product_card = (props) => {
    const {id,title,price,image}=props.card_data
  return (
    <div className=''>
      
    <div className=' '>
      <div className="card ps-10 text-center border" style={{width: "18rem" , height:"500px"}} >
  <img src={image} width="200" className="card-img-top   " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{price}</p>
    
  </div>
</div>
    </div>
    </div>
  )
}

export  {Product_card}