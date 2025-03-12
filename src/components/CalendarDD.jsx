import React, { useState } from 'react'

const CalendarDD = () => {
    const [selectedInt, setselectedInt] = useState(null)
    return (
        // use a package here, but since this is a demo, i've implemented it this way for now. 
        <div className="card my-calendar">
            <div className={`card-body px-2 ${!selectedInt && "pb-4"}`}>
                <select className="form-select" aria-label="My calendar" onChange={(e) => setselectedInt(e)}>
                    <option value="" hidden>My calendar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                {!selectedInt &&
                    <span>Upcoming Interviews</span>
                }
            </div>
        </div>
    )
}

export default CalendarDD