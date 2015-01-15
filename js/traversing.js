// get the first div on the page
var divs = $( '.div01' ).first(); // also: .last()

// get the siblings of the divElement item
var siblings = divs.siblings();

// get the next sibling of the divElem item
var nextSibling = divs.next(); // also: .prev()

// get the divElem item's parent
var divElem = divs.parent();

// get the list items that are immediate children of the list
var divItems = divElem.children();

// get ALL list items in the list, including nested ones
var allListItems = divElem.find( '.div01' );

// find all ancestors of the list item that have a class of "main"
var ancestors = divs.parents( '.main' );

// find the closest ancestor of the list item that has a class of "main"
var main = divs.closest( '.main' );