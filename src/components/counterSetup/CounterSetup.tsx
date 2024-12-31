import React from 'react'
import "./CounterSetup.css"
import CustomButton from '../customButton/CustomButton'
import { BUTTON_TYPES } from '../../utils/Constants'
import { increment, decrement } from '../../redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/Store'


interface CounterSetupProps {
  bookId: number;  
}

const CounterSetup: React.FC<CounterSetupProps> = ({ bookId }) => {

  const dispatch = useDispatch()
  const cartCount = useSelector((state: RootState) => state.cart.itemCounts[bookId]) || 0;


  const incrementButtonClicked = () => {
    dispatch(increment({bookId}))
  }
  const decrementButtonClicked = () => {
    dispatch(decrement({bookId})); 
  };

  return (
    <div>
        <CustomButton type={BUTTON_TYPES.DECREMENT_BUTTON} label="-" onClick={decrementButtonClicked}></CustomButton>
        <label className='count-value'>{cartCount}</label>
        <CustomButton type={BUTTON_TYPES.INCREMENT_BUTTON} label="+" onClick={incrementButtonClicked}></CustomButton>
    </div>
  )
}

export default CounterSetup
