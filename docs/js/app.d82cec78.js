(function(){"use strict";var e={7460:function(e,t,n){var o=n(9242),i=n(2483),r=n(3396);function a(e,t,n,o,i,a){const l=(0,r.up)("Base64TextVue");return(0,r.wg)(),(0,r.j4)(l)}var l=n(7139);const s=e=>((0,r.dD)("data-v-6a53afc0"),e=e(),(0,r.Cn)(),e),c={class:"container mt-3"},u={class:"text-center"},p={class:"form-group"},d={for:"input"},m=["title","placeholder"],f={class:"form-group"},b={class:"text-center"},v={class:"btn-group me-2",role:"group","aria-label":"Acciones principales"},g=["title"],w=["title"],y={class:"form-group"},h={class:"text-center"},F={class:"btn-group me-2",role:"group","aria-label":"Acciones secundarias"},B=s((()=>(0,r._)("i",{class:"bi bi-arrow-down-up"},null,-1))),_=s((()=>(0,r._)("i",{class:"bi bi-arrow-repeat"},null,-1))),x={class:"form-group"},T={for:"result"},k=["title","placeholder"],O={class:"form-group"},C={class:"text-center"},P={class:"btn-group me-2",role:"group","aria-label":"Acciones finales"},z=["title"],j=s((()=>(0,r._)("i",{class:"bi bi-clipboard-check"},null,-1))),D=["title"],U=s((()=>(0,r._)("i",{class:"bi bi-cloud-download"},null,-1))),A={key:0,class:"form-group"};function V(e,t,n,i,a,s){const V=(0,r.up)("PdfB64Preview"),S=(0,r.up)("ImgB64Preview"),I=(0,r.up)("VideoB64Preview");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("h1",null,(0,l.zw)(a.componentName),1),(0,r._)("p",u,(0,l.zw)(a.componentDescription),1),(0,r._)("div",p,[(0,r._)("label",d,(0,l.zw)(a.labels.inputText),1),(0,r.wy)((0,r._)("textarea",{class:"form-control",id:"input",rows:"3",title:a.labels.inputText,placeholder:a.labels.inputText,"onUpdate:modelValue":t[0]||(t[0]=e=>a.inputForm=e)},null,8,m),[[o.nr,a.inputForm]])]),(0,r._)("div",f,[(0,r._)("div",b,[(0,r._)("div",v,[(0,r._)("button",{type:"button",class:"btn btn-primary",id:"encode-btn",title:a.buttons.encodeBtn,onClick:t[1]||(t[1]=(...e)=>s.encodeText&&s.encodeText(...e))},(0,l.zw)(a.buttons.encodeBtn),9,g),(0,r._)("button",{type:"button",class:"btn btn-info",id:"decode-btn",title:a.buttons.decodeBtn,onClick:t[2]||(t[2]=(...e)=>s.decodeText&&s.decodeText(...e))},(0,l.zw)(a.buttons.decodeBtn),9,w)])])]),(0,r._)("div",y,[(0,r._)("div",h,[(0,r._)("div",F,[(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:t[3]||(t[3]=(...e)=>s.swapText&&s.swapText(...e))},[B,(0,r.Uk)(" "+(0,l.zw)(a.buttons.swapBtn),1)]),(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:t[4]||(t[4]=(...e)=>s.cleanAll&&s.cleanAll(...e))},[_,(0,r.Uk)(" "+(0,l.zw)(a.buttons.cleanBtn),1)])])])]),(0,r._)("div",x,[(0,r._)("label",T,(0,l.zw)(a.labels.outputText),1),(0,r.wy)((0,r._)("textarea",{class:"form-control",id:"result",rows:"3",readonly:"",title:a.labels.outputText,placeholder:a.labels.outputText,"onUpdate:modelValue":t[5]||(t[5]=e=>a.outputForm=e)},null,8,k),[[o.nr,a.outputForm]])]),(0,r._)("div",O,[(0,r._)("div",C,[(0,r._)("div",P,[(0,r._)("button",{type:"button",class:"btn btn-success",id:"copy-btn",title:a.buttons.copyBtn,onClick:t[6]||(t[6]=(...e)=>s.copyOutput&&s.copyOutput(...e))},[j,(0,r.Uk)(" "+(0,l.zw)(a.buttons.copyBtn),1)],8,z),(0,r._)("button",{type:"button",class:"btn btn-info",id:"download",title:a.buttons.downloadBtn,onClick:t[7]||(t[7]=(...e)=>s.downloadOutput&&s.downloadOutput(...e))},[U,(0,r.Uk)(" "+(0,l.zw)(a.buttons.downloadBtn),1)],8,D)])])]),s.isPreviewFile?((0,r.wg)(),(0,r.iD)("div",A,[s.isPdfFile?((0,r.wg)(),(0,r.j4)(V,{key:0,fileBase64:a.inputForm},null,8,["fileBase64"])):(0,r.kq)("",!0),s.isImgFile?((0,r.wg)(),(0,r.j4)(S,{key:1,fileBase64:a.inputForm,fileType:a.outputFileType},null,8,["fileBase64","fileType"])):(0,r.kq)("",!0),s.isVideoFile?((0,r.wg)(),(0,r.j4)(I,{key:2,fileBase64:a.inputForm,fileType:a.outputFileType},null,8,["fileBase64","fileType"])):(0,r.kq)("",!0)])):(0,r.kq)("",!0)])}n(2801);const S={class:"text-center"},I=["src"];function q(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("img",{src:a.fileUrl,title:"Archivo Img B64",class:"img-thumbnail"},null,8,I)])}var Z={name:"ImgB64Preview",props:{fileBase64:{type:String,required:!0},fileType:{type:String,required:!0}},computed:{fileUrl(){return`data:${this.fileType};base64,${this.fileBase64}`}}},N=n(89);const $=(0,N.Z)(Z,[["render",q]]);var E=$;const M={class:"ratio ratio-16x9"},R=["src"];function L(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("iframe",{src:a.fileUrl,title:"Archivo PDF B64",allowfullscreen:""},null,8,R)])}var H={name:"PdfB64Preview",props:{fileBase64:{type:String,required:!0}},computed:{fileUrl(){return`data:application/pdf;base64,${this.fileBase64}`}}};const W=(0,N.Z)(H,[["render",L]]);var Y=W;const K={class:"ratio ratio-16x9"},G={controls:""},J=["type","src"];function Q(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",K,[(0,r._)("video",G,[(0,r._)("source",{type:n.fileType,src:a.fileUrl},null,8,J)])])}var X={name:"VideoB64Preview",props:{fileBase64:{type:String,required:!0},fileType:{type:String,required:!0}},computed:{fileUrl(){return`data:${this.fileType};base64,${this.fileBase64}`}}};const ee=(0,N.Z)(X,[["render",Q]]);var te=ee,ne={name:"Base64Text",components:{PdfB64Preview:Y,ImgB64Preview:E,VideoB64Preview:te},data(){return{componentName:"Base64 Encoder & Decoder",componentDescription:"Con esta herramienta puedes codificar cualquier texto en formato Base64 y decodificar cualquier texto codificado en Base64.",labels:{inputText:"Texto a codificar / decodificar:",outputText:"Resultado:"},buttons:{encodeBtn:"Codificar",decodeBtn:"Decodificar",swapBtn:"Intercambiar resultado",copyBtn:"Copiar al portapapeles",downloadBtn:"Descargar",cleanBtn:"Limpiar entrada"},inputForm:"",outputForm:"",outputFileType:""}},mounted(){console.log("vuejs mounted")},computed:{isPreviewFile(){return this.isPdfFile||this.isImgFile||this.isVideoFile},isPdfFile(){return"application/pdf"==this.outputFileType},isImgFile(){return["image/gif","image/jpeg","image/png"].indexOf(this.outputFileType)>=0},isVideoFile(){return["video/mp4","video/webm"].indexOf(this.outputFileType)>=0}},methods:{encodeText(){this.outputForm=window.btoa(this.inputForm)},decodeText(){this.outputForm=window.atob(this.inputForm);let e=this.detectFileType(this.outputForm);this.outputFileType="application/octet-stream"==e.mimeType?"":e.mimeType},swapText(){let e=this.inputForm;this.inputForm=this.outputForm,this.outputForm=e},cleanAll(){this.inputForm="",this.outputForm=""},copyOutput(){const e=document.getElementById("result");e.select(),document.execCommand("copy")},downloadOutput(){const e=new Uint8Array(this.outputForm.length);for(let a=0;a<this.outputForm.length;a++)e[a]=this.outputForm.charCodeAt(a);let t=this.detectFileType(this.outputForm);this.outputFileType="application/octet-stream"==t.mimeType?"":t.mimeType;let n=t.mimeType,o="."+t.type;const i=new Blob([e],{type:n}),r=document.createElement("a");r.href=window.URL.createObjectURL(i),r.download=`file${o}`,r.click()},detectFileType(e){const t={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70,56],pdf:[37,80,68,70],mp3:[73,68,51],m4v:[0,0,0,24,102,116,121,112,109,112,52,50],mp4:[0,0,0,32,102,116,121,112],webm:[26,69,223,163],doc:[208,207,17,224,161,177,26,225],docx:[80,75,3,4,20,0,6,0],xlsx:[80,75,3,4,20,0,2,0],pptx:[80,75,3,4,20,0,6,0],zip:[80,75,3,4]},n={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",pdf:"application/pdf",mp3:"audio/mpeg",m4v:"video/mp4",mp4:"video/mp4",webm:"video/webm",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",zip:"application/zip"};for(const[o,i]of Object.entries(t))if(e.startsWith(String.fromCharCode(...i)))return{type:o,mimeType:n[o]};return{type:"bin",mimeType:"application/octet-stream"}}}};const oe=(0,N.Z)(ne,[["render",V],["__scopeId","data-v-6a53afc0"]]);var ie=oe,re={name:"HomeView",components:{Base64TextVue:ie}};const ae=(0,N.Z)(re,[["render",a]]);var le=ae;function se(e,t,n,o,i,a){const l=(0,r.up)("Base64FileVue");return(0,r.wg)(),(0,r.j4)(l)}const ce=e=>((0,r.dD)("data-v-4ba61390"),e=e(),(0,r.Cn)(),e),ue={class:"container mt-5"},pe={class:"text-center"},de={class:"text-center mt-3"},me={class:"form-group"},fe={for:"input",class:"form-label"},be={class:"form-group text-center"},ve={class:"form-group text-center"},ge=ce((()=>(0,r._)("i",{class:"bi bi-arrow-repeat"},null,-1))),we={class:"form-group"},ye={for:"result"},he={class:"form-group text-center"};function Fe(e,t,n,i,a,s){return(0,r.wg)(),(0,r.iD)("div",ue,[(0,r._)("h1",pe,(0,l.zw)(a.componentName),1),(0,r._)("p",de,(0,l.zw)(a.componentDescription),1),(0,r._)("div",me,[(0,r._)("label",fe,(0,l.zw)(a.labels.inputFile),1),(0,r._)("input",{type:"file",id:"input",class:"form-control form-control-lg",onChange:t[0]||(t[0]=(...e)=>s.changeFile&&s.changeFile(...e)),ref:"file"},null,544)]),(0,r._)("div",be,[(0,r._)("button",{class:"btn btn-primary",id:"encode",onClick:t[1]||(t[1]=(...e)=>s.encodeFile&&s.encodeFile(...e))},(0,l.zw)(a.buttons.encodeBtn),1)]),(0,r._)("div",ve,[(0,r._)("button",{type:"button",class:"btn btn-secondary",onClick:t[2]||(t[2]=(...e)=>s.cleanAll&&s.cleanAll(...e))},[ge,(0,r.Uk)(" "+(0,l.zw)(a.buttons.cleanBtn),1)])]),(0,r._)("div",we,[(0,r._)("label",ye,(0,l.zw)(a.labels.outputText),1),(0,r.wy)((0,r._)("textarea",{class:"form-control",id:"result",rows:"10",readonly:"","onUpdate:modelValue":t[3]||(t[3]=e=>a.outputForm=e)},null,512),[[o.nr,a.outputForm]])]),(0,r._)("div",he,[(0,r._)("button",{class:"btn btn-secondary",id:"copy",onClick:t[4]||(t[4]=(...e)=>s.copyOutput&&s.copyOutput(...e))},(0,l.zw)(a.buttons.copyBtn),1)])])}var Be={name:"Base64File",data(){return{componentName:"Convertir Archivo a Base64",componentDescription:"Sube un archivo para convertirlo en Base64.",labels:{inputFile:"Seleccionar archivo",outputText:"Resultado"},buttons:{encodeBtn:"Codificar en Base64",copyBtn:"Copiar al Portapapeles",cleanBtn:"Limpiar entrada"},inputForm:"",outputForm:""}},methods:{changeFile(e){let t=e.target.files||e.dataTransfer.files;if(!t.length)return;const n=new FileReader;let o=this;n.onload=function(e){o.inputForm=e.target.result,o.encodeFile()},n.readAsBinaryString(t[0])},encodeFile(){this.outputForm=window.btoa(this.inputForm)},cleanAll(){this.inputForm="",this.outputForm="",this.$refs.file.value=null},copyOutput(){const e=document.getElementById("result");e.select(),document.execCommand("copy")}}};const _e=(0,N.Z)(Be,[["render",Fe],["__scopeId","data-v-4ba61390"]]);var xe=_e,Te={name:"FileView",components:{Base64FileVue:xe}};const ke=(0,N.Z)(Te,[["render",se]]);var Oe=ke,Ce=()=>(0,i.p7)({history:(0,i.PO)("/base64webutils/"),routes:[{path:"/",component:le},{path:"/file",component:Oe}]});const Pe={class:"navbar navbar-expand-lg bg-light"},ze={class:"container-fluid"},je={class:"navbar-brand",href:"#"},De=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),Ue={class:"collapse navbar-collapse",id:"navbarNav"},Ae={class:"navbar-nav"},Ve={class:"container"};function Se(e,t,n,o,i,a){const s=(0,r.up)("router-link"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",Pe,[(0,r._)("div",ze,[(0,r._)("a",je,(0,l.zw)(i.navBar),1),De,(0,r._)("div",Ue,[(0,r._)("ul",Ae,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.mainMenu,(e=>((0,r.wg)(),(0,r.iD)("li",{class:"nav-item",key:e.id},[(0,r.Wm)(s,{class:"nav-link fs-5",to:{path:e.link}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.label),1)])),_:2},1032,["to"])])))),128))])])])]),(0,r._)("main",Ve,[(0,r.Wm)(c)])],64)}var Ie={name:"App",data(){return{navBar:"Base64",mainMenu:[{id:1,label:"Texto",link:"/"},{id:2,label:"Archivo",link:"/file"}]}}};const qe=(0,N.Z)(Ie,[["render",Se]]);var Ze=qe;n(2166);(0,o.ri)(Ze).use(Ce()).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<a&&(a=r));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],l=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkbase64webutils"]=self["webpackChunkbase64webutils"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7460)}));o=n.O(o)})();
//# sourceMappingURL=app.d82cec78.js.map