// Plugin Begin
(function( $ ) {
 
	$.fn.typing = function() {

			this.each(function(){

				var $this, int, speed;
				$this = $(this);

				if ( $this.data('int') ) {
					reset($this);
				}
				speed = 50;
				if ( $this.data('typing-speed') ) {
					speed = parseInt( $this.data('typing-speed') );
				}
				console.log('initing...');
				$this.data('count', 0);
				int = setInterval( typinganim, speed, $this );
				$this.data('int', int);

			});

			return this;

	};

	function typinganim($this){	
		console.log('tick');
		var len, count;
		len = $this.text().length;

		if ( $this.data('int') ) {
			count = parseInt( $this.data('count') ) + 1;
			$this.data('count', count); 
			thetext = $this.text();
			thetext = thetext.substring(0, count) + "<span class='js-typing-cursor'></span><span class='js-typing-hide'>" + thetext.substring(count) + "</span>";
			$this.html( thetext );
			if ( count >= len ) {
				reset($this);
			}
		} else {
			console.log('something went wrong');
		}
	}
	
	function reset($this) {
		console.log( 'shutting down' );
		$this.html( $this.text() );
		clearInterval( $this.data('int') );		
	}
	
}( jQuery ));
// Plugin End
