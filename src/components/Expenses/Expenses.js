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
            <ExpenseItem 
                title={items[0].title} 
                date={items[0].date} 
                amount={items[0].amount}
            />
            <ExpenseItem 
                title={items[1].title} 
                date={items[1].date} 
                amount={items[1].amount}
            />
            <ExpenseItem 
                title={items[2].title} 
                date={items[2].date} 
                amount={items[2].amount}
            />
            <ExpenseItem 
                title={items[3].title} 
                date={items[3].date} 
                amount={items[3].amount}
            />
        </Card>
}

export default Expenses