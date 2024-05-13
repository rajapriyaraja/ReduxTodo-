import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { deleteCustomer } from './Slices/CustomerSlice';
import { UseDispatch } from 'react-redux';
export default function CustomerView()  {

  const customers=useSelector((state)=>state.customers)
  const dispatch=useDispatch();

  function deleteHandler(index){
    dispatch(deleteCustomer(index));
  }
  return (
    <div>
        <h2>Customer List</h2>
        <ul style={{listStyle:'none'}}>
            {
            customers.map((customer, index)=><li>{customer}<button onClick={()=>deleteHandler(index)}>Delete</button></li>)
            }
        </ul>
    </div>
  )
}