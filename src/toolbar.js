/**
 * Created by yeanzhi on 17/4/13.
 */
'use strict';
import React ,{Component} from 'react';
export default class Toolbar extends Component{
    render(){
        return(
            <div className="toolbar-tab">
                <span>文件</span>
                <span>语言</span>
                <span>主题</span>
            </div>
        );
    }
}
