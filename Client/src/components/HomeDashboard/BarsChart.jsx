import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [20, 10, 25, 70, 80, 80, 30];
var meses = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

var misoptions = {
    responsive: true,
    animation: false,
    plugins: {
        legend: {
            display: true
        }
    },
    scales: {
        y: {
            min: 0,
            max: 100,
            grid: {
                color: 'transparent'
            },
            ticks: { color: '#1f1f1f' },

        },
        x: {
            ticks: { color: '#1f1f1f' },
            grid: {
                color: 'transparent'
            }
        }
    }
};

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Benefits',
            data: beneficios,
            backgroundColor: '#34ccf7'
        }
    ]
};

const Bars = () => {
    return (
        <>
            <Bar data={midata} options={misoptions} />
        </>
    )
}

export default Bars;