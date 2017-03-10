!function(){var e={},t=function(t){for(var i=e[t],n=i.deps,a=i.defn,o=n.length,c=new Array(o),s=0;s<o;++s)c[s]=r(n[s]);var u=a.apply(null,c);if(void 0===u)throw"module ["+t+"] returned undefined";i.instance=u},i=function(t,i,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===i)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:i,defn:r,instance:void 0}},r=function(i){var r=e[i];if(void 0===r)throw"module ["+i+"] was undefined";return void 0===r.instance&&t(i),r.instance},n=function(e,t){for(var i=e.length,n=new Array(i),a=0;a<i;++a)n.push(r(e[a]));t.apply(null,t)};({}).bolt={module:{api:{define:i,require:n,demand:r}}};var a=i,o=function(e,t){a(e,[],function(){return t})};o("1",tinymce.PluginManager),o("6",tinymce.util.Delay),o("e",tinymce.util.Tools),o("9",tinymce.html.SaxParser),o("a",tinymce.html.Schema),o("b",tinymce.dom.DOMUtils.DOM),a("h",[],function(){return{getVideoScriptMatch:function(e,t){if(e)for(var i=0;i<e.length;i++)if(t.indexOf(e[i].filter)!==-1)return e[i]}}}),a("c",[],function(){var e=function(e){return e.replace(/px$/,"")},t=function(e){return/^[0-9.]+$/.test(e)?e+"px":e},i=function(t){return function(i){return i?e(i.style[t]):""}},r=function(e){return function(i,r){i&&(i.style[e]=t(r))}};return{getMaxWidth:i("maxWidth"),getMaxHeight:i("maxHeight"),setMaxWidth:r("maxWidth"),setMaxHeight:r("maxHeight")}}),a("7",["e","9","a","b","h","c"],function(e,t,i,r,n,a){var o=function(e){return r.getAttrib(e,"data-ephox-embed-iri")},c=function(e){return""!==o(r.createFragment(e).firstChild)},s=function(i,r){var a={};return new t({validate:!1,allow_conditional_comments:!0,special:"script,noscript",start:function(t,r){if(a.source1||"param"!==t||(a.source1=r.map.movie),"iframe"!==t&&"object"!==t&&"embed"!==t&&"video"!==t&&"audio"!==t||(a.type||(a.type=t),a=e.extend(r.map,a)),"script"===t){var o=n.getVideoScriptMatch(i,r.map.src);if(!o)return;a={type:"script",source1:r.map.src,width:o.width,height:o.height}}"source"===t&&(a.source1?a.source2||(a.source2=r.map.src):a.source1=r.map.src),"img"!==t||a.poster||(a.poster=r.map.src)}}).parse(r),a.source1=a.source1||a.src||a.data,a.source2=a.source2||"",a.poster=a.poster||"",a},u=function(e){var t=r.createFragment(e),i=t.firstChild;return{type:"ephox-embed-iri",source1:o(i),source2:"",poster:"",width:a.getMaxWidth(i),height:a.getMaxHeight(i)}};return{htmlToData:function(e,t){return c(t)?u(t):s(e,t)}}}),o("8",tinymce.html.Writer),a("4",["8","9","a","b","c"],function(e,t,i,r,n){var a=function(e,t){var i,r,n,a;for(i in t)if(n=""+t[i],e.map[i])for(r=e.length;r--;)a=e[r],a.name===i&&(n?(e.map[i]=n,a.value=n):(delete e.map[i],e.splice(r,1)));else n&&(e.push({name:i,value:n}),e.map[i]=n)},o=function(i){var r=new e;return new t(r).parse(i),r.getContent()},c=function(r,n,o){var c,s=new e,u=0;return new t({validate:!1,allow_conditional_comments:!0,special:"script,noscript",comment:function(e){s.comment(e)},cdata:function(e){s.cdata(e)},text:function(e,t){s.text(e,t)},start:function(e,t,i){switch(e){case"video":case"object":case"embed":case"img":case"iframe":a(t,{width:n.width,height:n.height})}if(o)switch(e){case"video":a(t,{poster:n.poster,src:""}),n.source2&&a(t,{src:""});break;case"iframe":a(t,{src:n.source1});break;case"source":if(u++,u<=2&&(a(t,{src:n["source"+u],type:n["source"+u+"mime"]}),!n["source"+u]))return;break;case"img":if(!n.poster)return;c=!0}s.start(e,t,i)},end:function(e){if("video"===e&&o)for(var t=1;t<=2;t++)if(n["source"+t]){var i=[];i.map={},u<t&&(a(i,{src:n["source"+t],type:n["source"+t+"mime"]}),s.start("source",i,!0))}if(n.poster&&"object"===e&&o&&!c){var r=[];r.map={},a(r,{src:n.poster,width:n.width,height:n.height}),s.start("img",r,!0)}s.end(e)}},new i({})).parse(r),s.getContent()},s=function(e){var t=r.createFragment(e);return""!==r.getAttrib(t.firstChild,"data-ephox-embed-iri")},u=function(e,t){var i=r.createFragment(e),a=i.firstChild;return n.setMaxWidth(a,t.width),n.setMaxHeight(a,t.height),o(a.outerHTML)};return{updateHtml:function(e,t,i){return s(e)?u(e,t):c(e,t,i)}}}),a("l",[],function(){return{guess:function(e){var t={mp3:"audio/mpeg",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"},i=e.toLowerCase().split(".").pop(),r=t[i];return r?r:""}}}),a("m",[],function(){return{urlPatterns:[{regex:/youtu\.be\/([\w\-.]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\-_]+(?:\?.+)?)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowfullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowfullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}]}}),a("j",["l","7","m","h","4","e"],function(e,t,i,r,n,a){return{dataToHtml:function(o,c){var s="",u=a.extend({},c);if(!u.source1&&(a.extend(u,t.htmlToData(o.settings.media_scripts,u.embed)),!u.source1))return"";if(u.source2||(u.source2=""),u.poster||(u.poster=""),u.source1=o.convertURL(u.source1,"source"),u.source2=o.convertURL(u.source2,"source"),u.source1mime=e.guess(u.source1),u.source2mime=e.guess(u.source2),u.poster=o.convertURL(u.poster,"poster"),a.each(i.urlPatterns,function(e){var t,i,r=e.regex.exec(u.source1);if(r){for(i=e.url,t=0;r[t];t++)i=i.replace("$"+t,function(){return r[t]});u.source1=i,u.type=e.type,u.allowFullscreen=e.allowFullscreen,u.width=u.width||e.w,u.height=u.height||e.h}}),u.embed)s=n.updateHtml(u.embed,u,!0);else{var l=r.getVideoScriptMatch(o.settings.media_scripts,u.source1);if(l&&(u.type="script",u.width=l.width,u.height=l.height),u.width=u.width||300,u.height=u.height||150,a.each(u,function(e,t){u[t]=o.dom.encode(e)}),"iframe"===u.type){var d=u.allowFullscreen?' allowFullscreen="1"':"";s+='<iframe src="'+u.source1+'" width="'+u.width+'" height="'+u.height+'"'+d+"></iframe>"}else"application/x-shockwave-flash"===u.source1mime?(s+='<object data="'+u.source1+'" width="'+u.width+'" height="'+u.height+'" type="application/x-shockwave-flash">',u.poster&&(s+='<img src="'+u.poster+'" width="'+u.width+'" height="'+u.height+'" />'),s+="</object>"):u.source1mime.indexOf("audio")!==-1?o.settings.audio_template_callback?s=o.settings.audio_template_callback(u):s+='<audio controls="controls" src="'+u.source1+'">'+(u.source2?'\n<source src="'+u.source2+'"'+(u.source2mime?' type="'+u.source2mime+'"':"")+" />\n":"")+"</audio>":"script"===u.type?s+='<script src="'+u.source1+'"></script>':s=o.settings.video_template_callback?o.settings.video_template_callback(u):'<video width="'+u.width+'" height="'+u.height+'"'+(u.poster?' poster="'+u.poster+'"':"")+' controls="controls">\n<source src="'+u.source1+'"'+(u.source1mime?' type="'+u.source1mime+'"':"")+" />\n"+(u.source2?'<source src="'+u.source2+'"'+(u.source2mime?' type="'+u.source2mime+'"':"")+" />\n":"")+"</video>"}return s}}}),o("k",tinymce.util.Promise),a("d",["j","k"],function(e,t){var i=function(e,i,r){var n={};return new t(function(t,a){var o=function(r){return r.html&&(n[e.source1]=r),t({url:e.source1,html:r.html?r.html:i(e)})};n[e.source1]?o(n[e.source1]):r({url:e.source1},o,a)})},r=function(e,i){return new t(function(t){t({html:i(e),url:e.source1})})},n=function(t){return function(i){return e.dataToHtml(t,i)}};return{getEmbedHtml:function(e,t){var a=e.settings.media_url_resolver;return a?i(t,n(e),a):r(t,n(e))}}}),o("f",tinymce.Env),a("g",[],function(){var e=function(e,t){e.state.set("oldVal",e.value()),t.state.set("oldVal",t.value())},t=function(e,t){var i=e.find("#width")[0],r=e.find("#height")[0],n=e.find("#constrain")[0];i&&r&&n&&t(i,r,n.checked())},i=function(t,i,r){var n=t.state.get("oldVal"),a=i.state.get("oldVal"),o=t.value(),c=i.value();r&&n&&a&&o&&c&&(o!==n?(c=Math.round(o/n*c),isNaN(c)||i.value(c)):(o=Math.round(c/a*o),isNaN(o)||t.value(o))),e(t,i)},r=function(i){t(i,e)},n=function(e){t(e,i)};return{createUi:function(e){var t=function(){e(function(e){n(e)})};return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}},syncSize:r,updateSize:n}}),a("2",["6","7","4","d","c","e","f","g"],function(e,t,i,r,n,a,o,c){var s=o.ie&&o.ie<=8?"onChange":"onInput",u=function(e){return function(t){var i=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error.";e.notificationManager.open({type:"error",text:i})}},l=function(e){var i=e.selection.getNode(),r=i.getAttribute("data-ephox-embed-iri");return r?{source1:r,"data-ephox-embed-iri":r,width:n.getMaxWidth(i),height:n.getMaxHeight(i)}:i.getAttribute("data-mce-object")?t.htmlToData(e.settings.media_scripts,e.serializer.serialize(i,{selection:!0})):{}},d=function(e){var t=e.selection.getNode();if(t.getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri"))return e.selection.getContent()},m=function(e,i){return function(r){var n=r.html,o=e.find("#embed")[0],s=a.extend(t.htmlToData(i.settings.media_scripts,n),{source1:r.url});e.fromJSON(s),o&&(o.value(n),c.updateSize(e))}},h=function(e,t){var i,r,n=e.dom.select("img[data-mce-object]");for(i=0;i<t.length;i++)for(r=n.length-1;r>=0;r--)t[i]===n[r]&&n.splice(r,1);e.selection.select(n[0])},p=function(e,t){var i=e.dom.select("img[data-mce-object]");e.insertContent(t),h(e,i),e.nodeChanged()},f=function(e,t){var n=e.toJSON();n.embed=i.updateHtml(n.embed,n),n.embed?p(t,n.embed):r.getEmbedHtml(t,n).then(function(e){p(t,e.html)})["catch"](u(t))},g=function(e,t){a.each(t,function(t,i){e.find("#"+i).value(t)})};return{showDialog:function(e){var n,o,h=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onpaste:function(){setTimeout(function(){r.getEmbedHtml(e,n.toJSON()).then(m(n,e))["catch"](u(e))},1)},onchange:function(t){r.getEmbedHtml(e,n.toJSON()).then(m(n,e))["catch"](u(e)),g(n,t.meta)},onbeforecall:function(e){e.meta=n.toJSON()}}],p=[],v=function(e){e(n),o=n.toJSON(),n.find("#embed").value(i.updateHtml(o.embed,o))};if(e.settings.media_alt_source!==!1&&p.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),e.settings.media_poster!==!1&&p.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),e.settings.media_dimensions!==!1){var w=c.createUi(v);h.push(w)}o=l(e);var b={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:d(e),multiline:!0,rows:5,label:"Source"},y=function(){o=a.extend({},t.htmlToData(e.settings.media_scripts,this.value())),this.parent().parent().fromJSON(o)};b[s]=y,n=e.windowManager.open({title:"Insert/edit media",data:o,bodyType:"tabpanel",body:[{title:"General",type:"form",items:h},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},b]},{title:"Advanced",type:"form",items:p}],onSubmit:function(){c.updateSize(n),f(n,e)}}),c.syncSize(n)}}}),a("3",["e","8","9","a"],function(e,t,i,r){return{sanitize:function(e,n){if(e.settings.media_filter_html===!1)return n;var a,o=new t;return new i({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(e){o.comment(e)},cdata:function(e){o.cdata(e)},text:function(e,t){o.text(e,t)},start:function(t,i,r){if(a=!0,"script"!==t&&"noscript"!==t){for(var n=0;n<i.length;n++){if(0===i[n].name.indexOf("on"))return;"style"===i[n].name&&(i[n].value=e.dom.serializeStyle(e.dom.parseStyle(i[n].value),t))}o.start(t,i,r),a=!1}},end:function(e){a||o.end(e)}},new r({})).parse(n),o.getContent()}}}),o("i",tinymce.html.Node),a("5",["3","h","i","f"],function(e,t,i,r){var n=function(e,t){var n,a=t.name;return n=new i("img",1),n.shortEnded=!0,o(e,t,n),n.attr({width:t.attr("width")||"300",height:t.attr("height")||("audio"===a?"30":"150"),style:t.attr("style"),src:r.transparentSrc,"data-mce-object":a,"class":"mce-object mce-object-"+a}),n},a=function(e,t){var r,n,a,c=t.name;return r=new i("span",1),r.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":c,"class":"mce-preview-object mce-object-"+c}),o(e,t,r),n=new i(c,1),n.attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),width:t.attr("width")||"300",height:t.attr("height")||("audio"===c?"30":"150"),frameborder:"0"}),a=new i("span",1),a.attr("class","mce-shim"),r.append(n),r.append(a),r},o=function(t,i,r){var n,a,o,c,s;for(o=i.attributes,c=o.length;c--;)n=o[c].name,a=o[c].value,"width"!==n&&"height"!==n&&"style"!==n&&("data"!==n&&"src"!==n||(a=t.convertURL(a,n)),r.attr("data-mce-p-"+n,a));s=i.firstChild&&i.firstChild.value,s&&(r.attr("data-mce-html",escape(e.sanitize(t,s))),r.firstChild=null)},c=function(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri"))return!0;return!1};return{createPreviewIframeNode:a,createPlaceholderNode:n,placeHolderConverter:function(e){return function(i){for(var o,s,u=i.length;u--;)o=i[u],o.parent&&(o.parent.attr("data-mce-object")||("script"!==o.name||(s=t.getVideoScriptMatch(e.settings.media_scripts,o.attr("src"))))&&(s&&(s.width&&o.attr("width",s.width.toString()),s.height&&o.attr("height",s.height.toString())),"iframe"===o.name&&e.settings.media_live_embeds!==!1&&r.ceFalse?c(o)||o.replace(a(e,o)):c(o)||o.replace(n(e,o))))}}}}),a("0",["1","2","3","4","5"],function(e,t,i,r,n){var a=function(e){e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),e.on("preInit",function(){var t=e.schema.getSpecialElements();tinymce.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=e.schema.getBoolAttrs();tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),e.parser.addNodeFilter("iframe,video,audio,object,embed,script",n.placeHolderConverter(e)),e.serializer.addAttributeFilter("data-mce-object",function(t,r){for(var n,a,o,c,s,u,l,d,m=t.length;m--;)if(n=t[m],n.parent){for(l=n.attr(r),a=new tinymce.html.Node(l,1),"audio"!==l&&"script"!==l&&(d=n.attr("class"),d&&d.indexOf("mce-preview-object")!==-1?a.attr({width:n.firstChild.attr("width"),height:n.firstChild.attr("height")}):a.attr({width:n.attr("width"),height:n.attr("height")})),a.attr({style:n.attr("style")}),c=n.attributes,o=c.length;o--;){var h=c[o].name;0===h.indexOf("data-mce-p-")&&a.attr(h.substr(11),c[o].value)}"script"===l&&a.attr("type","text/javascript"),s=n.attr("data-mce-html"),s&&(u=new tinymce.html.Node("#text",3),u.raw=!0,u.value=i.sanitize(e,unescape(s)),a.append(u)),n.replace(a)}})}),e.on("click keyup",function(){var t=e.selection.getNode();t&&e.dom.hasClass(t,"mce-preview-object")&&e.dom.getAttrib(t,"data-mce-selected")&&t.setAttribute("data-mce-selected","2")}),e.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");"audio"!==t&&"script"!==t||e.preventDefault()}),e.on("objectResized",function(e){var t,i=e.target;i.getAttribute("data-mce-object")&&(t=i.getAttribute("data-mce-html"),t&&(t=unescape(t),i.setAttribute("data-mce-html",escape(r.updateHtml(t,{width:e.width,height:e.height})))))}),this.showDialog=function(){t.showDialog(e)},e.addButton("media",{tooltip:"Insert/edit media",onclick:this.showDialog,stateSelector:["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"]}),e.addMenuItem("media",{icon:"media",text:"Media",onclick:this.showDialog,context:"insert",prependToContext:!0}),e.on("setContent",function(){e.$("span.mce-preview-object").each(function(t,i){var r=e.$(i);0===r.find("span.mce-shim",i).length&&r.append('<span class="mce-shim"></span>')})}),e.addCommand("mceMedia",this.showDialog)};return e.add("media",a),function(){}}),r("0")()}();