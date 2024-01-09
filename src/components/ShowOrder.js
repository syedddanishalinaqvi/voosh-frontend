import React from 'react'

const ShowOrder = ({data}) => {
    const{userId,sub_total,phoneNumber}=data;
  return (
    <div class="card container my-3">
  <div class="card-body">
    User Id: {userId}
    <br/>
    Sub Count: {sub_total}
    <br/>
    Phone Number: {phoneNumber}
    <br/>
  </div>
</div>
  )
}

export default ShowOrder
