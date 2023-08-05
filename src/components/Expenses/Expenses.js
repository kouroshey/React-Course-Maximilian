import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = () => {
    const [expenseDetails, setExpenseDetail] = useState([])

    const newExpense = {
        title: null,
        date: null,
        amount: null
    }

const setDetailsHandler = (e, title, amount, date) => {
        e.preventDefault()
        newExpense.title = title
        newExpense.amount = amount
        newExpense.date = date

        if (title && amount && date) {
            setExpenseDetail(prev => prev.push(newExpense))
            console.log(newExpense);
            console.log(expenseDetails);
        }
    }


    return (
        <>
            <div className="expenses-wrapper w-full">
                <div className="expenses-content w-7/12 flex flex-col gap-5 mx-auto mt-12">
                    <ExpensesFilter
                        setDetailsHandler={setDetailsHandler}
                    // setExpenseDetailsHandler={setExpenseDetailsHandler}
                    />
                    <div className="expense-list w-full bg-gray-700 rounded-md">
                        {/* {expenseDetails.map(item => (
                            <ExpenseItem {...item} />
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expenses