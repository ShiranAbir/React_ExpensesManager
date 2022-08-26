import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"
import React , {useState} from "react"

function Expenses({items}){
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear())
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear
    })
    return <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.map(expense => (
                <ExpenseItem
                  key={expense.id}   
                  title={expense.title} 
                  amount={expense.amount} 
                  date={expense.date}
               />
            ))}
        </Card>
}

export default Expenses