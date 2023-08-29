# WHAT IS THE DOM ?
document object model structerd representation of html document allowes java sccript access htm; elements and styles to manipulate them
## The dom tree structure
![](https://th.bing.com/th/id/OIP.uzhVxfP5YBjCNqYPmfBKxgHaFM?w=212&h=180&c=7&r=0&o=5&pid=1.7)
# DOM
According to the Document Object Model (DOM for short), every HTML tag is an object.
Subtags are "children" of the parent element. The text that is inside the tag is also an
object.All these objects are available with JavaScript, we can use them to modify the page.
JavaScript can modify all HTML elements on a page.
JavaScript can change all HTML attributes on a page.
JavaScript can change all CSS styles on a page.
JavaScript can remove existing HTML elements and attributes.
JavaScript can add new HTML elements and attributes.
JavaScript can respond to all existing HTML events on the page.
JavaScript can fire new HTML events on a page
Definition and Usage. The querySelector() method returns the first child element that matches a
specified CSS selector(s) of an element, querySelectorAll() method can be used to access all elements
which match with a specified CSS selector.
# Html events …
An HTML event can be something the
browser does, or something a user does.
Here are some examples of HTML events:
•An HTML web page has finished loading
•An HTML input field was changed
•An HTML button was clicked
JavaScript lets you execute code when events are detected.
onclick The user clicks an HTML element
## createElement()
The JavaScript document.createElement() method allows you to create and return a
new element (an empty Element node) with the specified tag name.
1) createElement(elementName): Creates an html element whose tag is
passed as a parameter. Returns the created element
![](https://th.bing.com/th/id/OIP.gC1KgkWG0k56mY5tVaUWGwHaC7?w=287&h=138&c=7&r=0&o=5&pid=1.7)
### HTML DOM Element appendChild()
To create a paragraph with a text.
•Create a paragraph element
•Create a text node
•Append the text node to the paragraph
•Append the paragraph to the document.
## classlist()
ClassList is a getter. The object it returns has several methods:
add( String [,String] )
Adds the specified classes to the element
remove( String [,String] )
Removes the specified classes from the element
toggle(String[, Boolean])
If the element has no class, it adds it, otherwise it removes it. When
false is passed as the second parameter, it removes the specified
class, and if true, it adds it.
If the second parameter is undefined or a variable with
typeof == 'undefined', the behavior is the same as passing only the
first parameter when calling
