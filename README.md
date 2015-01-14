=======
#jQuery Tutorial
===

## background
jQuery is a feature-rich JavaScript library created by John Resig in 2006 with the purpose of making JavaScript easier to use.
Hence the motto of: **_Write less, do more._**

It does not replace JavaScript (the code you write in jQuery is still JavaScript), but it does simplify tasks by
writing less code.
Here are some the important core features supported by jQuery:

 * DOM manipulation
 * Effects

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
it is r

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

	$( '#nav-menu' ); // select via ID
	$( 'li' );      // select all list items on the page
	$( 'ul li' );   // select list items that are in unordered lists
	$( '.person' ); // select all elements with a class of 'person'	
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

4. Creating a new element in jQuery is as easy as:
	
	```
	$( '<p>', {					// create the element
		html : "Hello World",	// call on html to change the innerHTML
		"class": "greeting",	// assign the class -- note that id 
		"id": "my_greeting"		// assign the id 
	); 
	```









## what are some popular uses

## effects

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



## events

## traversing
