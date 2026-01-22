import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts';

const data = [
    { name: 'Ground Floor', value: 400, color: '#3b82f6' }, // Bright Blue
    { name: 'First Floor', value: 300, color: '#8b5cf6' },   // Violet
    { name: 'Second Floor', value: 300, color: '#14b8a6' },   // Teal
];

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 4}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                cornerRadius={4}
            />
        </g>
    );
};

export function TrafficPieChart() {
    const [activeIndex, setActiveIndex] = useState(null);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="flex flex-col items-center justify-between h-[320px] w-full p-2">

            {/* Top: Chart */}
            <div className="w-full h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                            paddingAngle={5}
                            cornerRadius={5}
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            cursor={false}
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderColor: '#e2e8f0',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                color: '#1e293b',
                                fontSize: '12px'
                            }}
                            itemStyle={{ color: '#0f172a', fontWeight: '600' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Bottom: Custom Legend (Horizontal) */}
            <div className="w-full flex flex-row justify-center gap-6 pb-2">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-2 group p-2 rounded-lg transition-colors cursor-pointer ${activeIndex === index ? 'bg-slate-50' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <div
                            className="w-3 h-3 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-gray-200 transition-all"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
