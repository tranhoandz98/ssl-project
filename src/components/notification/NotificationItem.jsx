import React from 'react'

const NotificationItem = (props) => {
    const { variant, title, message, time } = props;
    return (
        <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-200">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
            </div>
            <div className="pl-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className=" font-medium">{title}</div>
                </div>
                <p className="my-2 text-sm text-gray-500">
                    {message}
                </p>
                <p className="text-right text-gray-500 text-sm">{time}</p>
            </div>
        </div>
    )
}

export default NotificationItem
