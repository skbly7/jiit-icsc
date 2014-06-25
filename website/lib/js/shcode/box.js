
jQuery(document).ready(function() {
	
	/*reset inputs when page is reloaded*/
	resetBoxSettings();
	
	jQuery('#box_type').change(function() {
		jQuery('#box_sample').attr('class','okrdx-box '+ jQuery(this).val());
	});
	
	
	jQuery('#box_text_size').change(function() {
		jQuery('#box_sample').css('font-size',jQuery(this).val());
	});
	
	jQuery('#box_content').keyup(function() {
		
		if(jQuery('#box_content').val() != ''){
			jQuery('#box_sample').html('<span class="okrdx-ico"></span>'+jQuery('#box_content').val());
		}
		else{
			jQuery('#box_sample').html( '<span class="okrdx-ico"></span>'+'Box content.' );
		}
		
	});
	
});

function insertBox(){
	
	var content = 'Box content';
	
	if ( jQuery.trim(jQuery('#box_content').val()) != ''  ){
		var content = jQuery.trim(jQuery('#box_content').val());
	}
	
	
	if(jQuery.trim(jQuery('#box_content').val()) != ''){
		content = jQuery('#box_content').val();
	}
	var box_shcode = '[box type="'+jQuery('#box_type').val()+'" size="'+jQuery('#box_text_size').val()+'"] '+content+' [/box]';		
	
	Editor.AddText( "content" , "\n"+box_shcode+"\n");
	showNotify();
}

function resetBoxSettings(){
	jQuery('#box_content').val('');
	jQuery('#box_type option:first').attr('selected','selected');
	jQuery('#box_size option:first').attr('selected','selected');
	jQuery('#box_sample').attr('class','okrdx-box default');
	jQuery('#box_sample').html( '<span class="okrdx-ico"></span>'+'Box content.' );
}