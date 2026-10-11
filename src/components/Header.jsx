import React from 'react'

export default function Header({title, subtitle}){
    return (
        <header className="border-b border-slate-800 pb-4">
            <h1 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {title}
            </h1>
            <p className="text-slate-400 text-sm mt-1"></p>
        </header>
    )
}