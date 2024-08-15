// This is the only place InitializedMDXEditor is imported directly.
import { forwardRef } from 'react'
import Editor from './InitializedMDXEditor'
import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor'
  
  // This is what is imported by other components. Pre-initialized with plugins, and ready
  // to accept other props, including a ref.
  export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => <Editor {...props} editorRef={ref} />)
  
  // TS complains without the following line
  ForwardRefEditor.displayName = 'ForwardRefEditor'