import React from 'react'
import CalendarDD from './CalendarDD'

const Sidebar = () => {
    const profilecount = [
        { label: "Profile Visitors", value: "140" },
        { label: "Resume Viewers", value: "20" },
        { label: "My Jobs", value: "88" }
    ]
    return (
        <div className='sidebar'>
            <div className="card profile-card">
                <img src="/assets/images/Rectangle 18369.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">

                    <img src="/assets/images/Oval.png" className="profileimg" alt="..." />
                    <p className="user-name text-center mb-1 mt-3">
                        Albert Flores
                    </p>
                    <p className='user-bio text-center mb-0'>
                        Senior Product Designer  |  UI/UX <br /> Designer  |  Graphic Designer  |  Web...
                    </p>
                    <p className='user-location'>Clinton, Maryland</p>
                </div>
            </div>
            <div className="card profile-count my-3">
                <ul className='px-3 py-2 m-0'>
                    {profilecount?.map((item, i) => (
                        <li key={i}>
                            {item.label}
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <CalendarDD />
        </div>
    )
}

export default Sidebar