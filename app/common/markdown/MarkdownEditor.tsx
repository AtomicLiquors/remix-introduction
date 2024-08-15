
import { headingsPlugin, MDXEditor, MDXEditorMethods } from "@mdxeditor/editor";
import { useRef, useState } from "react";
import '@mdxeditor/editor/style.css'

export default function MarkdownEditor() {

    const ref = useRef<MDXEditorMethods>(null);
    const [markdown, setMarkdown] = useState('# hello world');

    return (
        <>
            <button onClick={() => ref.current?.setMarkdown('# new markdown')}>Set new markdown</button>
            <button onClick={() => console.log(ref.current?.getMarkdown())}>Get markdown</button>
            <MDXEditor className="prose" plugins={[headingsPlugin()]} ref={ref} markdown={markdown} onChange={console.log}/>
        </>
    );
}