(function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],u=0,g=[];u<l.length;u++)i=l[u],n[i]&&g.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(g.length)g.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var h=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("photograph",{on:{upload:e.upload},model:{value:e.headImage,callback:function(t){e.headImage=t},expression:"headImage"}})],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"avatar",staticClass:"avatar",class:{complete:e.headerImage}},[a("input",{staticClass:"avatar-file",attrs:{type:"file",name:"",id:"avatar",accept:"image/*"},on:{change:e.uploadFile}}),a("label",{staticClass:"avatar-label",attrs:{for:"avatar"}})])},l=[],s=a("6f45"),c=a.n(s),h={name:"photograph",data:function(){return{headerImage:"",avatarFile:""}},methods:{uploadFile:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&(this.avatarFile=t[0],this.imgPreview(this.avatarFile),console.log("image",this.avatarFile))},imgPreview:function(e){var t,a=this;if(c.a.getData(e,function(){t=c.a.getTag(this,"Orientation")}),e&&window.FileReader&&/^image/.test(e.type)){var r=new FileReader;r.readAsDataURL(e),r.onloadend=function(){var e=this.result,r=new Image;r.src=e,this.result.length<=102400?(a.headerImage=this.result,a.postImg()):r.onload=function(){var e=a.compress(r,t);a.headerImage=e,a.postImg()}}}},postImg:function(){this.$emit("upload",this.headerImage),this.$emit("input",this.headerImage),this.$refs.avatar.style.background="url(".concat(this.headerImage,")no-repeat center/contain")},rotateImg:function(e,t,a){var r=0,n=3;if(null!=e){var o=e.height,i=e.width,l=2;null==l&&(l=r),"right"===t?(l++,l>n&&(l=r)):(l--,l<r&&(l=n));var s=90*l*Math.PI/180,c=a.getContext("2d");switch(l){case 0:a.width=i,a.height=o,c.drawImage(e,0,0);break;case 1:a.width=o,a.height=i,c.rotate(s),c.drawImage(e,0,-o);break;case 2:a.width=i,a.height=o,c.rotate(s),c.drawImage(e,-i,-o);break;case 3:a.width=o,a.height=i,c.rotate(s),c.drawImage(e,-i,0);break}}},compress:function(e,t){var a,r,n=document.createElement("canvas"),o=n.getContext("2d"),i=document.createElement("canvas"),l=i.getContext("2d"),s=e.src.length,c=e.width,h=e.height;if((a=c*h/4e6)>1?(console.log("大于400万像素"),a=Math.sqrt(a),c/=a,h/=a):a=1,n.width=c,n.height=h,o.fillStyle="#fff",o.fillRect(0,0,n.width,n.height),(r=c*h/1e6)>1){console.log("超过100W像素"),r=~~(Math.sqrt(r)+1);var u=~~(c/r),g=~~(h/r);i.width=u,i.height=g;for(var d=0;d<r;d++)for(var f=0;f<r;f++)l.drawImage(e,d*u*a,f*g*a,u*a,g*a,0,0,u,g),o.drawImage(i,d*u,f*g,u,g)}else o.drawImage(e,0,0,c,h);if(""!==t&&1!==t)switch(t){case 6:this.rotateImg(e,"left",n);break;case 8:this.rotateImg(e,"right",n);break;case 3:this.rotateImg(e,"right",n),this.rotateImg(e,"right",n);break}var p=n.toDataURL("image/jpeg",.1);return console.log("压缩前："+s),console.log("压缩后："+p.length),console.log("压缩率："+~~(100*(s-p.length)/s)+"%"),i.width=i.height=n.width=n.height=0,p}}},u=h,g=(a("936e"),a("2877")),d=Object(g["a"])(u,i,l,!1,null,"17f26737",null),f=d.exports,p={name:"app",components:{Photograph:f},data:function(){return{headImage:""}},methods:{upload:function(){console.log("上传事件")}}},m=p,v=(a("034f"),Object(g["a"])(m,n,o,!1,null,null,null)),w=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,a){},"91a9":function(e,t,a){},"936e":function(e,t,a){"use strict";var r=a("91a9"),n=a.n(r);n.a}});
//# sourceMappingURL=app.7cba74c6.js.map