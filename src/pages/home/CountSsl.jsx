import React from 'react'

const CountSsl = () => {
    return (
        <div className="w-full mb-4 pt-6 px-6 rounded-md bg-white shadow-md dark:bg-gray-800">
            <div className="flex justify-between  items-center mb-8">
                <p className="text-lg font-medium">Domain</p>
            </div>
            <div className="flex flex-wrap justify-between items-center pb-8">
                <div className="mb-2 grow-0 shrink-0 basis-auto w-full md:w-6/12 md:px-6 lg:w-3/12 px-3 lg:px-3">
                    <div className="flex items-start">
                        <div className="p-3 inline-flex items-center justify-center rounded-full flex-shrink-0 w-14 h-14 text-green-500 bg-green-100 dark:bg-green-700 dark:text-green-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="grow ml-6">
                            <p className="font-medium mb-1 text-2xl">25</p>
                            <p className="text-gray-500">Còn hạn</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2 grow-0 shrink-0 basis-auto w-full md:w-6/12 md:px-6 lg:w-3/12 px-3 lg:px-3">
                    <div className="flex items-start">
                        <div className="p-3 inline-flex items-center justify-center rounded-full flex-shrink-0 w-14 h-14 text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                        </div>
                        <div className="grow ml-6">
                            <p className="font-medium mb-1 text-2xl">10</p>
                            <p className="text-gray-500">Hết hạn</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2 grow-0 shrink-0 basis-auto w-full md:w-6/12 md:px-6 lg:w-3/12 px-3 lg:px-3">
                    <div className="flex items-start">
                        <div className="p-3 inline-flex items-center justify-center rounded-full flex-shrink-0 w-14 h-14 text-red-500 bg-red-100 dark:bg-red-700 dark:text-red-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="grow ml-6">
                            <p className="font-medium mb-1 text-2xl">5</p>
                            <p className="text-gray-500">Chưa có ssl</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2 grow-0 shrink-0 basis-auto w-full md:w-6/12 md:px-6 lg:w-3/12 px-3 lg:px-3">
                    <div className="flex items-start">
                        <div className="p-3 inline-flex items-center justify-center rounded-full flex-shrink-0 w-14 h-14 text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div>
                        <div className="grow ml-6">
                            <p className="font-medium mb-1 text-2xl">40</p>
                            <p className="text-gray-500">Tổng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountSsl
