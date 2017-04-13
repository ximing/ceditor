'use strict';
import React,{Component} from 'react';
export default class CEditor extends Component{
    static defaultProps =  {
        rightContent:null,
        doc:{
            name:'未命名'
        }
    }

    backList = ()=>{}

    render(){
        return(
            <header className="ceditor-header">
                <div className="header-left-box list-header">
                    <div className="s-header">
                        <a className="header-back-up" onClick={this.backList}>
                            <span className="header-back-icon"/>
                        </a>
                        <span className="s-header-text">
                            <div className="span-input-wrap">
                                <input className="title-input span-input" defaultValue={'ceshi.doc'} maxLength="100"
                                       style={{
                                           display: 'none'
                                       }}/>
                                <span className="title-input-pre span-input-pre">{this.props.doc.name || '未命名'}</span>
                            </div>
                        </span>
                        <span className="s-header-time"
                              id="save-status">{this.props.doc.status}</span>
                    </div>
                </div>
                <div className="header-right-box">
                    {this.props.rightContent}
                </div>
                <div className="editor-toolbar" id="toolbar">
                </div>
            </header>
        )
    }
}
