function autocompleteQuery(name) {
	
	JsHttpRequest.query(
		'backend.php',
		{ 'backend':'autocomplete.' + name, 'query':$('#autocomplete-query-' + name).val() },
		function(result, errors) {
			if (!errors) {
				$('#autocomplete-result-' + name).html(result);
			} else {
			}
		},
		false
	)
	
	$('#autocomplete-result-' + name).removeClass('hidden');

}

$('.autocomplete-query').live('focus', function () {
	
	autocompleteQuery(name);
	
});

$('.autocomplete-query').live('keyup', function () {

	var name = $(this).attr('name');
	
	autocompleteQuery(name);
	
	$('#autocomplete-value-' + name).val('');
	
});

$('.autocomplete-result li').live('mousedown', function() {

	var name = $(this).attr('id').replace(/autocomplete-value-/ig, '').replace(/-[0-9]+/ig, '');
	var id = $(this).attr('id').replace(/autocomplete-value-[a-z]+-/ig, '');
	var title = $(this).html();
	
	$('#autocomplete-value-' + name).val(id);
	$('#autocomplete-query-' + name).val(title);
	$('#autocomplete-result-' + name).addClass('hidden');
	
	if (name == 'source' && $('#autocomplete-value-source').val() != '') {
	
		var masterId = $(this).attr('title').replace(/\W\|\W.+/, '');
		var masterName = $(this).attr('title').replace(/[0-9]+\W\|\W/i, '');
	
		$('#autocomplete-value-master').val(masterId);
		$('#autocomplete-query-master').val(masterName);		
	
	}
	
});

$('.autocomplete-query').live('blur', function() {

	var name = $(this).attr('name');
	
	$('#autocomplete-value-' + name).val();
	$('#autocomplete-result-' + name).addClass('hidden');
	
});

/*Dropdown menu*/
$(document).ready(function() {

	$('.menu-trigger').click(function() { 
		$('.menu').slideToggle(500);
		$('.menu-trigger').toggleClass('menu-trigger-transform');
	});
	$(window).resize(function() {
		if ($(window).width() >1500) {
			$('.menu').removeAttr('style');
		}
	});
});
