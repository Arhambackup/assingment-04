                                                    NO-01
# getElementById: Retrieves a single, specified element using its unique ID. It is the fastest way, however it only works with IDs.

# getElementsByClassName: Returns all elements with a given class. It produces a "live" collection that updates when the HTML changes, however it does not handle newer loops like.You may easily use forEach().

# querySelector: Selects the first element that meets any CSS selector (such as.class, #id, or div > p).

# querySelectorAll: Grabs all elements that match a CSS selector and stores them in a static list. It is the most versatile and easy to use.forEach() is called immediately.

In brief, use getElementById for unique objects and querySelectorAll for groups of things to loop through.


                                                   NO-02
To create and insert a new element, we have to use this three-step process:

# Create: Use a document.To generate the element, call createElement('tagName').

# Configure: Add content or styles with properties such as.textContent,.className, or.setAttribute().

# Insert: Use methods such as.appendChild() to add it to the end of the DOM, or.prepend() adds to the beginning of a parent container.  

Example:const newDiv = document.createElement('div');
        newDiv.textContent = "Hello World!";
        document.body.appendChild(newDiv);

                                                    NO-03

Event Bubbling is a method of propagating events in the HTML DOM in which an event "bubbles up" from the triggering element to its parents.

How It Works:
# Trigger: You perform an action (such as clicking) on a child element (for example, a button).

# Propagation: The event triggers the handler on the button, then its parent (div), then its grandparent (section), and finally the document and window.

# Utility: It enables you to use Event Delegation, which involves placing a single listener on a parent to manage several children—exactly how we managed your job card delete buttons!


                                                    NO-04
                                                    
By using the Event Delegation approach, you may attach a single event listener to a parent element rather than adding numerous listeners to each child.

How it operates:  Event Bubbling is essential to it. The event "bubbles up" to the parent when a child element (such as a button) is clicked. You utilize event after the parent's listener picks it up.target to determine the precise child that was clicked.

Why it is beneficial : 

# Memory Efficiency: You only utilize one listener for every 100 buttons, saving system memory.

# Dynamic Elements: The delete button will function automatically if you use JavaScript to add a new job card to your list because the parent is already listening for it.


                                                  NO-05

While both strategies "stop" anything from happening, they address fundamentally distinct behaviors:

 1. preventDefault() prevents the browser's default action. For example, it prevents a link from redirecting to a URL or a form from refreshing the page when submitted.

 2. The stopPropagation() method prevents the event from bubbling. It prevents the click (or other event) from propagating up to parent elements, ensuring that only the element you clicked responds.

  # In a nutshell, use preventDefault() to stop the browser and stopPropagation() to prevent additional HTML elements from receiving the event.




