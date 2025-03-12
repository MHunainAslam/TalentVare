import React from 'react'
import Button from '../HeigherOrderComponents/Button'

const JobCard = ({ data, tag }) => {

    return (
        <div className="card">
            <div className="card-body">
                {tag && <p className='para-sm mb-1'>{tag}</p>}
                <div className="d-flex align-items-center">
                    <img src="/assets/images/Frame 1321315412.png" className='job-icon' alt="job" />
                    <p className="job-title mb-0 ms-2">
                        {data.title}
                    </p>
                </div>
                <p className='para-md mb-1 mt-2'>
                    <i className="bi bi-geo-alt me-2"></i> {data.location}
                </p>
                <p className='para-md'>
                    <i className="bi bi-clock me-2"></i>
                    {data?.day} {data?.day == 1 ? "day" : "days"} ago | <span className='clr-primary'>{data?.applicants} applicants</span>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <Button className="w-75">Apply Now</Button> <i className="bi bi-bookmark fs-5"></i>
                </div>
            </div>
        </div>
    )
}

export default JobCard