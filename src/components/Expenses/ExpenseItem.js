import React, { useState } from 'react'

const ExpenseItem = () => {
    
    return (
        <>
            <div className="expense-item-container py-2 px-4">
                <div className="expense-item-content items-center flex justify-between">
                    <div className="expense-item-content-left flex gap-4 items-center">
                        <div className="expense-item-date flex flex-col items-center bg-blue-300 rounded-md p-1 border border-blue-500">
                            <span>year</span>
                            <span>month</span>
                            <span>day</span>
                        </div>
                        <div className="expense-item-title text-2xl text-white">
                            <p>ths is titileasd;klfj;alwjef;ljwe;lfjo;wjef</p>
                        </div>
                    </div>

                    <div className="expense-item-amount text-2xl text-white rounded-md bg-blue-500 p-2">
                        <p>200$</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem