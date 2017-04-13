/**
 * Created by yeanzhi on 17/4/13.
 */
'use strict';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';
let defaultOptions = {
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    inputStyle: 'textarea',
    viewportMargin: Infinity,
    maxHighlightLength: Infinity,
    indentUnit:4,
    autofocus:true,
    extraKeys:{}
};
export default class CodeEditor{
    constructor(dom,options){
        this.codeEditorDom = dom;
        this.options = Object.assign({},defaultOptions,options);
        this.codeMirror = CodeMirror(this.codeEditorDom,this.options);
    }
    getCodeMirror(){
        return this.codeMirror;
    }
    getCodeMirrorDom(){
        return this.codeEditorDom;
    }
}
