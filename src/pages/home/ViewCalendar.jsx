import { addLocale } from 'primereact/api';
import React from 'react';
import Calendar from "react-widgets/Calendar";
import "react-widgets/styles.css";

const ViewCalendar = () => {
    addLocale('vi', {
        firstDayOfWeek: 1,
        dayNames: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
        dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        monthNamesShort: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        today: 'Hôm nay',
        clear: 'Xóa',
        weekHeader: 'Tuần'
    });

    return (
        <div className=" py-6 px-6 rounded-xl bg-white shadow-md dark:bg-gray-800 overflow-auto ">
            <div className="mb-2">
                <p className="text-xl font-bold">Lịch</p>
            </div>
            <div className="">
                <Calendar
                    defaultValue={new Date()}
                />
            </div>
        </div>
    )
}

export default ViewCalendar
