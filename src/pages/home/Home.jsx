import React from 'react'
import Message from './Message'
import Overview from './Overview'

const Home = () => {
    return (
        <>
            <h1 className="text-2xl font-bold mb-2">
                Home
            </h1>
            <div className="flex flex-wrap ">

                <Overview />
                <Message />
            </div>
        </>
    )
}

export default Home
