import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

function Expenses({items}){
    return <div className="expenses">
        <ExpenseItem title={items[0].title} date={items[0].date} amount={items[0].amount}/>
    </div>
}

export default Expenses