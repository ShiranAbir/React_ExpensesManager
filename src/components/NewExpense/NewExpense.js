import React, {useState} from "react"
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense({onAddExpense}){
    const [isEditing, setIsEditing] = useState(false)


    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
}

export default NewExpense