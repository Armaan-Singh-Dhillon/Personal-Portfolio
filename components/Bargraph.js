import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Javascrript', 'Html', 'CSS' ,'c/c++','React.js' ,'Node.js','Express', 'Next.js' ,'MongoDB','Java','React-Native' ];
const barData=[9.5,7,8.5,4,9.8,6,7,9.6,8,6,7.5]

export const data = {
    labels,
    datasets: [
        {
            label: 'Skills',
            data: barData.map((no)=>no),
            backgroundColor: 'rgba(177, 79, 196,0.5)',
            
        },
    
    ],
};

export function BarGraph() {
    return <Bar options={options} data={data} className='bg-white'  />;
}
