import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem({title,amount,date}) {
    const [itemTitle,setTitle] = useState(title)
    const clickHandler = () => {
        setTitle('Updated!')
    }

    return( 
    <Card className='expense-item'>
        <ExpenseDate date={date}/>
        <div className='expense-item__description'>
            <h2>{itemTitle}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card>)
} 

export default ExpenseItem