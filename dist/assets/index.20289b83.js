var V=Object.defineProperty,q=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var O=(h,D,r)=>D in h?V(h,D,{enumerable:!0,configurable:!0,writable:!0,value:r}):h[D]=r,f=(h,D)=>{for(var r in D||(D={}))k.call(D,r)&&O(h,r,D[r]);if(M)for(var r of M(D))H.call(D,r)&&O(h,r,D[r]);return h},v=(h,D)=>q(h,G(D));import{j as t,r as $,F as l,a as c,R as Q,C as w,b as P,c as j,I as y,B as U,D as W,T as X,d as Y,e as Z}from"./vendor.20fbde9e.js";const uu=function(){const D=document.createElement("link").relList;if(D&&D.supports&&D.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))C(E);new MutationObserver(E=>{for(const e of E)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&C(o)}).observe(document,{childList:!0,subtree:!0});function r(E){const e={};return E.integrity&&(e.integrity=E.integrity),E.referrerpolicy&&(e.referrerPolicy=E.referrerpolicy),E.crossorigin==="use-credentials"?e.credentials="include":E.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function C(E){if(E.ep)return;E.ep=!0;const e=r(E);fetch(E.href,e)}};uu();const N=1,T=2;class Du{singleDk(D,r,C,E){if(D===N)return this.cacl_\u7B49\u989D\u672C\u606F(r,C,E);if(D===T)return this.cacl_\u7B49\u989D\u672C\u91D1(r,C,E)}cacl_\u7EC4\u5408\u8D37({type:D,loan_\u5546\u8D37\u8D37\u6B3E\u91D1\u989D:r,loan_\u516C\u79EF\u91D1\u8D37\u6B3E\u91D1\u989D:C,year_\u5546\u8D37\u8D37\u6B3E\u5E74\u9650:E,year_\u516C\u79EF\u91D1\u8D37\u6B3E\u5E74\u9650:e,rate_\u5546\u8D37\u5229\u7387:o,rate_\u516C\u79EF\u91D1\u5229\u7387:s}){let F=E>e?E:e,_;if(D===N){let B=this.cacl_\u7B49\u989D\u672C\u606F(r,E,o),a=this.cacl_\u7B49\u989D\u672C\u606F(C,e,s);return B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length>a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length?_=B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.map(function(u,n){return n<a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length?{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F+a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1+a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D+a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u5269\u4F59\u8FD8\u6B3E\u989D}:{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D}}):_=a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.map(function(u,n){return n<B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length?{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F+B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1+B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D+B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u5269\u4F59\u8FD8\u6B3E\u989D}:{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D}}),{yuegong_\u6BCF\u6708\u6708\u4F9B\u989D:B.yuegong_\u6BCF\u6708\u6708\u4F9B\u989D+a.yuegong_\u6BCF\u6708\u6708\u4F9B\u989D,rate_\u603B\u5229\u606F:B.rate_\u603B\u5229\u606F+a.rate_\u603B\u5229\u606F,totalPrice_\u8FD8\u6B3E\u603B\u989D:B.totalPrice_\u8FD8\u6B3E\u603B\u989D+a.totalPrice_\u8FD8\u6B3E\u603B\u989D,monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E:_,loan_\u603B\u8D37\u6B3E\u989D:B.loan_\u603B\u8D37\u6B3E\u989D+a.loan_\u603B\u8D37\u6B3E\u989D,year_\u5E74\u4EFD:F}}else if(D===T){let B=this.cacl_\u7B49\u989D\u672C\u91D1(r,E,o),a=this.cacl_\u7B49\u989D\u672C\u91D1(C,e,s);return B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length>a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length?_=B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.map(function(u,n){return n<a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length?{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F+a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1+a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D+a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u5269\u4F59\u8FD8\u6B3E\u989D}:{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D}}):_=a.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.map(function(u,n){return n<B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E.length?{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F+B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1+B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D+B.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E[n].loan_\u5269\u4F59\u8FD8\u6B3E\u989D}:{month_\u603B\u6708\u4EFD:u.month_\u603B\u6708\u4EFD,year_\u603B\u5E74\u4EFD:u.year_\u603B\u5E74\u4EFD,month_\u6708\u4EFD:u.month_\u6708\u4EFD,interest_\u6BCF\u6708\u5229\u606F:u.interest_\u6BCF\u6708\u5229\u606F,loan_\u6BCF\u6708\u672C\u91D1:u.loan_\u6BCF\u6708\u672C\u91D1,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:u.loan_\u5269\u4F59\u8FD8\u6B3E\u989D}}),{yuegong_\u6BCF\u6708\u6708\u4F9B\u989D:B.yuegong_\u6BCF\u6708\u6708\u4F9B\u989D+a.yuegong_\u6BCF\u6708\u6708\u4F9B\u989D,rate_\u603B\u5229\u606F:B.rate_\u603B\u5229\u606F+a.rate_\u603B\u5229\u606F,totalPrice_\u8FD8\u6B3E\u603B\u989D:B.totalPrice_\u8FD8\u6B3E\u603B\u989D+a.totalPrice_\u8FD8\u6B3E\u603B\u989D,interest_\u6BCF\u6708\u6708\u4F9B\u9012\u51CF\u989D:B.interest_\u6BCF\u6708\u6708\u4F9B\u9012\u51CF\u989D+a.interest_\u6BCF\u6708\u6708\u4F9B\u9012\u51CF\u989D,loan_\u603B\u8D37\u6B3E\u989D:B.loan_\u603B\u8D37\u6B3E\u989D+a.loan_\u603B\u8D37\u6B3E\u989D,year_\u5E74\u4EFD:F,monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E:_}}}cacl_\u7B49\u989D\u672C\u606F(D,r,C){let E=r*12,e=C/12,o=D,s=o*e*Math.pow(1+e,E)/(Math.pow(1+e,E)-1),F=E*s-o,_=F+o,B=F+o,a=[],u=1;for(let n=1;n<=E;n++){let d=Math.floor((n-1)/12),m=(u+n-2)%12+1,i=o*e*(Math.pow(1+e,E)-Math.pow(1+e,n-1))/(Math.pow(1+e,E)-1),A=o*e*Math.pow(1+e,n-1)/(Math.pow(1+e,E)-1);B=B-(i+A),B<0&&(B=0),a[n-1]={month_\u603B\u6708\u4EFD:u+n-1,year_\u603B\u5E74\u4EFD:d+1,month_\u6708\u4EFD:`\u7B2C${d+1}\u5E74-\u7B2C${m}\u4E2A\u6708`,interest_\u6BCF\u6708\u5229\u606F:i,loan_\u6BCF\u6708\u672C\u91D1:A,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:B}}return{yuegong_\u6BCF\u6708\u6708\u4F9B\u989D:s,rate_\u603B\u5229\u606F:F,totalPrice_\u8FD8\u6B3E\u603B\u989D:_,monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E:a,loan_\u603B\u8D37\u6B3E\u989D:D,year_\u5E74\u4EFD:r}}cacl_\u7B49\u989D\u672C\u91D1(D,r,C){let E=r*12,e=C/12,o=D,s=0,F=o/E,_=F+(o-s)*e,B=F*e,a=(F+o*e+o/E*(1+e))/2*E-o,u=a+o,n=a+o,d=[],m=1;for(let i=1;i<=E;i++){let A=Math.floor((i-1)/12),L=(m+i-2)%12+1;s=F*(i-1);let I=F+(o-s)*e,S=(o-s)*e;n=n-I,n<0&&(n=0),d[i-1]={month_\u603B\u6708\u4EFD:m+i-1,year_\u603B\u5E74\u4EFD:A+1,month_\u6708\u4EFD:`\u7B2C${A+1}\u5E74-\u7B2C${L}\u4E2A\u6708`,interest_\u6BCF\u6708\u5229\u606F:S,loan_\u6BCF\u6708\u672C\u91D1:F,loan_\u5269\u4F59\u8FD8\u6B3E\u989D:n}}return{yuegong_\u6BCF\u6708\u6708\u4F9B\u989D:_,rate_\u603B\u5229\u606F:a,totalPrice_\u8FD8\u6B3E\u603B\u989D:u,interest_\u6BCF\u6708\u6708\u4F9B\u9012\u51CF\u989D:B,monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E:d,loan_\u603B\u8D37\u6B3E\u989D:D,year_\u5E74\u4EFD:r}}}var Eu=new Du;const p=1e4,x=1/100,K=1,tu=2,J="loan_caculator_via_yaozeyuan",eu={pay_method_\u8FD8\u6B3E\u65B9\u5F0F:K,cash_\u5F53\u524D\u5B58\u6B3E_\u4E07\u5143:10,extend_pay_count_\u9884\u8BA1\u8865\u4EA4\u7684\u9996\u4ED8\u91D1\u989D_\u4E07\u5143:5,income_\u6708\u6536\u5165_\u4E07\u5143:3,loan_\u516C\u79EF\u91D1\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143:50,loan_\u5546\u8D37\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143:150,rate_\u516C\u79EF\u91D1\u5229\u7387_\u6570\u5B57_\u767E\u5206\u6570:3.25,rate_\u5546\u8D37\u5229\u7387_\u6570\u5B57_\u767E\u5206\u6570:5.2,rate_\u9884\u671F\u6BCF\u5E74\u6295\u8D44\u6536\u76CA\u7387_\u6570\u5B57_\u767E\u5206\u6570:3,year_\u516C\u79EF\u91D1\u8D37\u6B3E\u5E74\u4EFD:25,year_\u5546\u8D37\u8D37\u6B3E\u5E74\u4EFD:25},Bu={yuegong_\u6BCF\u6708\u6708\u4F9B\u989D:0,rate_\u603B\u5229\u606F:0,totalPrice_\u8FD8\u6B3E\u603B\u989D:0,loan_\u603B\u8D37\u6B3E\u989D:0,year_\u5E74\u4EFD:0,cash_\u6700\u7EC8\u6301\u6709\u73B0\u91D1\u8D44\u4EA7\u6570_\u5143:0};var R=({cash:h=0})=>t("div",{children:h.toFixed(2)});class z{static get(D="",r=void 0){D=`${D}-${location.href}`;let C=localStorage.getItem(D);if(C===null)return r;try{return JSON.parse(C)}catch{return r}}static set(D,r){D=`${D}-${location.href}`;let C=JSON.stringify(r);try{localStorage.setItem(D,C)}catch{let e=localStorage.length;for(let o=0;o<e;o++){let s=localStorage.key(o);typeof s=="string"&&localStorage.removeItem(s)}}return!0}static remove(D){return D=`${D}-${location.href}`,localStorage.removeItem(D),!0}}var Fu=()=>{let h=z.get(J,eu),[D,r]=$.exports.useState([]),[C,E]=$.exports.useState(f({},Bu)),[e]=l.useForm(),o=()=>{let F=e.getFieldsValue();z.set(J,f({},F));let _=F.extend_pay_count_\u9884\u8BA1\u8865\u4EA4\u7684\u9996\u4ED8\u91D1\u989D_\u4E07\u5143*p,B=F.loan_\u5546\u8D37\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143*p,a=F.loan_\u516C\u79EF\u91D1\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143*p;_>B?(B=0,_=_-B):(_=0,B=B-_),_>0&&(a=a-_);let u=Eu.cacl_\u7EC4\u5408\u8D37({type:F.pay_method_\u8FD8\u6B3E\u65B9\u5F0F,loan_\u5546\u8D37\u8D37\u6B3E\u91D1\u989D:B,loan_\u516C\u79EF\u91D1\u8D37\u6B3E\u91D1\u989D:a,year_\u5546\u8D37\u8D37\u6B3E\u5E74\u9650:F.year_\u5546\u8D37\u8D37\u6B3E\u5E74\u4EFD,year_\u516C\u79EF\u91D1\u8D37\u6B3E\u5E74\u9650:F.year_\u516C\u79EF\u91D1\u8D37\u6B3E\u5E74\u4EFD,rate_\u5546\u8D37\u5229\u7387:F.rate_\u5546\u8D37\u5229\u7387_\u6570\u5B57_\u767E\u5206\u6570*x,rate_\u516C\u79EF\u91D1\u5229\u7387:F.rate_\u516C\u79EF\u91D1\u5229\u7387_\u6570\u5B57_\u767E\u5206\u6570*x}),n=u.monthdataList_\u5206\u6708\u8FD8\u6B3E\u6570\u636E,d=[],m=F.cash_\u5F53\u524D\u5B58\u6B3E_\u4E07\u5143*p,i=0,A=F.income_\u6708\u6536\u5165_\u4E07\u5143*p,L=F.rate_\u9884\u671F\u6BCF\u5E74\u6295\u8D44\u6536\u76CA\u7387_\u6570\u5B57_\u767E\u5206\u6570*x;for(let g of n)if(g.month_\u603B\u6708\u4EFD%12==1){m=m*(1+L),m=m+i,i=0,i=i+A-g.loan_\u6BCF\u6708\u672C\u91D1-g.interest_\u6BCF\u6708\u5229\u606F;let b=v(f({},g),{cash_\u5F53\u5E74\u5269\u4F59\u5F85\u6295\u8D44\u7406\u8D22\u73B0\u91D1:i,cash_\u5F53\u5E74\u7406\u8D22\u4E2D\u8D44\u4EA7:m,cash_\u5F53\u6708\u6536\u5165:A});d.push(f({},b))}else{i=i+A-g.loan_\u6BCF\u6708\u672C\u91D1-g.interest_\u6BCF\u6708\u5229\u606F;let b=v(f({},g),{cash_\u5F53\u5E74\u5269\u4F59\u5F85\u6295\u8D44\u7406\u8D22\u73B0\u91D1:i,cash_\u5F53\u5E74\u7406\u8D22\u4E2D\u8D44\u4EA7:m,cash_\u5F53\u6708\u6536\u5165:A});d.push(f({},b))}let I=d[d.length-1],S={yuegong_\u6BCF\u6708\u6708\u4F9B\u989D:u.yuegong_\u6BCF\u6708\u6708\u4F9B\u989D,rate_\u603B\u5229\u606F:u.rate_\u603B\u5229\u606F,totalPrice_\u8FD8\u6B3E\u603B\u989D:u.totalPrice_\u8FD8\u6B3E\u603B\u989D,loan_\u603B\u8D37\u6B3E\u989D:u.loan_\u603B\u8D37\u6B3E\u989D,year_\u5E74\u4EFD:u.year_\u5E74\u4EFD,cash_\u6700\u7EC8\u6301\u6709\u73B0\u91D1\u8D44\u4EA7\u6570_\u5143:I.cash_\u5F53\u5E74\u7406\u8D22\u4E2D\u8D44\u4EA7+I.cash_\u5F53\u5E74\u5269\u4F59\u5F85\u6295\u8D44\u7406\u8D22\u73B0\u91D1};E(S),r(d),console.log("config => ",F)},s=F=>t(R,{cash:F});return c("div",{children:[c(Q,{gutter:16,children:[t(w,{span:8,children:t(P,{title:"\u914D\u7F6E",bordered:!1,children:c(l,{labelCol:{span:8},wrapperCol:{span:16},form:e,initialValues:f({},h),children:[t(l.Item,{name:"pay_method_\u8FD8\u6B3E\u65B9\u5F0F",label:"\u8FD8\u6B3E\u65B9\u5F0F",children:c(j.Group,{buttonStyle:"solid",children:[t(j.Button,{value:K,children:"\u7B49\u989D\u672C\u606F"}),t(j.Button,{value:tu,children:"\u7B49\u989D\u672C\u91D1"})]})}),c(l.Item,{label:"\u5F53\u524D\u5B58\u6B3E",children:[t(l.Item,{noStyle:!0,name:"cash_\u5F53\u524D\u5B58\u6B3E_\u4E07\u5143",children:t(y,{})}),"\u4E07\u5143"]}),c(l.Item,{label:"\u9884\u8BA1\u8865\u4EA4\u7684\u9996\u4ED8\u91D1\u989D",children:[t(l.Item,{rules:[{validator:async()=>{let F=e.getFieldsValue(),_=F.cash_\u5F53\u524D\u5B58\u6B3E_\u4E07\u5143>F.extend_pay_count_\u9884\u8BA1\u8865\u4EA4\u7684\u9996\u4ED8\u91D1\u989D_\u4E07\u5143,B=F.loan_\u516C\u79EF\u91D1\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143+F.loan_\u5546\u8D37\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143>F.extend_pay_count_\u9884\u8BA1\u8865\u4EA4\u7684\u9996\u4ED8\u91D1\u989D_\u4E07\u5143;return _===!1?new Promise((a,u)=>{u(new Error("\u8865\u4EA4\u9996\u4ED8\u6B3E\u4E0D\u80FD\u9AD8\u4E8E\u603B\u5B58\u6B3E"))}):B===!1?new Promise((a,u)=>{u(new Error("\u8865\u4EA4\u9996\u4ED8\u6B3E\u4E0D\u80FD\u9AD8\u4E8E\u603B\u8D37\u6B3E"))}):!0}}],noStyle:!0,name:"extend_pay_count_\u9884\u8BA1\u8865\u4EA4\u7684\u9996\u4ED8\u91D1\u989D_\u4E07\u5143",children:t(y,{})}),"\u4E07\u5143"]}),c(l.Item,{label:"\u6708\u6536\u5165",children:[t(l.Item,{noStyle:!0,name:"income_\u6708\u6536\u5165_\u4E07\u5143",children:t(y,{})}),"\u4E07\u5143"]}),c(l.Item,{label:"\u516C\u79EF\u91D1\u8D37\u6B3E\u91D1\u989D",children:[t(l.Item,{noStyle:!0,name:"loan_\u516C\u79EF\u91D1\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143",children:t(y,{})}),"\u4E07\u5143"]}),c(l.Item,{label:"\u5546\u8D37\u8D37\u6B3E\u91D1\u989D",children:[t(l.Item,{noStyle:!0,name:"loan_\u5546\u8D37\u8D37\u6B3E\u91D1\u989D_\u4E07\u5143",children:t(y,{})}),"\u4E07\u5143"]}),c(l.Item,{label:"\u516C\u79EF\u91D1\u5229\u7387",children:[t(l.Item,{noStyle:!0,name:"rate_\u516C\u79EF\u91D1\u5229\u7387_\u6570\u5B57_\u767E\u5206\u6570",children:t(y,{})}),"%"]}),c(l.Item,{label:"\u5546\u8D37\u5229\u7387",children:[t(l.Item,{noStyle:!0,name:"rate_\u5546\u8D37\u5229\u7387_\u6570\u5B57_\u767E\u5206\u6570",children:t(y,{})}),"%"]}),c(l.Item,{label:"\u9884\u671F\u6BCF\u5E74\u6295\u8D44\u6536\u76CA\u7387",children:[t(l.Item,{noStyle:!0,name:"rate_\u9884\u671F\u6BCF\u5E74\u6295\u8D44\u6536\u76CA\u7387_\u6570\u5B57_\u767E\u5206\u6570",children:t(y,{})}),"%"]}),c(l.Item,{label:"\u516C\u79EF\u91D1\u8D37\u6B3E\u5E74\u4EFD",children:[t(l.Item,{noStyle:!0,name:"year_\u516C\u79EF\u91D1\u8D37\u6B3E\u5E74\u4EFD",children:t(y,{})}),"\u5E74"]}),c(l.Item,{label:"\u5546\u8D37\u8D37\u6B3E\u5E74\u4EFD",children:[t(l.Item,{noStyle:!0,name:"year_\u5546\u8D37\u8D37\u6B3E\u5E74\u4EFD",children:t(y,{})}),"\u5E74"]}),t(l.Item,{wrapperCol:{offset:8,span:16},children:t(U,{type:"primary",onClick:o,children:"\u5F00\u59CB\u8BA1\u7B97"})})]})})}),t(w,{span:8,children:t(P,{title:"\u6C47\u603B\u7ED3\u679C",bordered:!1,children:t("pre",{className:"pre-result",children:JSON.stringify(C,null,2)})})}),t(w,{span:8,children:t(P,{title:"\u8BA1\u7B97\u89C4\u5219",bordered:!1,children:t("pre",{className:"pre-result",children:`\u8BA1\u7B97\u65B9\u6848\u89E3\u91CA:

\u5047\u8BBE\u4EA4\u5B8C\u9996\u4ED8\u540E, \u6211\u4EEC\u5269\u4F59 a \u4E07\u5143\u73B0\u91D1, \u80CC\u8D1F b \u4E07\u5143\u5B58\u6B3E, \u8FD8\u6B3E c \u5E74, \u5229\u7387 d, \u671F\u95F4\u6BCF\u6708\u6536\u5165 e \u4E07\u5143, \u4E70\u623F\u5269\u4F59\u73B0\u91D1+\u7F34\u7EB3\u6708\u4F9B\u540E\u5269\u4F59\u73B0\u91D1\u6BCF\u5E74\u5E74\u5E95\u5168\u90E8\u62FF\u53BB\u4E70\u7406\u8D22, \u7406\u8D22\u5E74\u6536\u76CA f,

\u9700\u8981\u8003\u8651\u7684\u95EE\u9898\u4E3A: \u662F\u5426\u8981\u8865\u4EA4\u9996\u4ED8, \u4EE5\u6C42\u5B8C\u6210\u6240\u6709\u8FD8\u6B3E\u540E, \u5269\u4F59\u603B\u8D44\u91D1\u6700\u591A.

\u8FD9\u91CC\u5217\u6570\u5B66\u516C\u5F0F\u5E76\u4E0D\u76F4\u89C2, \u6240\u4EE5\u6211\u4EEC\u9009\u62E9\u66B4\u529B\u8BA1\u7B97\u6BCF\u4E00\u79CD\u53C2\u6570\u5BF9\u5E94\u7684\u5B9E\u9645\u8FD8\u6B3E\u8FC7\u7A0B&\u6700\u7EC8\u7ED3\u679C, \u65B9\u4FBF\u89C2\u5BDF\u7ED3\u8BBA

\u4E3A\u8BA1\u7B97\u65B9\u4FBF, \u5728\u63A5\u4E0B\u6765\u7684\u8BA1\u7B97\u4E2D, \u6211\u4EEC\u5047\u5B9A

- \u5B9E\u9645\u8D37\u6B3E\u53D1\u751F\u989D = \u603B\u8D37\u6B3E\u6570 - \u9884\u8BA1\u8865\u4EA4\u9996\u4ED8\u6570
  - \u9884\u8BA1\u8865\u4EA4\u9996\u4ED8\u6570\u5C0F\u4E8E\u5F53\u524D\u5B58\u6B3E\u6570, \u5C0F\u4E8E\u603B\u8D37\u6B3E\u6570
  - \u8865\u4EA4\u7684\u9996\u4ED8\u4F18\u5148\u8865\u4EA4\u5546\u8D37(\u5229\u7387\u9AD8), \u7136\u540E\u518D\u8865\u4EA4\u516C\u79EF\u91D1
  - \u4E0D\u8865\u4EA4\u9996\u4ED8\u7684\u73B0\u91D1\u5B58\u6B3E\u7528\u4E8E\u8D2D\u4E70\u5F53\u5E74\u7684\u7406\u8D22
- \u8D37\u6B3E\u6BCF\u6708\u6CF5\u7F34
  - **\u6BCF\u6708\u6536\u5165\u5FC5\u987B\u5927\u4E8E\u8D37\u6B3E\u9996\u6708\u8FD8\u6B3E\u989D**
  - \u6BCF\u6708\u6536\u5165\u51CF\u53BB\u8FD8\u6B3E\u989D\u540E, \u5269\u4F59\u8D44\u91D1\u5E76\u4E0D\u8D2D\u4E70\u7406\u8D22, \u800C\u662F\u5230\u5E74\u5E95\u7EDF\u4E00\u8D2D\u4E70\u7406\u8D22, \u65B9\u4FBF\u8BA1\u7B97\u603B\u91D1\u989D
- \u7406\u8D22\u6BCF\u5E74\u7ED3\u7B97\u4E00\u6B21
  - \u53EA\u4E70\u4E00\u5E74\u671F\u7684\u7406\u8D22
  - \u5F53\u5E74\u5E74\u5E95\u5269\u4F59\u73B0\u91D1\u5168\u989D\u8BA1\u5165\u4E0B\u4E00\u5E74\u7684\u7406\u8D22\u8D77\u59CB\u8D44\u91D1\u4E2D(\u590D\u5229\u6A21\u5F0F)
- \u4E0D\u8003\u8651\u901A\u8D27\u81A8\u80C0
  - \u901A\u8D27\u81A8\u80C0\u540E\u53EA\u5F71\u54CD\u8D27\u5E01"\u503C\u94B1\u5EA6", \u4F46\u4E0D\u5F71\u54CD\u5F85\u8FD8\u6B3E\u91D1\u989D, \u56E0\u6B64\u53EF\u4EE5\u5FFD\u7565\u8BE5\u56E0\u7D20
- \u7406\u8D22\u6536\u76CA\u7387/\u8D37\u6B3E\u5229\u7387/\u6708\u6536\u5165\u56FA\u5B9A, \u4E0D\u4F1A\u63D0\u524D\u8FD8\u6B3E
  - \u65B9\u4FBF\u8BA1\u7B97

**\u6CE8\u610F:**

\u8BE5\u6A21\u578B\u4E3A\u7406\u8BBA\u8FD0\u7B97\u7ED3\u679C, \u4EC5\u4F9B\u53C2\u8003, \u4E0D\u6784\u6210\u4EFB\u4F55\u623F\u8D37\u65B9\u6848\u8BBE\u8BA1\u63A8\u8350

\u5728\u5B9E\u9645\u5E94\u7528\u4E2D, \u9664\u4E86\u6700\u7EC8\u6536\u76CA\u7387, \u81F3\u5C11\u8FD8\u9700\u8981\u8003\u8651\u4EE5\u4E0B\u56E0\u7D20

1.  **\u6295\u8D44\u6536\u76CA\u7387\u5E76\u4E0D\u7A33\u5B9A**, \u4E2A\u522B\u5E74\u4EFD\u53EF\u80FD\u4E3A\u8D1F(\u7092\u80A1), \u751A\u81F3\u5168\u4E8F(\u4E2D\u884C\u539F\u6CB9\u5B9D, \u4E8F\u6210\u8D1F\u6570)
2.  \u957F\u65F6\u95F4\u8303\u56F4\u5185\u5BB6\u5EAD\u5BF9\u5927\u989D\u73B0\u91D1\u7684\u9700\u6C42\u51E0\u4E4E\u662F\u786E\u5B9A\u65F6\u95F4(\u7ED3\u5A5A/\u751F\u5B50/\u75BE\u75C5/\u6559\u80B2/...)
3.  \u957F\u65F6\u95F4\u8303\u56F4\u5185\u6536\u5165\u53D8\u52A8\u51E0\u4E4E\u662F\u786E\u5B9A\u65F6\u95F4(\u884C\u4E1A\u6574\u6CBB:\u4E92\u8054\u7F51\u91D1\u878D/\u5728\u7EBF\u57F9\u8BAD/\u5E74\u6EE1 35/...)`})})})]}),t(W,{}),t(X,{dataSource:D,rowKey:"month_\u603B\u6708\u4EFD",columns:[{title:"\u603B\u6708\u4EFD",dataIndex:"month_\u603B\u6708\u4EFD"},{title:"\u5E74\u4EFD",dataIndex:"year_\u603B\u5E74\u4EFD"},{title:"\u6708\u4EFD",dataIndex:"month_\u6708\u4EFD"},{title:"\u5F53\u524D\u79EF\u7D2F\u603B\u8D44\u4EA7",dataIndex:"",render:(F,_)=>t(R,{cash:_.cash_\u5F53\u5E74\u5269\u4F59\u5F85\u6295\u8D44\u7406\u8D22\u73B0\u91D1+_.cash_\u5F53\u5E74\u7406\u8D22\u4E2D\u8D44\u4EA7})},{title:"\u5F53\u5E74\u5269\u4F59\u5F85\u6295\u8D44\u7406\u8D22\u73B0\u91D1",dataIndex:"cash_\u5F53\u5E74\u5269\u4F59\u5F85\u6295\u8D44\u7406\u8D22\u73B0\u91D1",render:s},{title:"\u5F53\u5E74\u7406\u8D22\u4E2D\u8D44\u4EA7",dataIndex:"cash_\u5F53\u5E74\u7406\u8D22\u4E2D\u8D44\u4EA7",render:s},{title:"\u6BCF\u6708\u8FD8\u6B3E\u989D",dataIndex:"",render:(F,_)=>t(R,{cash:_.interest_\u6BCF\u6708\u5229\u606F+_.loan_\u6BCF\u6708\u672C\u91D1})},{title:"\u6BCF\u6708\u5229\u606F",dataIndex:"interest_\u6BCF\u6708\u5229\u606F",render:s},{title:"\u6BCF\u6708\u672C\u91D1",dataIndex:"loan_\u6BCF\u6708\u672C\u91D1",render:s},{title:"\u5269\u4F59\u8FD8\u6B3E\u989D",dataIndex:"loan_\u5269\u4F59\u8FD8\u6B3E\u989D",render:s}],pagination:{pageSize:12}})]})};Y.render(t(Z.StrictMode,{children:t(Fu,{})}),document.getElementById("root"));
