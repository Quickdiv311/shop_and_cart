import React from 'react';
import './Buttons.css';
import { useDispatch } from 'react-redux';
import { deleteItem, update } from '../../../store/Reducers/CartReducer';

const Buttons = ({item,home}) => {

    const dispatch = useDispatch();
 
    function handleChange(newQuantity)
    {
       let newItem = {...item};
       newItem.quantity = newQuantity;
       newItem.totalPrice = newQuantity * newItem.price;
       dispatch(update(newItem));
    }
  
    function deleteCartItem()
    {
       dispatch(deleteItem(item));
    }

  function handleButton(value)
  {
    if(!value)
    {
       return "quantity";
    }
    return "homeQuantity";
  }

  return (
    <div className={handleButton(home)}>
     {
        item.quantity >1 ? 
      <button className="btn btn-minus" style={{borderRadius: '10px 0 0 10px', width: '43px'}}
       onClick={() => handleChange(item.quantity-1)}><span style={{color: 'white'}}>-</span></button>
      :
      <button className="btn btn-danger" style={{borderRadius: '10px 0 0 10px'}} onClick={() => deleteCartItem()}>
      <i class="bi bi-trash3-fill"></i>
      </button>
     }
       <button className="btn btn-primary" style={{borderRadius: '0px'}}>{item.quantity}</button>

       <button className="btn btn-plus" style={{borderRadius: '0 10px 10px 0', width: '40px'}}
        onClick={() => handleChange(item.quantity+1)}><span style={{color: 'white'}}>+</span></button>
    </div>
  );
}

export default Buttons;
