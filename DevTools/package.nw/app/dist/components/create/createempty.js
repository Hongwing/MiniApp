'use strict';var _exports;function init(){const a=require('../../lib/react.js');require('../../cssStr/cssStr.js');const b=a.createClass({displayName:'Createempty',goMain:function(){this.props.goMain()},render:function(){return a.createElement('div',null,a.createElement('div',{className:'create-select-box',onClick:this.props.showProjectList},a.createElement('div',{className:'create-select-content'},a.createElement('h2',{className:'create-select-title'},'\u672C\u5730\u5C0F\u7A0B\u5E8F\u9879\u76EE'),a.createElement('p',{className:'create-select-desc'},'\u7528\u4E8E\u8C03\u8BD5\u672C\u5730\u5C0F\u7A0B\u5E8F\u9879\u76EE'))),a.createElement('div',{className:'create-select-box',onClick:this.goMain},a.createElement('div',{className:'create-select-content'},a.createElement('h2',{className:'create-select-title'},'\u516C\u4F17\u53F7\u7F51\u9875\u5F00\u53D1'),a.createElement('p',{className:'create-select-desc'},'\u7528\u4E8E\u516C\u4F17\u53F7\u7F51\u9875\u5F00\u53D1'))))}});_exports=b}init(),module.exports=_exports;