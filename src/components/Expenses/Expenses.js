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
    return <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {items.map(expense => (
                <ExpenseItem 
                  title={expense.title} 
                  amount={expense.amount} 
                  date={expense.date}
               />
            ))}
        </Card>
}

export default Expenses