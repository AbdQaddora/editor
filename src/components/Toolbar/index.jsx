import { Bold, Heading1, Heading2, Heading3, Italic, Redo2, StrikethroughIcon, Underline, Undo2 } from "lucide-react"
import ToolbarButton from "./ToolbarButton"
// style
import './styles.css'

const Toolbar = ({ editor }) => {
    return (
        <div className="toolbar">
            {/* actions */}
            <ToolbarButton
                is_active={editor.isActive("undo")} // then you put the name of the extension you want to check if it is active
                icon={<Undo2 />} onClick={() => {
                    editor.chain().focus().undo().run()
                }} />
            <ToolbarButton
                is_active={editor.isActive("redo")}
                icon={<Redo2 />} onClick={() => {
                    editor.chain().focus().redo().run()
                }} />

            {/* headings */}
            <ToolbarButton
                is_active={editor.isActive("heading", { level: 1 })} // the syntax is editor.isActive("" , {level: 1}) for example
                icon={<Heading1 />} onClick={() => {
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }} />
            <ToolbarButton
                is_active={editor.isActive("heading", { level: 2 })}
                icon={<Heading2 />} onClick={() => {
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }} />
            <ToolbarButton
                is_active={editor.isActive("heading", { level: 3 })}
                icon={<Heading3 />} onClick={() => {
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }} />

            {/* text format */}

            <ToolbarButton
                is_active={editor.isActive("bold")} // the syntax is editor.isActive("extension name") for example
                icon={<Bold />} onClick={() => {
                    editor.chain().focus().toggleBold().run()
                }} />
            <ToolbarButton
                is_active={editor.isActive("italic")}
                icon={<Italic />} onClick={() => {
                    editor.chain().focus().toggleItalic().run();
                }} />
            <ToolbarButton
                is_active={editor.isActive("underline")}
                icon={<Underline />} onClick={() => {
                    editor.chain().focus().toggleUnderline().run();
                }} />
            <ToolbarButton
                is_active={editor.isActive("stricke")}
                icon={<StrikethroughIcon />} onClick={() => {
                    editor.chain().focus().toggleStrike().run()
                }} />
        </div>
    )
}

export default Toolbar