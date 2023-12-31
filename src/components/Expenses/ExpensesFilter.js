import React, { useRef, useState } from 'react'

const ExpensesFilter = ({setDetailsHandler}) => {
    
    const [title, setTitle] = useState(null)
    const [date, setDate] = useState(null)
    const [amount, setAmount] = useState(null)
    const titleRef = useRef()
    const amountRef = useRef()
    const dateRef = useRef()

    
    return (
        <>
            <div className="expenses-filter-container w-full bg-blue-200 p-6 rounded-md">
                <form onSubmit={(e) => setDetailsHandler(e, title, amount, date)} className="expenses-filter-content flex flex-col gap-6 items-center">
                    <div className="expenses-filter-section flex justify-evenly w-full">
                        <div className="expenses-filter-title flex flex-col">
                            <label htmlFor="filter-title">Title</label>
                            <input ref={titleRef} onChange={e => setTitle(e.target.value)} type="text" id='filter-title' placeholder='please type the title' className='p-2 rounded-sm ' />
                        </div>
                        <div className="expenses-filter-date flex flex-col">
                            <label htmlFor="filter-date">Date</label>
                            <input ref={dateRef} onChange={e => setDate(e.target.value)} type="date" id='filter-dat' placeholder='please select date' className='p-2 rounded-sm ' />
                        </div>
                        <div className="expenses-filter-amount flex flex-col">
                            <label htmlFor="filter-title">Amount</label>
                            <input ref={amountRef} onChange={e => setAmount(e.target.value)} type="text" id='filter-title' placeholder='please type the amount' className='p-2 rounded-sm ' />
                        </div>
                    </div>
                    <input type="submit" value='Add Expense' className='expenses-filter-submit p-2 rounded-sm bg-gray-700 text-blue-200 w-3/12' />
                </form>
            </div>
        </>
    )
}

export default ExpensesFilter