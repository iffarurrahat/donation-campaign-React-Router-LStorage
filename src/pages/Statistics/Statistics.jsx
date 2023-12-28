import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Statistics = () => {
    const cards = useLoaderData()
    const [chart, setChart] = useState(0);

    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donate-cart'))
        if (donateItems) {
            setChart(donateItems.length || 0);
        }
    }, [])

    const data = [
        { name: 'Total Donation', value: 12 - chart },
        { name: 'Your Donation', value: chart },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="md:ml-14">
                    <PieChart width={400} height={400}>
                        <Tooltip />
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className="md:flex gap-14">
                    <div className="flex items-center justify-center gap-4">
                        <p className="text-[#0B0B0B] text-lg">Your Donation</p>
                        <span className="w-24 h-3 bg-[#00C49F] rounded-sm"></span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <p className="text-[#0B0B0B] text-lg">Total Donation</p>
                        <span className="w-24 h-3 bg-[#FF444A] rounded-sm"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;