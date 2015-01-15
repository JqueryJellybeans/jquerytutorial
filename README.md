=======
#jQuery Tutorial
===

>"jQuery ... it's just JavaScript" <br>
>        				- Maria


## Background
---

jQuery is a feature-rich JavaScript library created by John Resig in 2006 with the purpose of making JavaScript easier to use, hence the motto: **_Write less, do more._**

It does not replace JavaScript (the code you write in jQuery is still JavaScript - as you'll hear from most js purists!), but it does simplify tasks by writing less code.

Here are some the important core features supported by jQuery:

 * DOM manipulation
 * Effects

Today CSS3 and JS allow you to do many of the things that jQuery was originally made for.
[You Might Not Need jQuery](http://youmightnotneedjquery.com/) is a handy site that compares jQuery to JS and lets you determine if you need jQuery or not.

The great thing about jQuery is the number of plug-ins or libraries available that you can leverage. 

## ways to implement in your site
1. Access the jQuery core libraries:
   * there are a few ways to do this. You can download the compressed and uncompressed files. jQuery has opinions on which files are better for which purposes.
   You can find out more about that here: [jQuery downloads] (http://jquery.com/download/).
   * CDN
1. Link to jQuery library through your HTML file:
   * First you want to link to the jQuery core library through a script tag in your HTML file.
   if you downloaded:

	```
	<script src="jquery.js"></script>

    ```
   if you used a CDN:

	```
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    ```
   The src attribute in the `<script>` element must point to a copy of jQuery.

 ### importance of the structure

 links need to have jquery first
 any other libraries you'll be using
 your scripts

## basics - syntax



$ creates an object in jQuery - allows you to use the jQuery library


The jQuery syntax is made for selecting HTML elements and performing actions on html elements.

Basic syntax is: $(selector).action()

You can write javascript inside jQuery

$() is just shorthand for jQuery()

jQuery grabs items in an easier way than javascript

	element = document.querySelector('li')

	element = $('li')


1. Before starting to use jQuery you'll need to get the document ready.
Document refers to your file.

	$(document).ready(function(){
			do something...
	})

2. You can grab by html elements, classes or ids..

	```
	$( '#nav-menu' ); // select via ID
	$( 'li' );      // select all list items on the page
	$( 'ul li' );   // select list items that are in unordered lists
	$( '.person' ); // select all elements with a class of 'person'
	```
	
	You can also grab via DOM elements like children, firstBodyChild.
 In order to grab a single element:

 	var listItems = $( 'li' );
	var rawListItem = listItems[0]; // or listItems.get( 0 )
	var html = rawListItem.innerHTML;


2. Creating a new element in jQuery:
	
	```
	$( '<p>', {					// create the element
		html : "Hello World",	// call on html to change the innerHTML
		"class": "greeting",	// assign the class -- note that id
		"id": "my_greeting"		// assign the id
	);

	$( '.person' ); // select all elements with a class of 'person'
	```
	
3. You can also grab via DOM elements like children, firstBodyChild.
 In order to grab a single element:

 	```
 	var listItems = $( 'li' );
	var rawListItem = listItems[0]; // or listItems.get( 0 )
	var html = rawListItem.innerHTML;
	```

  or

	```
	var listItems = $( 'li' );
	var secondListItem = listItems.eq( 1 );
	secondListItem.remove();
	```
	
4. There are 2 types of methods:
   * Getters - methods that grab elements from the document `var first = listItems.get(0)`
   * Setters - change the selection in some way `$( "li" ).html = "examples"`
		*Iteration

		```
		// grab all li and change inner HTML to string "I'm a string"
		$( "li" ).html( "I'm a string" );

		```

5. One cool thing about jQuery is the ability to chain methods. For example:

	```
	 // grab li
	 $( 'li' )
    // when li element is clicked
    .click(function() {
    // add a class to the li called ".clicked"
    	$( this ).addClass( 'clicked' );
  		})
  	// still chained to li, now we use .find to select spans within li
  		.find( 'span' )
	// set title to "Hover over me"
    .attr( 'title', "Hover over me" );
 	```





# Effects
---

### Fading Effects
---

* .fadeIn() - fadeIn method takes two parameters .fadeIn([duration], [function]). The duration can be written in milliseconds, or "fast" and "slow". The second parameter (function) is optional, and if used will be a callback function.  

* .fadeOut() - the fadeOut method will be written the same way as the fadeIn, but has the opposite effect. The parameters it takes in are also the same. The two methods will look like this.

```
$('#divFade').fadeIn(2000)

```

```
$('#divFade').fadeOut(2000)
```

With a second parameter the code may look like

```
$('#divFade').fadeIn(2000, function(){
        $('#divFade').fadeOut(2000);
    })
```

* .fadeToggle() - Luckily with the jQuery framework we also have the method fadeToggle. This is especially handy when you want a div to fade in and out. It is also written with the same parameters as the fadeIn and fadeOut methods
```
$('#divFade').fadeToggle(2000);

```

One thing to note is that all four of these methods will also run without any parameters
```
$('#divFade').fadeToggle();
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

## Sliding Effects

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



## The Animate Method
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







## Events
---
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

### Binding and Unbinding

If there is a scenario where you need an element to have an event listener, and then eventually remove that event listener you can utilize the bind and unbind methods.

.bind() - this method will act similar to the event listener methods above, the only exception is the event type is not a handler. It is written as (selector).bind(event type, function). An example is below:

```$('button').bind("click", function(){
	alert("you have clicked the button");
})
```

.unbind() - this method will remove the event listener from an element. It can be written as (selector).unbind(event type, function). With unbind, the second parameter is not required. An example is below:

```$('button').unbind('click');
```




### AJAX

The days of refreshing a webpage to load content are gone. AJAX, short for Asynchronous Javascript and XML will allow the user to take data from the background and load it to your webpage. Since the Ajax requests are triggered by Javascript code, it is asynchronous, and the rest of your code will continue to execute at the same time.


Ajax is handled differently between browsers. jQuery allows developers to get around this by offering methods such as the .ajax(), .get(), .getScript(), .getJSON(), .load(), and the like.


The .ajax() method is a way of creating an asynchronous http request. Make sure that the data received from the server is in the format that you requested; if not your code may fail. The .ajax() method is written as so: jQuery.ajax(url[settings]). There are a plethora of settings developers can input when using the method. For a full list of these settings, and their parameters you can visit http://api.jquery.com/jQuery.ajax/. One example of this methods utilization is:

```$.ajax({
	statusCode: {
		404: function() {
			alert("sorry the page was not found");
		}
	}
});
```




## Traversal - Moving through your document elements
---


1. jQuery lets us traverse or "move through" the html elements on our page. Let's set an example html frame:
  

   ```
	<body> //ancestor of all, parent of div.d01 and div.d02
    	<div class = "d01"> // child of body, parent of h3, sibling of d02
        	<h3>I'm a little string, short and stout</h3> // descendent of div.d01
      	</div>
    	<div class = "d02"> // child of body, parent of h4, sibling of d01
    		<h3>I'm a little string too, but I don't pout</h3> // descendent of div.d02
    	</div>
	</body>
  ```

   Every div has its own index, and can be located directly by using eq(index) method as below example.


2. Setting an initial selection:

  Every child element starts its index from zero, thus, div item 2 would be accessed by using $("div").eq(1) or $(".d02").

  You can also use the find (selector) method to find the elements.
  
  ```
  	$(document).ready(function() {
  		// finds h3 elements inside all divs and adds class selected
      $("div").find("h3").addClass("selected");  
   });
   ```

# Plugins
---
###Links

Here are some examples of plugins that use jQuery to build powerful effects.

[ScrollMagic](http://janpaepke.github.io/ScrollMagic/)  
Scroll Magic is a plugin that allows you to render multiple effects while scrolling down a page.

[oriDomi](http://oridomi.com/)  
This plugin allows you to crumple an image on the screen like a piece of paper.

[Zoomooz.js](http://jaukia.github.io/zoomooz/)  
Zoomooz allows you to zoom and manipulate screen position.

[midnight.js](http://aerolab.github.io/midnight.js/)  
Midnight allows you to switch fixed headers as you scroll down the page.

[vibe](http://vodkabears.github.io/vide/)  
This allows you to add video backgrounds to your page.

[parallax.js](http://matthew.wagerfield.com/parallax/)  
Parallax.js allows you to create depth and motion to your site that reacts to cursor and smart device movement. Check it out!
