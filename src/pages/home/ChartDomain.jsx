import React from 'react'
import { Chart } from 'primereact/chart';

const ChartDomain = () => {
    const chartData = {
        labels: ['Còn hạn', 'Hết hạn', 'Chưa có ssl'],
        datasets: [
            {
                data: [25, 10, 5],
                backgroundColor: [
                    "#4ade80",
                    "#fb923c",
                    "#94a3b8"
                ],
                hoverBackgroundColor: [
                    "#22c55e",
                    "#f97316",
                    "#64748b"
                ]
            }]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };


    return (
        <div className="py-6 px-6 rounded-md bg-white shadow-md dark:bg-gray-800 ">
            <div className="mb-2">
                <p className="text-lg font-medium">Chart</p>
            </div>
            <div>
                <Chart type="doughnut" data={chartData} options={lightOptions}
                />
            </div>
        </div>
    )
}

export default ChartDomain
