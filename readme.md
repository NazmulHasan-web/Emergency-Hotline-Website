1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
getElementById: Selects a single element by its unique ID.

getElementsByClassName: Selects all elements with a given class name 
querySelector: Selects the first element that matches a CSS selector.

querySelectorAll: Selects all elements that match a CSS selector 

2.How do you create and insert a new element into the DOM?

Ans:
first :Using document createElement() to create an element.
second:By setting inner HTML
third:Using methods like appendChild, to add it to an existing element.

3.What is Event Bubbling and how does it work?
Ans:
Event Bubbling occurs when an event on a child element propagates upward to its parent elements.
It begins at the innermost target element and bubbles up through its ancestors.
Parent elements can respond to the event unless event.stopPropagation() is used.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique where a parent element handles events for its child elements instead of adding listeners to each child.
It works by taking advantage of event bubbling.
It’s useful for improving performance and handling dynamic elements added later.


5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault() stops the element’s default browser action.

stopPropagation() stops the event from bubbling or capturing through the DOM.

