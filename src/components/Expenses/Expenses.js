import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'

export default function Expenses(props) {
  const [filteredyear,setfilteredYear] = useState('2020');
  const expenseFilterHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    
    <Card className='expenses'>
    <ExpensesFilter selected={filteredyear} onExpenseFilter = {expenseFilterHandler} />
    {filteredExpenses.length === 0 ? <p> No Expenses Found </p>:
    (filteredExpenses.map((expense) => (<ExpenseItem 
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />)))
      }
    </Card>
  )
}
