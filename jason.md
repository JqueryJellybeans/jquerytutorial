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



# Sliding Effects

* .slideUp()
* .slideDown()
* .slideToggle()

The format for these three methods can take up to three parameters, or none at all. 
the first parameter will be the speed that the sliding effect completes at. It can be written in milliseconds, "fast" or "slow". The second parameter is the easing parameter. There are two options, "swing" and "linear". By using "swing" the sliding effect will be slow in the beginning and end, but fast in the middle. The "linear" easing will keep the sliding effect at a constant speed throughout. If there is no defined easing parameter it will slide in the "swing" motion. The third parameter is a callback function to be executed when the sliding effect is completed. An example for all three are show below. 

```$('#slideMe').slideUp(2000, "linear");
```
```$('#slideMe').slideDown(2000, "swing");
```
```$('#slideMe').slideToggle();



# The Animate Method
* .animate() - jQuery comes with a very handy animate method. The method accepts up to three parameters. It will be written as .animate({parameters}, speed, [function]);. The first parameter will be a object of the changing animations. You can utilize various css values inside the curly brackets and their movements. The second parament is the speed at which the animations will take place, and the function will be executed when the effects are completed. An example is shown below:

```$('#movingDiv').animate({
	left: '250px',
	top: '100px',
	opacity: '0.5',
}, 2000)
```



* .stop() - the stop method will stop the current animation as it stands. You can utilize this method if you have an animation, and provide the user a button to pause the animation. stop() can have up to two parameters, or take none at all. Both parameters are boolean values that will take true or false. The first parameter determines if you want to pause the animation or "clear the queue" and the second parameter determines if you want to jump to the end of the animation or not. These can be decided using the booleans "true" or "false"

$('#movingDiv').stop(true, false);


* .finish() - the finish method is similar to the stop method. However, it will always jump to the end of the animation. Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.

$('#movingDiv').finish();




you can also string together the different methods

examples 
$('#moveBox').slideUp().fadeOut();







# Events

jQuery allows you, the developer, to write code easily for users to interact with the webpage. Some of the more common event methods are:
* .click()
* .keyup()
* .keydown()
* .keypress()
* .scroll()
* .mouseenter()
* .mouseleave()
* .mouseover()

The syntax for these methods are usually written as "$('element that is selected')(event type)(function);" An example is below. 

```$('button').click(function(){
	alert('Hello World');
})
```

```$('#image').mouseover(function(){
		$('#image').slideUp(2000, 'linear');
})
```

```$('input').keypress(function(evt){
	if (evt.key === 13){
		alert("you pressed enter");
	}
})
```

## Binding and Unbinding

If there is a scenario where you need an element to have an event listener, and then eventually remove that event listener you can utilize the bind and unbind methods. 

.bind() - this method will act similar to the event listener methods above, the only exception is the event type is not a handler. It is written as (selector).bind(event type, function). An example is below:

```$('button').bind("click", function(){
	alert("you have clicked the button");
})
```

.unbind() - this method will remove the event listener from an element. It can be written as (selector).unbind(event type, function). With unbind, the second parameter is not required. An example is below:

```$('button').unbind('click');
```




# AJAX

The days of refreshing a webpage to load content are gone. AJAX, short for Asynchronous Javascript and XML will allow the user to take data from the background and load it to your webpage. Since the Ajax requests are triggered by Javascript code, it is asynchronous, and the rest of your code will continue to execute at the same time. 

Ajax is handled differently between browsers. jQuery allows developers to get around this by offering the main method .ajax(), along with other convenience methods such as .get(), .load(), and the like.

The .ajax() method is a way of creating an asynchronous http request. Make sure that the data received from the server is in the format that you requested; if not your code may fail. The .ajax() method is written as so: jQuery.ajax(url[settings]). There are a plethora of settings developers can input when using the method. For a full list of these settings, and their parameters you can visit http://api.jquery.com/jQuery.ajax/. One example of this methods utilization is:

```$.ajax({
	statusCode: {
		404: function() {
			alert("sorry the page was not found");
		}
	}
});
```

































