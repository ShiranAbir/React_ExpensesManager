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

    return <div className="new-expense">
        <button>Add new Expense</button>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense