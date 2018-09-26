(function() {
		// Optimization for Repeat Views
		if( sessionStorage.fontsLoadedFoutWithClass ) {
			document.documentElement.className += " fonts-loaded";
			return;
		}
		if( "fonts" in document ) {
			Promise.all([
				document.fonts.load("400 1em Roboto"),
				document.fonts.load("700 1em Roboto"),
				document.fonts.load("300 1em Roboto")
			]).then(function () {
				document.documentElement.className += " fonts-loaded";
				// Optimization for Repeat Views
				sessionStorage.fontsLoadedFoutWithClass = true;
			});
		}
})();
