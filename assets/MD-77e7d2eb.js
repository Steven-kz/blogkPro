import{_ as P,o as M,c as I,d as H}from"./app-34d4b3ab.js";function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}function y(e,t){return Array(t+1).join(e)}function _(e){return e.replace(/^\n*/,"")}function $(e){for(var t=e.length;t>0&&e[t-1]===`
`;)t--;return e.substring(0,t)}var V=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function N(e){return E(e,V)}var b=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function R(e){return E(e,b)}function U(e){return O(e,b)}var w=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function W(e){return E(e,w)}function j(e){return O(e,w)}function E(e,t){return t.indexOf(e.nodeName)>=0}function O(e,t){return e.getElementsByTagName&&t.some(function(n){return e.getElementsByTagName(n).length})}var s={};s.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};s.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+`
`}};s.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));if(n.headingStyle==="setext"&&r<3){var i=y(r===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+y("#",r)+" "+e+`

`}};s.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};s.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return n.nodeName==="LI"&&n.lastElementChild===t?`
`+e:`

`+e+`

`}};s.listItem={filter:"li",replacement:function(e,t,n){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var r=n.bulletListMarker+"   ",i=t.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),o=Array.prototype.indexOf.call(i.children,t);r=(a?Number(a)+o:o+1)+".  "}return r+e+(t.nextSibling&&!/\n$/.test(e)?`
`:"")}};s.indentedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){return`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};s.fencedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){for(var r=t.firstChild.getAttribute("class")||"",i=(r.match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,o=n.fence.charAt(0),c=3,l=new RegExp("^"+o+"{3,}","gm"),u;u=l.exec(a);)u[0].length>=c&&(c=u[0].length+1);var f=y(o,c);return`

`+f+i+`
`+a.replace(/\n$/,"")+`
`+f+`

`}};s.horizontalRule={filter:"hr",replacement:function(e,t,n){return`

`+n.hr+`

`}};s.inlineLink={filter:function(e,t){return t.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t){var n=t.getAttribute("href"),r=h(t.getAttribute("title"));return r&&(r=' "'+r+'"'),"["+e+"]("+n+r+")"}};s.referenceLink={filter:function(e,t){return t.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t,n){var r=t.getAttribute("href"),i=h(t.getAttribute("title"));i&&(i=' "'+i+'"');var a,o;switch(n.linkReferenceStyle){case"collapsed":a="["+e+"][]",o="["+e+"]: "+r+i;break;case"shortcut":a="["+e+"]",o="["+e+"]: "+r+i;break;default:var c=this.references.length+1;a="["+e+"]["+c+"]",o="["+c+"]: "+r+i}return this.references.push(o),a},references:[],append:function(e){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};s.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}};s.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}};s.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n=e.parentNode.nodeName==="PRE"&&!t;return e.nodeName==="CODE"&&!n},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",n="`",r=e.match(/`+/gm)||[];r.indexOf(n)!==-1;)n=n+"`";return n+t+e+t+n}};s.image={filter:"img",replacement:function(e,t){var n=h(t.getAttribute("alt")),r=t.getAttribute("src")||"",i=h(t.getAttribute("title")),a=i?' "'+i+'"':"";return r?"!["+n+"]("+r+a+")":""}};function h(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function D(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var t in e.rules)this.array.push(e.rules[t])}D.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var t;return(t=g(this.array,e,this.options))||(t=g(this._keep,e,this.options))||(t=g(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};function g(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(G(i,t,n))return i}}function G(e,t,n){var r=e.filter;if(typeof r=="string"){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof r=="function"){if(r.call(e,t,n))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function X(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function(p){return p.nodeName==="PRE"};if(!(!t.firstChild||i(t))){for(var a=null,o=!1,c=null,l=T(c,t,i);l!==t;){if(l.nodeType===3||l.nodeType===4){var u=l.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!o&&u[0]===" "&&(u=u.substr(1)),!u){l=v(l);continue}l.data=u,a=l}else if(l.nodeType===1)n(l)||l.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,o=!1):r(l)||i(l)?(a=null,o=!0):a&&(o=!1);else{l=v(l);continue}var f=T(c,l,i);c=l,l=f}a&&(a.data=a.data.replace(/ $/,""),a.data||v(a))}}function v(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function T(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var S=typeof window<"u"?window:{};function K(){var e=S.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch{}return t}function Y(){var e=function(){};return q()?e.prototype.parseFromString=function(t){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(t),n.close(),n}:e.prototype.parseFromString=function(t){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(t),n.close(),n},e}function q(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{window.ActiveXObject&&(e=!0)}return e}var z=K()?S.DOMParser:Y();function Q(e,t){var n;if(typeof e=="string"){var r=J().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");n=r.getElementById("turndown-root")}else n=e.cloneNode(!0);return X({element:n,isBlock:N,isVoid:R,isPre:t.preformattedCode?Z:null}),n}var A;function J(){return A=A||new z,A}function Z(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function ee(e,t){return e.isBlock=N(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=te(e),e.flankingWhitespace=ne(e,t),e}function te(e){return!R(e)&&!W(e)&&/^\s*$/i.test(e.textContent)&&!U(e)&&!j(e)}function ne(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var n=re(e.textContent);return n.leadingAscii&&C("left",e,t)&&(n.leading=n.leadingNonAscii),n.trailingAscii&&C("right",e,t)&&(n.trailing=n.trailingNonAscii),{leading:n.leading,trailing:n.trailing}}function re(e){var t=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function C(e,t,n){var r,i,a;return e==="left"?(r=t.previousSibling,i=/ $/):(r=t.nextSibling,i=/^ /),r&&(r.nodeType===3?a=i.test(r.nodeValue):n.preformattedCode&&r.nodeName==="CODE"?a=!1:r.nodeType===1&&!N(r)&&(a=i.test(r.textContent))),a}var ie=Array.prototype.reduce,ae=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function m(e){if(!(this instanceof m))return new m(e);var t={rules:s,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(n,r){return r.isBlock?`

`:""},keepReplacement:function(n,r){return r.isBlock?`

`+r.outerHTML+`

`:r.outerHTML},defaultReplacement:function(n,r){return r.isBlock?`

`+n+`

`:n}};this.options=F({},t,e),this.rules=new D(this.options)}m.prototype={turndown:function(e){if(!se(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var t=x.call(this,new Q(e,this.options));return le.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return ae.reduce(function(t,n){return t.replace(n[0],n[1])},e)}};function x(e){var t=this;return ie.call(e.childNodes,function(n,r){r=new ee(r,t.options);var i="";return r.nodeType===3?i=r.isCode?r.nodeValue:t.escape(r.nodeValue):r.nodeType===1&&(i=oe.call(t,r)),B(n,i)},"")}function le(e){var t=this;return this.rules.forEach(function(n){typeof n.append=="function"&&(e=B(e,n.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function oe(e){var t=this.rules.forNode(e),n=x.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function B(e,t){var n=$(e),r=_(t),i=Math.max(e.length-n.length,t.length-r.length),a=`

`.substring(0,i);return n+a+r}function se(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}const ce={methods:{convertAndDownload(){const e=document.documentElement.outerHTML;let t=document.title;console.log(t),t=t.split("|")[0].trim(),console.log(t);const r=e.indexOf(t),i=e.substr(r+t.length+1),a=i.indexOf(t),o=i.substr(a+t.length+1),c=o.indexOf(t),l=o.substr(c+t.length+1),u=l.indexOf(t),f=l.substr(u+t.length+1);console.log(f);let p=f.indexOf(t);const k=f.substr(p);console.log(k);const L=new m().turndown(k),d=document.createElement("a");d.href="data:text/plain;charset=utf-8,"+encodeURIComponent(L),d.download=t+".md",d.style.display="none",document.body.appendChild(d),d.click(),document.body.removeChild(d)}}};function ue(e,t,n,r,i,a){return M(),I("div",null,[H("button",{onClick:t[0]||(t[0]=(...o)=>a.convertAndDownload&&a.convertAndDownload(...o))},"转换并下载")])}const he=P(ce,[["render",ue],["__file","MD.vue"]]);export{he as default};
