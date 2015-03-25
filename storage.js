var storage = (function(){	
	/*
		private
	*/
	function set(prop, val)
	{
		localStorage.setItem(prop, val);
	};
	
	function get(prop)
	{
		return localStorage[prop] ? JSON.parse(localStorage.getItem(prop)) : false;
	};
	
	function remove(prop)
	{
		localStorage.removeItem(prop);
	};
	
	function clear()
	{
		localStorage.clear();
	}

	function trace()
	{
		typeof console == "object" ? console.dir(localStorage) : alert(localStorage)
	}
	
	
	/*
		public
	*/
	return {
		data:function(prop, val)
		{
			if(val == undefined)
			{
				return get(prop);
			}
			else
			{
				set(prop, JSON.stringify(val));
			}
		},
		remove:function(prop)
		{
			remove(prop);
		},
		clear:function()
		{
			clear();
		},
		trace:function()
		{
			trace();
		}			
	}
})();
