// Fires when a slide with data-state=customevent is activated
Reveal.addEventListener( 'begin', function() {
	$('#hint1_1').html('<strong>hint:</strong>use arrow keys to navigate').hide();	
	
	if(navigator.userAgent.match( /(iPhone|iPad|iPod|Android)/i ) ) {
		$('#hint1_2').html('oh i see you are on your cool gadget. tap or swipe then.').hide();			
	}
	else {
		$('#hint1_2').html('or use your mouse to scroll').hide();						
	}				
	$('#hint1_3').html('...').hide();			
	$('#hint1_4').html('whatever').hide();			
	
	$('#hint1_1').hide().fadeIn(3000, function(){
		$('#hint1_2').hide().fadeIn(1000, function(){
			$('#hint1_3').hide().fadeIn(1000, function(){
				$('#hint1_4').hide().fadeIn(1000, function(){

				});
			});
		});	
	});
} );