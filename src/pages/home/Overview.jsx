import React from 'react'
import ChartDomain from './ChartDomain'
import CountSsl from './CountSsl'
import ViewCalendar from './ViewCalendar'

const Overview = (props) => {
    return (
        <div className="w-full lg:w-8/12 ">
            <CountSsl />
            <div className="grid lg:grid-cols-2 gap-4 ">
                <ViewCalendar />
                <ChartDomain />
            </div>

        </div>

    )
}

export default Overview
