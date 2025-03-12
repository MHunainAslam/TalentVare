import React from 'react'
import Button from './HeigherOrderComponents/Button'
import JobSection from './jobs/JobSection'

const MainScreen = () => {
    const similar = [
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Graphic Designer", value: "graphicdesigner" },
    ]
    return (
        <>
            <h1 className="heading">
                Find your Dream Job, <span>Albert!</span>
            </h1>
            <p className="para">
                Explore the latest job openings and apply for the best opportunities available today!
            </p>

            <div className="card">
                <div className="card-body d-lg-flex align-items-center justify-content-between">
                    <input className="jobsearch" placeholder='Job Title, Company, or Keywords' />
                    <div className="d-lg-flex me-3 align-items-center">
                        <div className="keyword-select px-lg-3">

                            <select className="form-select" aria-label="Select Location">
                                <option value="" hidden>Select Location</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="keyword-select px-lg-3">
                            <select className="form-select" aria-label="Job Type">
                                <option value="" hidden>Job Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <Button className="px-5 mt-lg-0 mt-2 word-wrap"> <i className="bi bi-search"></i> &nbsp; Search</Button>
                    </div>
                </div>
            </div>
            <div className="similar my-4 d-flex align-items-center h-auto">
                <p className="para mb-0 me-2">
                    Similar:
                </p>
                {similar?.map((item, i) => (
                    <Button variant="border" color="secondary" className={"px-3 mx-2"} key={i}>{item.label}</Button>
                ))}
            </div>
            <hr />
            <JobSection />
        </>
    )
}

export default MainScreen