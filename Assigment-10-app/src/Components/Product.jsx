import React from 'react'
import {Link} from 'react-router-dom'
import { data} from '../Data/Data'
import { Product_card } from './Product_card'

const Product = () => {
  return (
    <>
<div className='flex flex-wrap container ms-20'>
    

{
                data.map((current, i) => {

                    return <>
                       
                        
                      <div className=''>
                        <Link to={`/product/${current.id}`}>
                        <Product_card  key={i}  card_data={current}/>
                        </Link>


                      
                      
                        
                       </div>
                    </>


                })
            }

    
</div>


   







    



    
    
    
    
    </>
  )
}

export  {Product}