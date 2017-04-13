/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import './style/index.scss';
import React,{Component} from 'react';
import Editor from './components/editor';
import Header from './header.js';

export default class CEditor extends Component{

    getCodeEditor(){
        if(this.editor){
            return this.editor.codeEditor;
        }
    }

    render(){
        return(
            <div className="ceditor-wrapper">
                <Header/>
                <div className="ceditor-body">
                    <Editor ref={editor=>this.editor = editor}/>
                </div>
            </div>
        )
    }
}
