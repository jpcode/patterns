var Singleton = (function(){
	var instance;
	function init(){
		var privateVariable = new Date().getTime();
		function privateMethod(){
			return "private";
		}
		return {
			publicMethod : function(){
				console.log('public');
			},
			publicProperty : "Public",
			getVariable : function(){
				return privateVariable;
			}
		};
	}
	return {
		getInstance : function(){
		    if ( !instance ) instance = init();
		    return instance;
		}
	}
 })();

 //testing
 var A,B;
 A = Singleton.getInstance();
 setTimeout( function(){
      B = Singleton.getInstance();
      console.log( A.getVariable() === B.getVariable() );
 },1)
