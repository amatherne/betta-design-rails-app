!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=c[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,o){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(o===t)throw"invalid module definition, definition function must be specified";n(r,function(){c[e]=o.apply(null,arguments)})}function o(t){for(var n=e,r=t.split(/[.\/]/),o=0;o<r.length;++o){if(!n[r[o]])return;n=n[r[o]]}return n}function i(n){var r,o,i,a,l;for(r=0;r<n.length;r++){o=e,i=n[r],a=i.split(/[.\/]/);for(var s=0;s<a.length-1;++s)o[a[s]]===t&&(o[a[s]]={}),o=o[a[s]];o[a[a.length-1]]=c[i]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(i in c)l[i]=c[i];for(r=0;r<n.length;r++)delete l[n[r]];e.privateModules=l}}var c={};r("tinymce/spellcheckerplugin/DomTextMatcher",[],function(){function e(e){return e&&1==e.nodeType&&"false"===e.contentEditable}return function(t,n){function r(e,t){if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}function o(t){var n;if(3===t.nodeType)return t.data;if(w[t.nodeName]&&!S[t.nodeName])return"";if(e(t))return"\n";if(n="",(S[t.nodeName]||T[t.nodeName])&&(n+="\n"),t=t.firstChild)do n+=o(t);while(t=t.nextSibling);return n}function i(t,n,r){var o,i,c,a,l,s=[],u=0,d=t,f=0;n=n.slice(0),n.sort(function(e,t){return e.start-t.start}),l=n.shift();e:for(;;){if((S[d.nodeName]||T[d.nodeName]||e(d))&&u++,3===d.nodeType&&(!i&&d.length+u>=l.end?(i=d,a=l.end-u):o&&s.push(d),!o&&d.length+u>l.start&&(o=d,c=l.start-u),u+=d.length),o&&i){if(d=r({startNode:o,startNodeIndex:c,endNode:i,endNodeIndex:a,innerNodes:s,match:l.text,matchIndex:f}),u-=i.length-a,o=null,i=null,s=[],l=n.shift(),f++,!l)break}else if(w[d.nodeName]&&!S[d.nodeName]||!d.firstChild){if(d.nextSibling){d=d.nextSibling;continue}}else if(!e(d)){d=d.firstChild;continue}for(;;){if(d.nextSibling){d=d.nextSibling;break}if(d.parentNode===t)break e;d=d.parentNode}}}function c(e){function t(t,n){var r=M[n];r.stencil||(r.stencil=e(r));var o=r.stencil.cloneNode(!1);return o.setAttribute("data-mce-index",n),t&&o.appendChild(C.doc.createTextNode(t)),o}return function(e){var n,r,o,i=e.startNode,c=e.endNode,a=e.matchIndex,l=C.doc;if(i===c){var s=i;o=s.parentNode,e.startNodeIndex>0&&(n=l.createTextNode(s.data.substring(0,e.startNodeIndex)),o.insertBefore(n,s));var u=t(e.match,a);return o.insertBefore(u,s),e.endNodeIndex<s.length&&(r=l.createTextNode(s.data.substring(e.endNodeIndex)),o.insertBefore(r,s)),s.parentNode.removeChild(s),u}n=l.createTextNode(i.data.substring(0,e.startNodeIndex)),r=l.createTextNode(c.data.substring(e.endNodeIndex));for(var d=t(i.data.substring(e.startNodeIndex),a),f=[],h=0,p=e.innerNodes.length;h<p;++h){var g=e.innerNodes[h],m=t(g.data,a);g.parentNode.replaceChild(m,g),f.push(m)}var v=t(c.data.substring(0,e.endNodeIndex),a);return o=i.parentNode,o.insertBefore(n,i),o.insertBefore(d,i),o.removeChild(i),o=c.parentNode,o.insertBefore(v,c),o.insertBefore(r,c),o.removeChild(c),v}}function a(e){e.parentNode.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function l(e){var n=t.getElementsByTagName("*"),r=[];e="number"==typeof e?""+e:null;for(var o=0;o<n.length;o++){var i=n[o],c=i.getAttribute("data-mce-index");null!==c&&c.length&&(c!==e&&null!==e||r.push(i))}return r}function s(e){for(var t=M.length;t--;)if(M[t]===e)return t;return-1}function u(e){var t=[];return d(function(n,r){e(n,r)&&t.push(n)}),M=t,this}function d(e){for(var t=0,n=M.length;t<n&&e(M[t],t)!==!1;t++);return this}function f(e){return M.length&&i(t,M,c(e)),this}function h(e,t){if(b&&e.global)for(;y=e.exec(b);)M.push(r(y,t));return this}function p(e){var t,n=l(e?s(e):null);for(t=n.length;t--;)a(n[t]);return this}function g(e){return M[e.getAttribute("data-mce-index")]}function m(e){return l(s(e))[0]}function v(e,t,n){return M.push({start:e,end:e+t,text:b.substr(e,t),data:n}),this}function x(e){var t=l(s(e)),r=n.dom.createRng();return r.setStartBefore(t[0]),r.setEndAfter(t[t.length-1]),r}function k(e,t){var r=x(e);return r.deleteContents(),t.length>0&&r.insertNode(n.dom.doc.createTextNode(t)),r}function N(){return M.splice(0,M.length),p(),this}var y,b,S,w,T,M=[],C=n.dom;return S=n.schema.getBlockElements(),w=n.schema.getWhiteSpaceElements(),T=n.schema.getShortEndedElements(),b=o(t),{text:b,matches:M,each:d,filter:u,reset:N,matchFromElement:g,elementFromMatch:m,find:h,add:v,wrap:f,unwrap:p,replace:k,rangeFromMatch:x,indexOf:s}}}),r("tinymce/spellcheckerplugin/Plugin",["tinymce/spellcheckerplugin/DomTextMatcher","tinymce/PluginManager","tinymce/util/Tools","tinymce/ui/Menu","tinymce/dom/DOMUtils","tinymce/util/XHR","tinymce/util/URI","tinymce/util/JSON"],function(e,t,n,r,o,i,c,a){t.add("spellchecker",function(l,s){function u(){return I.textMatcher||(I.textMatcher=new e(l.getBody(),l)),I.textMatcher}function d(e,t){var r=[];return n.each(t,function(e){r.push({selectable:!0,text:e.name,data:e.value})}),r}function f(e){for(var t in e)return!1;return!0}function h(e,t){var i=[],c=C[e];n.each(c,function(e){i.push({text:e,onclick:function(){l.insertContent(l.dom.encode(e)),l.dom.remove(t),x()}})}),i.push({text:"-"}),B&&i.push({text:"Add to Dictionary",onclick:function(){k(e,t)}}),i.push.apply(i,[{text:"Ignore",onclick:function(){N(e,t)}},{text:"Ignore all",onclick:function(){N(e,t,!0)}}]),_=new r({items:i,context:"contextmenu",onautohide:function(e){e.target.className.indexOf("spellchecker")!=-1&&e.preventDefault()},onhide:function(){_.remove(),_=null}}),_.renderTo(document.body);var a=o.DOM.getPos(l.getContentAreaContainer()),s=l.dom.getPos(t[0]),u=l.dom.getRoot();"BODY"==u.nodeName?(s.x-=u.ownerDocument.documentElement.scrollLeft||u.scrollLeft,s.y-=u.ownerDocument.documentElement.scrollTop||u.scrollTop):(s.x-=u.scrollLeft,s.y-=u.scrollTop),a.x+=s.x,a.y+=s.y,_.moveTo(a.x,a.y+t[0].offsetHeight)}function p(){return l.getParam("spellchecker_wordchar_pattern")||new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g")}function g(e,t,r,o){var u={method:e,lang:D.spellchecker_language},d="";u["addToDictionary"==e?"word":"text"]=t,n.each(u,function(e,t){d&&(d+="&"),d+=t+"="+encodeURIComponent(e)}),i.send({url:new c(s).toAbsolute(D.spellchecker_rpc_url),type:"post",content_type:"application/x-www-form-urlencoded",data:d,success:function(e){(e=a.parse(e))?e.error?o(e.error):r(e):o(l.translate("Server response wasn't proper JSON."))},error:function(){o(l.translate("The spelling service was not found: (")+D.spellchecker_rpc_url+l.translate(")"))}})}function m(e,t,n,r){(D.spellchecker_callback||g).call(I,e,t,n,r)}function v(){function e(e){l.notificationManager.open({text:e,type:"error"}),l.setProgressState(!1),y()}y()||(l.setProgressState(!0),m("spellcheck",u().text,T,e),l.focus())}function x(){l.dom.select("span.mce-spellchecker-word").length||y()}function k(e,t){l.setProgressState(!0),m("addToDictionary",e,function(){l.setProgressState(!1),l.dom.remove(t,!0),x()},function(e){l.notificationManager.open({text:e,type:"error"}),l.setProgressState(!1)})}function N(e,t,r){l.selection.collapse(),r?n.each(l.dom.select("span.mce-spellchecker-word"),function(t){t.getAttribute("data-mce-word")==e&&l.dom.remove(t,!0)}):l.dom.remove(t,!0),x()}function y(){if(u().reset(),I.textMatcher=null,E)return E=!1,l.fire("SpellcheckEnd"),!0}function b(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t}function S(e){var t,r=[];if(t=n.toArray(l.getBody().getElementsByTagName("span")),t.length)for(var o=0;o<t.length;o++){var i=b(t[o]);null!==i&&i.length&&i===e.toString()&&r.push(t[o])}return r}function w(e){var t=D.spellchecker_language;e.control.items().each(function(e){e.active(e.settings.data===t)})}function T(e){var t;if(e.words?(B=!!e.dictionary,t=e.words):t=e,l.setProgressState(!1),f(t)){var n=l.translate("No misspellings found.");return l.notificationManager.open({text:n,type:"info"}),void(E=!1)}C=t,u().find(p()).filter(function(e){return!!t[e.text]}).wrap(function(e){return l.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1,"data-mce-word":e.text})}),E=!0,l.fire("SpellcheckStart")}var M,C,E,_,B,I=this,D=l.settings;if(/(^|[ ,])tinymcespellchecker([, ]|$)/.test(D.plugins)&&t.get("tinymcespellchecker"))return void("undefined"!=typeof console&&console.log&&console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."));var P=D.spellchecker_languages||"English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";M=d("Language",n.map(P.split(","),function(e){return e=e.split("="),{name:e[0],value:e[1]}})),l.on("click",function(e){var t=e.target;if("mce-spellchecker-word"==t.className){e.preventDefault();var n=S(b(t));if(n.length>0){var r=l.dom.createRng();r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),l.selection.setRng(r),h(t.getAttribute("data-mce-word"),n)}}}),l.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:v,selectable:!0,onPostRender:function(){var e=this;e.active(E),l.on("SpellcheckStart SpellcheckEnd",function(){e.active(E)})}});var A={tooltip:"Spellcheck",onclick:v,onPostRender:function(){var e=this;l.on("SpellcheckStart SpellcheckEnd",function(){e.active(E)})}};M.length>1&&(A.type="splitbutton",A.menu=M,A.onshow=w,A.onselect=function(e){D.spellchecker_language=e.control.settings.data}),l.addButton("spellchecker",A),l.addCommand("mceSpellCheck",v),l.on("remove",function(){_&&(_.remove(),_=null)}),l.on("change",x),this.getTextMatcher=u,this.getWordCharPattern=p,this.markErrors=T,this.getLanguage=function(){return D.spellchecker_language},D.spellchecker_language=D.spellchecker_language||D.language||"en"})}),i(["tinymce/spellcheckerplugin/DomTextMatcher"])}(window);