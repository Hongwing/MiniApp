"use strict";var _exports;function init(){function a(r,s,t){let u=s.project,w=u.projectpath,x=d.join(w,r);l(x,w,(y,z)=>{if(!y){z=z.reverse().map(E=>{return E.replace(/\\/g,"/")});let A=z.concat(["-js","-db"]),B=k(j,A,{cwd:u.projectpath}),C=[],D=[];B.on("close",E=>{0===E?(!q[u.hash]&&(q[u.hash]={}),q[u.hash][r]=Buffer.concat(C).toString(),t(null,q[u.hash][r])):t({httpCode:500,file:r,msg:Buffer.concat(D).toString(),type:n})}),B.stdout.on("data",E=>{C.push(E)}),B.stderr.on("data",E=>{D.push(E)})}else t({httpCode:500,file:r,msg:y.toString().replace(/\\/g,"\\\\"),type:o})})}const b="darwin"===process.platform,c=global.appConfig.isDev;require("fs");const d=require("path");require("../utils/tools.js");const e=require("url"),f=require("../utils/projectManager.js"),g=require("../../config/dirConfig.js"),h=g.WeappVendor,i=c?d.join(__dirname,"../vendor/"):h,j=b?d.join(i,"wcsc"):d.join(i,"wcsc.exe"),k=require("child_process").spawn,l=require("../commit/getallwxss.js"),m=require("mkdir-p"),{WXSS_ERROR:n,WXSS_IMPORT_ERROR:o}=require("../../config/config.js"),p=g.WeappBuildCache;m.sync(p);var q={};f.manager.on("FILE_CHANGE",(r,s,t)=>{".wxss"===d.extname(t)&&delete q[r.hash]}),_exports=(r,s,t)=>{let u=s.project,w=e.parse(r),x=w.pathname;return q[u.hash]&&q[u.hash][x]?void process.nextTick(()=>{t(null,q[u.hash][x])}):void a(x,{project:u},t)}}init(),module.exports=_exports;