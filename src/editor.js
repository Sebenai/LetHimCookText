import { basicSetup, EditorView } from 'codemirror';

let editor = new EditorView({
	extensions: [basicSetup],
	parent: document.body
})
