import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Benefits',
            data: beneficios,
            tension: 0.5,
            fill: true,
            borderColor: '#34ccf7',
            backgroundColor: 'transparent',
            pointRadius: 5,
            pointBorderColor: '#34ccf7',
            pointBackgroundColor: '#34ccf7',
        },
        {
            data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
            label: 'Orders',
            borderColor: '#1f1f1f',
            backgroundColor: 'transparent',
            pointRadius: 5,
            pointBorderColor: '#1f1f1f',
            pointBackgroundColor: '#1f1f1f',
        },
    ],
};

var misoptions = {
    scales: {
        y: {
            min: 0,
            ticks: { color: '#1f1f1f' },
            grid: {color: 'transparent'}
        },
        x: {
            ticks: { color: '#1f1f1f' },
            grid: {color: 'transparent'}
        },
    }
};

const LineChart = () => {
    return (
        <>
            <Line data={midata} options={misoptions} />
        </>
    )
}

export default LineChart;