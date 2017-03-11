!function(e){"use strict";var t=function(t,s){this.options=s,this.$element=e(t),this.$container=e("<div/>",{"class":"ms-container"}),this.$selectableContainer=e("<div/>",{"class":"ms-selectable"}),this.$selectionContainer=e("<div/>",{"class":"ms-selection"}),this.$selectableUl=e("<ul/>",{"class":"ms-list",tabindex:"-1"}),this.$selectionUl=e("<ul/>",{"class":"ms-list",tabindex:"-1"}),this.scrollTo=0,this.elemsSelector="li:visible:not(.ms-optgroup-label,.ms-optgroup-container,."+s.disabledClass+")"};t.prototype={constructor:t,init:function(){var t=this,s=this.$element;if(0===s.next(".ms-container").length){s.css({position:"absolute",left:"-9999px"}),s.attr("id",s.attr("id")?s.attr("id"):Math.ceil(1e3*Math.random())+"multiselect"),this.$container.attr("id","ms-"+s.attr("id")),this.$container.addClass(t.options.cssClass),s.find("option").each(function(){t.generateLisFromOption(this)}),this.$selectionUl.find(".ms-optgroup-label").hide(),t.options.selectableHeader&&t.$selectableContainer.append(t.options.selectableHeader),t.$selectableContainer.append(t.$selectableUl),t.options.selectableFooter&&t.$selectableContainer.append(t.options.selectableFooter),t.options.selectionHeader&&t.$selectionContainer.append(t.options.selectionHeader),t.$selectionContainer.append(t.$selectionUl),t.options.selectionFooter&&t.$selectionContainer.append(t.options.selectionFooter),t.$container.append(t.$selectableContainer),t.$container.append(t.$selectionContainer),s.after(t.$container),t.activeMouse(t.$selectableUl),t.activeKeyboard(t.$selectableUl);var l=t.options.dblClick?"dblclick":"click";t.$selectableUl.on(l,".ms-elem-selectable",function(){t.select(e(this).data("ms-value"))}),t.$selectionUl.on(l,".ms-elem-selection",function(){t.deselect(e(this).data("ms-value"))}),t.activeMouse(t.$selectionUl),t.activeKeyboard(t.$selectionUl),s.on("focus",function(){t.$selectableUl.focus()})}var i=s.find("option:selected").map(function(){return e(this).val()}).get();t.select(i,"init"),"function"==typeof t.options.afterInit&&t.options.afterInit.call(this,this.$container)},generateLisFromOption:function(t,s){for(var l=this,i=l.$element,n="",o=e(t),a=0;a<t.attributes.length;a++){var r=t.attributes[a];"value"!==r.name&&"disabled"!==r.name&&(n+=r.name+'="'+r.value+'" ')}var c=e("<li "+n+"><span>"+l.escapeHTML(o.text())+"</span></li>"),d=c.clone(),h=o.val(),p=l.sanitize(h);c.data("ms-value",h).addClass("ms-elem-selectable").attr("id",p+"-selectable"),d.data("ms-value",h).addClass("ms-elem-selection").attr("id",p+"-selection").hide(),(o.prop("disabled")||i.prop("disabled"))&&(d.addClass(l.options.disabledClass),c.addClass(l.options.disabledClass));var f=o.parent("optgroup");if(f.length>0){var u=f.attr("label"),m=l.sanitize(u),v=l.$selectableUl.find("#optgroup-selectable-"+m),b=l.$selectionUl.find("#optgroup-selection-"+m);if(0===v.length){var g='<li class="ms-optgroup-container"></li>',$='<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>'+u+"</span></li></ul>";v=e(g),b=e(g),v.attr("id","optgroup-selectable-"+m),b.attr("id","optgroup-selection-"+m),v.append(e($)),b.append(e($)),l.options.selectableOptgroup&&(v.find(".ms-optgroup-label").on("click",function(){var t=f.children(":not(:selected, :disabled)").map(function(){return e(this).val()}).get();l.select(t)}),b.find(".ms-optgroup-label").on("click",function(){var t=f.children(":selected:not(:disabled)").map(function(){return e(this).val()}).get();l.deselect(t)})),l.$selectableUl.append(v),l.$selectionUl.append(b)}s=void 0==s?v.find("ul").children().length:s+1,c.insertAt(s,v.children()),d.insertAt(s,b.children())}else s=void 0==s?l.$selectableUl.children().length:s,c.insertAt(s,l.$selectableUl),d.insertAt(s,l.$selectionUl)},addOption:function(t){var s=this;void 0!==t.value&&null!==t.value&&(t=[t]),e.each(t,function(t,l){if(void 0!==l.value&&null!==l.value&&0===s.$element.find("option[value='"+l.value+"']").length){var i=e('<option value="'+l.value+'">'+l.text+"</option>"),t=parseInt("undefined"==typeof l.index?s.$element.children().length:l.index),n=void 0==l.nested?s.$element:e("optgroup[label='"+l.nested+"']");i.insertAt(t,n),s.generateLisFromOption(i.get(0),t,l.nested)}})},escapeHTML:function(t){return e("<div>").text(t).html()},activeKeyboard:function(t){var s=this;t.on("focus",function(){e(this).addClass("ms-focus")}).on("blur",function(){e(this).removeClass("ms-focus")}).on("keydown",function(l){switch(l.which){case 40:case 38:return l.preventDefault(),l.stopPropagation(),void s.moveHighlight(e(this),38===l.which?-1:1);case 37:case 39:return l.preventDefault(),l.stopPropagation(),void s.switchList(t);case 9:if(s.$element.is("[tabindex]")){l.preventDefault();var i=parseInt(s.$element.attr("tabindex"),10);return i=l.shiftKey?i-1:i+1,void e('[tabindex="'+i+'"]').focus()}l.shiftKey&&s.$element.trigger("focus")}if(e.inArray(l.which,s.options.keySelect)>-1)return l.preventDefault(),l.stopPropagation(),void s.selectHighlighted(t)})},moveHighlight:function(e,t){var s=e.find(this.elemsSelector),l=s.filter(".ms-hover"),i=null,n=s.first().outerHeight(),o=e.height();if(this.$container.prop("id"),s.removeClass("ms-hover"),1===t){if(i=l.nextAll(this.elemsSelector).first(),0===i.length){var a=l.parent();if(a.hasClass("ms-optgroup")){var r=a.parent(),c=r.next(":visible");i=c.length>0?c.find(this.elemsSelector).first():s.first()}else i=s.first()}}else if(t===-1&&(i=l.prevAll(this.elemsSelector).first(),0===i.length)){var a=l.parent();if(a.hasClass("ms-optgroup")){var r=a.parent(),d=r.prev(":visible");i=d.length>0?d.find(this.elemsSelector).last():s.last()}else i=s.last()}if(i.length>0){i.addClass("ms-hover");var h=e.scrollTop()+i.position().top-o/2+n/2;e.scrollTop(h)}},selectHighlighted:function(e){var t=e.find(this.elemsSelector),s=t.filter(".ms-hover").first();s.length>0&&(e.parent().hasClass("ms-selectable")?this.select(s.data("ms-value")):this.deselect(s.data("ms-value")),t.removeClass("ms-hover"))},switchList:function(e){e.blur(),this.$container.find(this.elemsSelector).removeClass("ms-hover"),e.parent().hasClass("ms-selectable")?this.$selectionUl.focus():this.$selectableUl.focus()},activeMouse:function(){var t=this;this.$container.on("mouseenter",t.elemsSelector,function(){e(this).parents(".ms-container").find(t.elemsSelector).removeClass("ms-hover"),e(this).addClass("ms-hover")}),this.$container.on("mouseleave",t.elemsSelector,function(){e(this).parents(".ms-container").find(t.elemsSelector).removeClass("ms-hover")})},refresh:function(){this.destroy(),this.$element.multiSelect(this.options)},destroy:function(){e("#ms-"+this.$element.attr("id")).remove(),this.$element.css("position","").css("left",""),this.$element.removeData("multiselect")},select:function(t,s){"string"==typeof t&&(t=[t]);var l=this,i=this.$element,n=e.map(t,function(e){return l.sanitize(e)}),o=this.$selectableUl.find("#"+n.join("-selectable, #")+"-selectable").filter(":not(."+l.options.disabledClass+")"),a=this.$selectionUl.find("#"+n.join("-selection, #")+"-selection").filter(":not(."+l.options.disabledClass+")"),r=i.find("option:not(:disabled)").filter(function(){return e.inArray(this.value,t)>-1});if("init"===s&&(o=this.$selectableUl.find("#"+n.join("-selectable, #")+"-selectable"),a=this.$selectionUl.find("#"+n.join("-selection, #")+"-selection")),o.length>0){o.addClass("ms-selected").hide(),a.addClass("ms-selected").show(),r.prop("selected",!0),l.$container.find(l.elemsSelector).removeClass("ms-hover");var c=l.$selectableUl.children(".ms-optgroup-container");if(c.length>0)c.each(function(){var t=e(this).find(".ms-elem-selectable");t.length===t.filter(".ms-selected").length&&e(this).find(".ms-optgroup-label").hide()}),l.$selectionUl.children(".ms-optgroup-container").each(function(){e(this).find(".ms-elem-selection").filter(".ms-selected").length>0&&e(this).find(".ms-optgroup-label").show()});else if(l.options.keepOrder&&"init"!==s){var d=l.$selectionUl.find(".ms-selected");d.length>1&&d.last().get(0)!=a.get(0)&&a.insertAfter(d.last())}"init"!==s&&(i.trigger("change"),"function"==typeof l.options.afterSelect&&l.options.afterSelect.call(this,t))}},deselect:function(t){"string"==typeof t&&(t=[t]);var s=this,l=this.$element,i=e.map(t,function(e){return s.sanitize(e)}),n=this.$selectableUl.find("#"+i.join("-selectable, #")+"-selectable"),o=this.$selectionUl.find("#"+i.join("-selection, #")+"-selection").filter(".ms-selected").filter(":not(."+s.options.disabledClass+")"),a=l.find("option").filter(function(){return e.inArray(this.value,t)>-1});if(o.length>0){n.removeClass("ms-selected").show(),o.removeClass("ms-selected").hide(),a.prop("selected",!1),s.$container.find(s.elemsSelector).removeClass("ms-hover");var r=s.$selectableUl.children(".ms-optgroup-container");r.length>0&&(r.each(function(){e(this).find(".ms-elem-selectable").filter(":not(.ms-selected)").length>0&&e(this).find(".ms-optgroup-label").show()}),s.$selectionUl.children(".ms-optgroup-container").each(function(){0===e(this).find(".ms-elem-selection").filter(".ms-selected").length&&e(this).find(".ms-optgroup-label").hide()})),l.trigger("change"),"function"==typeof s.options.afterDeselect&&s.options.afterDeselect.call(this,t)}},select_all:function(){var t=this.$element,s=t.val();if(t.find('option:not(":disabled")').prop("selected",!0),this.$selectableUl.find(".ms-elem-selectable").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").hide(),this.$selectionUl.find(".ms-optgroup-label").show(),this.$selectableUl.find(".ms-optgroup-label").hide(),this.$selectionUl.find(".ms-elem-selection").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").show(),this.$selectionUl.focus(),t.trigger("change"),"function"==typeof this.options.afterSelect){var l=e.grep(t.val(),function(t){return e.inArray(t,s)<0});this.options.afterSelect.call(this,l)}},deselect_all:function(){var e=this.$element,t=e.val();e.find("option").prop("selected",!1),this.$selectableUl.find(".ms-elem-selectable").removeClass("ms-selected").show(),this.$selectionUl.find(".ms-optgroup-label").hide(),this.$selectableUl.find(".ms-optgroup-label").show(),this.$selectionUl.find(".ms-elem-selection").removeClass("ms-selected").hide(),this.$selectableUl.focus(),e.trigger("change"),"function"==typeof this.options.afterDeselect&&this.options.afterDeselect.call(this,t)},sanitize:function(e){var t,s,l=0;if(0==e.length)return l;var i=0;for(t=0,i=e.length;t<i;t++)s=e.charCodeAt(t),l=(l<<5)-l+s,l|=0;return l}},e.fn.multiSelect=function(){var s=arguments[0],l=arguments;return this.each(function(){var i=e(this),n=i.data("multiselect"),o=e.extend({},e.fn.multiSelect.defaults,i.data(),"object"==typeof s&&s);n||i.data("multiselect",n=new t(this,o)),"string"==typeof s?n[s](l[1]):n.init()})},e.fn.multiSelect.defaults={keySelect:[32],selectableOptgroup:!1,disabledClass:"disabled",dblClick:!1,keepOrder:!1,cssClass:""},e.fn.multiSelect.Constructor=t,e.fn.insertAt=function(e,t){return this.each(function(){0===e?t.prepend(this):t.children().eq(e-1).after(this)})}}(window.jQuery);