import './index.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CodeEditor from '../../lib/initEditor';

export default class Editor extends Component {

    componentDidMount() {
        const codeMirrorDom = ReactDOM.findDOMNode(this.refs.editor);
        this.codeEditor = new CodeEditor(codeMirrorDom);
        this.codeEditor.getCodeMirror().setValue(`/**
 * Created by yeanzhi on 17/4/13.
 */
'use strict';
import React ,{Component} from 'react';
export default class Toolbar extends Component{
    render(){
        return(
            <div>
            	<span>hello</span>
            </div>
        );
    }
}
`)
        // this.codeMirror.on("keyup", function (cm, event) {
        //     if (!cm.state.completionActive && /*Enables keyboard navigation in autocomplete list*/
        //         event.keyCode !== 13) {
        //         setTimeout(function() { cm.execCommand("autocomplete"); }, 20);
        //     }
        // });
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
