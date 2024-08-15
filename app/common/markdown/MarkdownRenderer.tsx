import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export default function MarkdownRenderer() {

    const [markdown, setMarkDown] = useState('# type markdown here');
    return (
        <>
            <input className="border" type="textarea" onChange={(e) => setMarkDown(e.target.value)}/>
            <ReactMarkdown className="prose" children ={markdown} remarkPlugins={[remarkGfm]}/>
        </>
    );
}
