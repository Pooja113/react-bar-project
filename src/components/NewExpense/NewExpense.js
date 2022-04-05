import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEdited,setEdited] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    setEdited(false);
  }
  const setEditingHAndler = () =>{
    setEdited(true);
  }

  const stopEditingHandler = () =>{
    setEdited(false);
  }
  
  return (
    <div className='new-expense '>
      {!isEdited && <button onClick={setEditingHAndler}>Add Expense Button</button>}
      {isEdited && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel = {stopEditingHandler}/> }
    </div>
  )
}

export default NewExpense
