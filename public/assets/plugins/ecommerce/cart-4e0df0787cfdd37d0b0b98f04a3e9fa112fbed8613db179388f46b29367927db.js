function cama_ecommerce_call_validator(t){$.getScript("http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js",t)}function cama_ecommerce_payments(){$("#e-payments-types").find("form").each(function(){$(this).validate()})}function cama_checkout_actions(){if(!jQuery.fn.validate)return cama_ecommerce_call_validator(cama_checkout_actions);var t=$("#cama_checkout_view"),e=t.find(".stepwizard-row .stepwizard-step").bind("next_step",function(){var e=$(this).find("a"),i=$(this);return!i.hasClass("active")&&(e.removeClass("btn-default").addClass("btn-primary").parent().addClass("active").siblings().removeClass("active").find("a").removeClass("btn-primary").addClass("btn-default"),i.prevAll().find("a").add(e).removeAttr("disabled"),t.find(e.attr("href")).fadeIn().siblings().hide(),!1)});e.find(".btn-circle").click(function(){return $(this).attr("disabled")||$(this).parent().trigger("next_step"),!1}),e.first().trigger("next_step"),t.find("#checkout_address_form").validate({submitHandler:function(t){return $(t).fadeTo("fast",.4),$.post($(t).attr("action"),$(t).serialize(),function(){e.filter(".active").next().trigger("next_step")}).complete(function(){$(t).fadeTo("fast",1),$(window).scrollTop($("#cama_checkout_view").offset().top)}).error(function(t){alert(t.responseText)}),!1}}),t.find("#checkout_address_form #billing_address input").blur(function(){t.find("#checkout_address_form #"+$(this).attr("id").replace("billing_address","shipping_address")).val($(this).val())}),t.find("#checkout_shipping_form").validate({submitHandler:function(i){return $(i).fadeTo("fast",.4),$.post($(i).attr("action"),$(i).serialize()+"&next_step=true",function(i){t.find("#step-3").html(i),e.last().trigger("next_step")}).complete(function(){$(i).fadeTo("fast",1)}).error(function(t){alert(t.responseText)}),!1}}),t.find("#shipping_methods").change(function(){var e=t.find("#checkout_shipping_form");e.fadeTo("fast",.4),$.post(e.attr("action"),e.serialize(),function(e){t.find("#product_details").html(e)}).complete(function(){e.fadeTo("fast",1)}).error(function(t){alert(t.responseText)})}).trigger("change"),t.find("#e_coupon_apply_box input:text").keydown(function(t){if(13==t.keyCode)return $(this).next().find("button").click(),!1}),t.find("#e_coupon_apply_box button").click(function(){var e=$(this),i=t.find("#checkout_shipping_form");i.fadeTo("fast",.4),$.post($("#e_coupon_apply_box").attr("data-href"),{code:t.find(".coupon-text").val(),authenticity_token:t.find("#e_coupon_apply_box").attr("data-token")},function(i){t.find("#product_details").html(i),e.closest("#coupon").html("")}).error(function(t){alert(t.responseText)}).complete(function(){i.fadeTo("fast",1)})}),t.find("#ec_copy").click(function(){return t.find("#shipping_address").find("input, select, textarea").each(function(){var t=$(this).attr("id").replace("shipping","billing");$(this).val($("#billing_address #"+t).val())}),!1})}