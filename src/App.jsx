import React, {useState} from 'react';
import Header from './components/Header';
import StartsGrid from './components/StartsGrid';
import TextEditor from './components/TextEditor';
import Toolbar from './components/Toolbar';

export default function App() {
  const [text, setText] = useState('');
  const handleTransform = (transformFn) => {
    setText((prevText) => transformFn(prevText));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header title="Text Utilities Studio" subtitle="Analyze, manipulate, format and transform your text seamlessly."/>
        <StartsGrid text={text}/>
        <TextEditor text={text} onChange={(newText) => setText(newText)} onClear={() => setText('')} />
        <Toolbar onTransform ={handleTransform}/>
      </div>
    </div>
  );
}