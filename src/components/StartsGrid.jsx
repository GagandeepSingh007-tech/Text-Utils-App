import React from 'react'

export default function StartsGrid({ text = ''}){
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const charCount = text.length;

    return(
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700/50">
                <span className="block text-2xl font-bold text-indigo-400">{wordCount}</span>
                <span className="text-xs text-slate-400 font-semibold uppercase">Words</span>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700/50">
                <span className="block text-2xl font-bold text-indigo-400">{charCount}</span>
                <span className="text-xs text-slate-400 font-semibold uppercase">Characters</span>
            </div>
        </div>
    );
}