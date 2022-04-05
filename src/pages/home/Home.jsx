import React from 'react'
import Message from './Message'
import Overview from './Overview'

const Home = () => {
    return (
        <>
            <div className="flex flex-wrap ">

                <Overview />
                <Message />
            </div>
        </>
    )
}

export default Home
