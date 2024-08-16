import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export default function MarkdownRenderer() {

    const markdown = '**한 보 도레미** *world*! \n  # Heading'
    return (
        <ReactMarkdown className="prose" children ={markdown} remarkPlugins={[remarkGfm]}/>
    );
}