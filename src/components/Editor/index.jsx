import { EditorContent, useEditor } from "@tiptap/react"
import editorConfig from "../../utils/editorConfig"
import Toolbar from "../Toolbar"
// styles
import "./styles.css"
const Editor = () => {
    const editor = useEditor(editorConfig);
    return <div className="editor">
        {/* pass the editor to the toolbar where we want to use it */}
        <Toolbar editor={editor}/>
        <div className="editor_content_container">
            <EditorContent editor={editor} />
        </div>
    </div>
}

export default Editor