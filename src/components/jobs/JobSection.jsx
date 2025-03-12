import React from 'react'
import { Link } from 'react-router-dom'
import JobCard from './JobCard'

const JobSection = () => {
    const job = {
        icon: "/assets/images/Frame 1321315412.png",
        title: "UI/UX Designer Teams",
        location: "Seattle, USA (Remote)",
        day: "1",
        applicants: "22",
    }
    const data = [...Array(5)].map((_, i) => ({ ...job, id: i + 1 }));

    return (
        <>
            <p className="heading-md">
                Featured Jobs
                <Link to="#" className="para active ms-3">See Featured Jobs</Link>
            </p>
            <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-2">
                {data?.map((item, i) => (
                    <div className="mb-2 px-2" key={i}>
                        <JobCard data={item} tag={"Promoted"}/>
                    </div>
                ))}
            </div>
            <hr className='my-4'/>
            <p className="heading-md">
            Recommended Jobs
                <Link to="#" className="para active ms-3">See Recommended Jobs</Link>
            </p>
            <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-2">
                {data?.map((item, i) => (
                    <div className="mb-2 px-2" key={i}>
                        <JobCard data={item}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default JobSection