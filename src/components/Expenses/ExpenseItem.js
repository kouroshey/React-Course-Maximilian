import React, { useState } from 'react'

const ExpenseItem = ({title, amount, date}) => {
    
    return (
        <>
            <div className="expense-item-container py-2 px-4  bg-gray-700 mb-2  rounded-md">
                <div className="expense-item-content items-center flex justify-between">
                    <div className="expense-item-content-left flex gap-4 items-center">
                        <div className="expense-item-date flex flex-col items-center bg-blue-300 rounded-md p-1 border border-blue-500">
                            <span>{date}</span>
                            {/* <span>month</span>
                            <span>day</span> */}
                        </div>
                        <div className="expense-item-title text-2xl text-white">
                            <p>{title}</p>
                        </div>
                    </div>

                    <div className="expense-item-amount text-2xl text-white rounded-md bg-blue-500 p-2">
                        <p>{`${amount}$`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem