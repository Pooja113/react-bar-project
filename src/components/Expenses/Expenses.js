import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

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
        <ExpensesChart expenses = {filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}
