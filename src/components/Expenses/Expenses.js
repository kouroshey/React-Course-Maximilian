import React from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = () => {
    return (
        <>
            <div className="expenses-wrapper w-full">
                <div className="expenses-content w-7/12 flex flex-col gap-5 mx-auto mt-12">
                    <ExpensesFilter />
                    <div className="expense-list w-full bg-gray-700 rounded-md">
                        <ExpenseItem/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expenses