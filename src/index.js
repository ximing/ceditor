/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import './style/index.scss';
import React,{Component} from 'react';
import Editor from './components/editor';
import Header from './header.js';

export default class CEditor extends Component{
    render(){
        return(
            <div className="ceditor-wrapper">
                <Header/>
                <div className="ceditor-body">
                    <Editor/>
                </div>
            </div>
        )
    }
}