import React from 'react'

const Card_2 = (props) => {
    const {id,price,description,title,image}=props.filter_data_card
  return (
    <div>``
<div className="card mb-3 " style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} width="300" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{price}</h5>
        <p className="card-text">{description}</p>
        
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export  {Card_2}