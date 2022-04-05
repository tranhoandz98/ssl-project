import React from 'react'
import NotificationItem from '../../components/notification/NotificationItem'

const Message = (props) => {
    const data = [
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
        {
            variable: 'warning',
            title: "CyberSign",
            message: 'Thông báo ssl chỉ còn lại 1 ngày.',
            time: '1 ngày trước',
        },
    ]
    return (
        <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4 ">

            <div className=" rounded-md px-6 pt-6 bg-white shadow-md dark:bg-gray-800 overflow-auto max-h-[82vh]">
                <div className="flex  text-lg pb-6 font-medium">
                    <p>Thông báo gần nhất</p>
                </div>
                <div className="pb-4">
                    {data.map((item, index) =>
                        <NotificationItem
                            key={index}
                            variant={item.variant}
                            title={item.title}
                            message={item.message}
                            time={item.time}
                        />

                    )}
                </div>
            </div>

        </div>
    )
}

export default Message
