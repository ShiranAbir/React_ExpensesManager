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
    
    return <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseList items={filteredExpenses}/>
        </Card>
}

export default Expenses