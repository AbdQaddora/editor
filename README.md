# **TipTap Editor**

## **Project Installation**

### **1. Create React Project**
   ```bash
   npm create vite@latest my-editor
   ```

### **2. TipTap Installations**
   ```bash
   npm install @tiptap/react @tiptap/starter-kit
   ```

### **3. Icons Package**
   ```bash
    npm i lucide-react
   ```

## **Project Structure**
```bash
my-editor/
├── src/
│   ├── components/
│   │   ├── Editor/
│   │   │   ├── index.jsx                  # Main Editor component
│   │   │   └── styles.css                  # Styles for the Editor component
│   │   ├── Toolbar/
│   │   │   ├── index.jsx                  # Toolbar with buttons for styling options
│   │   │   ├── styles.css                 # Styles for the Toolbar component
│   │   │   └── ToolbarButton/             # Folder for ToolbarButton component
│   │   │       ├── index.jsx              # ToolbarButton component
│   │   │       └── styles.css             # Styles for the ToolbarButton component
│   │   ├── EditorContent/
│   │   │   ├── index.jsx                  # Component to render TipTap editor content
│   │   │   └── styles.css                 # Styles for the EditorContent component
│   ├── App.js                               # Main app component
│   ├── main.jsx                             # Entry point for Vite
│   ├── index.css                            # Global CSS
│   └── utils/
│       └── editorConfig.js                 # Configuration for editor settings and extensions
├── package.json
└── vite.config.js
```

## **Icons to Use**

For adding text styling options in your TipTap editor, here are the **lucide-react** icons you can use:

- **Bold**: `<Bold />`
- **Italic**: `<Italic />`
- **Underline**: `<Underline />`
- **Strikethrough**: `<Strikethrough />`

![image](https://github.com/user-attachments/assets/4b600805-9e8f-4052-aabb-0b5accdc15be)
