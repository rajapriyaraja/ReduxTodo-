import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./Slices/CustomerSlice";
import {useDispatch} from "react-redux";
export default function CustomerAdd(){
    const[input,setInput]=useState("")
    // const[customers,setCustomers]=useState([])
    const dispatch =useDispatch();
    function addCustomer(){
        if(input){
            // setCustomers((previousState)=>[...previousState,input])
            dispatch(addCustomerAction(input))
            setInput("");
        }
    }
    return (
    <>
    <div>
        <h2>Add New Customer</h2>
        <input type="text"value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>

    </div>
    {/* <CustomerView customers={customers}/> */}
    </>
    )
}