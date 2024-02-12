import React from 'react'
import {useParams} from 'react-router-dom'
import { data } from '../Data/Data'
import { Card_2 } from './Card_2'
import {Link} from 'react-router-dom'

const Product_Details = () => {
    const params = useParams()
    const  filtered_Data = data.filter((pro)=>{
        return pro.id == params.id


    })

    console.log(filtered_Data);
  return (
    <div className='container ms-20' >
        {
            filtered_Data.map((curr,index)=>{
                return <div>
                <Card_2 filter_data_card={curr}/>
               <Link to={`/`}><button class="ms-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Go Back
</button></Link>
                </div>

            })
        }
       


        
    </div>
  )
}

export  {Product_Details}