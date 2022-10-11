import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"
import React , {useState} from "react"
import ExpenseList from "./ExpensesList"

function Expenses({items}){
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear())
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear
    })

    // let expensesContent = <p>No expenses found!</p>

    // if (filteredExpenses.length) {
    //     expensesContent = filteredExpenses.map(expense => (
    //         <ExpenseItem
    //           key={expense.id}   
    //           title={expense.title} 
    //           amount={expense.amount} 
    //           date={expense.date}
    //        />
    //     ))
    // }
    return <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseList items={filteredExpenses}/>
        </Card>
}

export default Expenses