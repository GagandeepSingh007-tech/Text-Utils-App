import React from 'react'
 export default function ToolBar({onTransform}){
    const tools = [
        {label: 'UPPERCASE', fn: (t) => t.toUpperCase()},
        {label: 'lowercase', fn: (t) => t.toLowerCase()},
        {label: 'Remove Extra Spacees', fn: (t) => t.replace(/\s+/g, ' ').trim()},
        {label: 'Reverse', fn: (t) => t.split('').reverse().join('')},
    ];

    return(
        <div className="grid grif-cols-3 sm:grid-cols-4 gap-2">
            {tools.map((tool, index) => (
                <button key={index} onClick={() => onTransform(tool.fn)} className="p-2.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 rounded-lg text-xs font-semibold transition">
                    {tool.label}
                </button>
            ))}
        </div>
    );
 }