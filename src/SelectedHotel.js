import React from 'react'
import {chooosedHotel} from './Recoil'
import {useRecoilValue} from 'recoil'
import {Link} from 'react-router-dom'

export default function SelectedHotel(){
  const hotel = useRecoilValue(chooosedHotel)
  console.log(hotel,"info page")
  return(
    <>
<div>
  <Link to="/">Home</Link>
<h2>{hotel.hotel_name}</h2>
  <h2>{hotel.hotel_id}</h2>
  <h2>Min Price : {hotel.min_total_price}</h2>
  <h2>BreakFast INcluded : {hotel.hotel_include_breakfast ? "Yes" : "No"}</h2>
  <img src={hotel.main_photo_url} width="250px"/>
  <button onClick={()=>alert("successfully booked")}>Book</button>


</div>
    </>
  )
}