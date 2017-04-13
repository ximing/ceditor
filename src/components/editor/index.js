import './index.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
export default class Editor extends Component {

    componentDidMount() {
        const codeMirrorDom = ReactDOM.findDOMNode(this.refs.editor);
        this.codeMirror = CodeMirror(codeMirrorDom, {
            mode: "javascript",
            lineNumbers: true,
            lineWrapping: true,
            inputStyle: 'textarea',
            viewportMargin: Infinity,
            maxHighlightLength: Infinity
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div ref="editor" className="content-container">
                {/*<div className="CodeMirror"></div>*/}
            </div>
        )
    }
}
