/************
 * Version 1.2
 ************/

$(document).ready(function(){
	uniform_init();
	fillform_init();
	
	Cufon.replace('h1,h2,h3,h4,h5,h6', { textShadow : '0 1px #fff' });
	
	Cufon.replace('.button', { textShadow : '0 -1px #424242' });
	
	Cufon.replace('.divider', { textShadow : '0 1px #f7e9b2' });
	
	$('.r-border').each(function(){
		var w=$(this).height()-36;
		$(this).append('<div class="brd" style="height:'+w+'px"/>');
	});
});

/*************************************************************************/




function uniform_init()
{
	$("select, input:text, input:button, input:checkbox, input:radio, input:submit, button, textarea").uniform();
	
	$("input:checkbox, input:radio").each(function(){
		uniform_check_label(this);
	});
	
	$("input:checkbox").change(function(){
		uniform_check_label(this);
	});
	
	$("input:radio").change(function(){
		uniform_check_radio_label(this);
	});
}

function uniform_check_label(obj)
{
	var id=$(obj).attr('id');
	if($(obj).attr('checked') == 'checked')
		$('label[for='+id+']').addClass('checked');
	else
		$('label[for='+id+']').removeClass('checked');
}

function uniform_check_radio_label(obj)
{
	var name=$(obj).attr('name');
	$('input[name="'+name+'"]').each(function(){
		uniform_check_label(this);
	});
}

/*************************************************************************/

// "theForm" block
function fillform_init()
{
	//$('#mainform').find('input[type=checkbox]').each(function(){
	//	$(this).before('<input type="hidden" name="'+$(this).attr('name')+'" value=""/>');
	//});
	
  var options = {
		data: { site: 1 },
		success: fillform_success,
		dataType: 'json',
		beforeSubmit: fillform_before
	}; 	
	
	$("#mainform").validate({
		submitHandler: function(form) {
			$(form).ajaxSubmit(options);
		},
		errorPlacement: function(error, element) {
			error.addClass('errorTip');
			var type=$(element).get(0).type;
			if(type == 'select-one' || type == 'select-multiple')
			{
				error.appendTo($(element).parent().prev('.form-field-name'));
			}
			else if (type == 'checkbox' || type == 'radio')
			{
				error.appendTo($(element).parent().parent().parent().prev('.form-field-name'));
			}
			else
			{
				error.appendTo(element.prev('.form-field-name'));
			}
		},
		highlight: function(element, errorClass) {
			var type=$(element).get(0).type;
			if(type == 'select-one' || type == 'select-multiple')
			{
				$(element).parent().addClass(errorClass);
			}
			else if (type == 'checkbox' || type == 'radio')
			{
				$(element).parent().parent().parent().addClass(errorClass);
			}
			else
			{
				$(element).addClass(errorClass);
			}
		},
		unhighlight: function(element, errorClass) {
			var type=$(element).get(0).type;
			if(type == 'select-one' || type == 'select-multiple')
			{
				$(element).parent().removeClass(errorClass);
			}
			else if (type == 'checkbox' || type == 'radio')
			{
				$(element).parent().parent().parent().removeClass(errorClass);
			}
			else
			{
				$(element).removeClass(errorClass);
			}
		},
		wrapper: 'span'
	});

}

function fillform_before()
{
	var $obj=$('#mainform');
	$obj.fadeTo(300,0.5);
	$obj.before('<div id="mainform_blocker" style="position:absolute;width:'+$obj.outerWidth()+'px;height:'+$obj.outerHeight()+'px;z-index:9999;background:url(img/ajax-loading.gif) no-repeat center center"></div>');
}

function fillform_success(obj)
{
	$('#mainform_blocker').remove();
	$('.form-inner').css('height',$('.form-inner').height()+'px');
	if(obj.error == 0)
	{
		$('#mainform').slideUp(500,function(){
			$('#mainform').remove();
			$('#mainform_success').fadeIn(200);
			$.scrollTo(0,400);
		});
	}
	else
	{
		$('#mainform').slideUp(500,function(){
			$('#mainform').remove();
			$('#mainform_error').fadeIn(200);
			$.scrollTo(0,400);
		});		
	}
}
