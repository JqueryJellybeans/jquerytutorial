various effects - fading, sliding, animations. Much more concise to write with css

# Fading Effects

* .fadeIn() - fadeIn method takes two parameters .fadeIn([duration], [function]). The duration can be written in milliseconds, or "fast" and "slow". The second parameter (function) is optional, and if used will be a callback function.  

* .fadeOut() - the fadeOut method will be written the same way as the fadeIn, but has the opposite effect. The parameters it takes in are also the same. The two methods will look like this. 

``` $('#divFade').fadeIn(2000)
```

``` $('#divFade').fadeOut(2000)
```

With a second parameter the code may look like
``` $('#divFade').fadeIn(2000, function(){
		$('#divFade').fadeOut(2000);	
	})
```


* .fadeToggle() - Luckily with the jQuery framework we also have the method fadeToggle. This is especially handy when you want a div to fade in and out. It is also written with the same parameters as the fadeIn and fadeOut methods 
```$('#divFade').fadeToggle(2000);
```

One thing to note is that all four of these methods will also run without any parameters
```$('#divFade').fadeToggle();
```

* .fadeTo() - can take up to three parameters. .fadeTo([duration], [opacity], [function]).



* .slideUp()
* .slideDown()
* .slideToggle()
* .animate()
* .stop()

you can also string together the different methods

examples 
$('#moveBox').slideUp()




























