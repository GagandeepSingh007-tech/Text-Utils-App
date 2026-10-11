import React, {useState} from 'react';
import { Copy, Trash2, Check} from 'lucide-react';

export default function TextEditor({text, onChange, onClear}){
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if(!text) return;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return(
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 space-y-3">
            <div className="flex justify-end gap-2">
                <button onClick={handleCopy} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm flex item-center gap-1 transition">
                    {copied ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4 "/>}
                    {copied ? 'Copied' : 'Copy'}
                </button>
                <button onClick={onClear} className="px-3 py-1.5 bg-red-600 hover:bg-red-500 rounded-lg text-sm flex item=center gap-1 transition">
                    <Trash2 className="w-4 h-4" />Clear
                </button>
            </div>
            <textarea value={text} onChange={(e) => onChange(e.target.value)} placeholder="Type or paste text here..." className="w-full h-48 bg-slate-900 p-4 rounded-xl border border-slate-700 text-slate-100 focus:outline-none font-mono text-sm"></textarea>
        </div>
    );
}
