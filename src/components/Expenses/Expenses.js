import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = () => {
    const [expenseDetails, setExpenseDetail] = useState([])

    const newExpense = {
        id: 0,
        title: null,
        date: null,
        amount: null
    }

    const setDetailsHandler = (e, title, amount, date) => {
        e.preventDefault()
        newExpense.title = title
        newExpense.amount = amount
        newExpense.date = date
        newExpense.id += 1

        if (title && amount && date) {
            setExpenseDetail(prevDetails => [...prevDetails, newExpense]);
            console.log(newExpense);
        }
        console.log(expenseDetails);
    }


    return (
        <>
            <div className="expenses-wrapper w-full">
                <div className="expenses-content w-7/12 flex flex-col gap-5 mx-auto mt-12">
                    <ExpensesFilter
                        setDetailsHandler={setDetailsHandler}
                    // setExpenseDetailsHandler={setExpenseDetailsHandler}
                    />
                    <div className="expense-list w-full">
                        {expenseDetails.map((item) => (
                            <ExpenseItem {...item} key={Math.random()} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expenses