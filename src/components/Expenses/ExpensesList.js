import React from 'react'

import ExpenseItem from './ExpenseItem'

const ExpenseList = props => {
    
    let expensesContent = <p>No expenses found!</p>

    if (props.filteredExpenses.length) {
        expensesContent = props.filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}   
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
           />
        ))
    }
}
export default ExpenseList