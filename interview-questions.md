# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 'this' is the means of letting your computer know that the variable or function you want to call on is local to the current code.

  Researched answer: 'this' is a keyword used to reference an object via use of dot notation. Its purpose is to tell a program where to access reference values or data from.
  

2. What is React? Why would you use it?

  Your answer: React is a coding module that uses JSX, a language that allows for creative representation of javascript through use of integrated HTML. Its purpose is to allow for dynamic pages that have extremely fast load times due to it only refreshing the part of the page/script where a change is being made. I would use it for pages/sites that are intended to be interactive, dynamic, with little rendering time.

  Researched answer: React is a code library used to build interactive user interfaces. HTML and CSS are used curate the visual side of an application, while JS is used to create functionality. React is useful because it efficiently updates and renders on the components that have undergone change, resulting in greater speed and efficiency than other means of coding.



3. Which lifecycle method is required in a React class component?

  Your answer: render() is required; it acts as the javascript command to "run" the JSX that is within its curly braces.

  Researched answer: render() is the only required method in a React class. When it is called it is seeking this.props and/or this.state, then returning one of the following: react elements ( <Component /> ), arrays and fragments, portals, string and numbers, or booleans or null. The render() function does not modify components, returns the same result per each invocation, and does not directly interact with the browser.



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is a language that allows for creative representation of javascript through use of integrated HTML.

  Researched answer: JSX (JavaScript Syntax Extension) is syntatic sugar that produces elements in React. Although use of JSX is not required in React it is useful because it allows programmers to work on visual and functional code simultaneously, and it allows for more useful error messages. The major difference between JSX and HTML is that JSX requires a return, or it won't compile.


5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: "yet another ..." (cannot recall what that 'rn' stands for) is a package manager. Node modules are added for the particular coding environment needed (i.e. if setting up a test environment $yarn jest will gather appropriate modules needed to operate jest; $yarn create react-app sets up for the react environment).

  Researched answer: Yarn is a package manager created by Facebook in collaboration with engineers from Exponent, Google, and Tilde that replaces, yet is compatible with npm. It operates faster, more securely, and more reliably. It is able to do so via its install process:

      a) Resolution -- code dependencies are resolved by requests made to the registry looking up each dependency
      
      b) Fetching -- packages needed are then compared to global cache directory of the user's system, if it hasn't already been downloaded Yarn fetches the package and places it in global cache so it can be used offline.
     
      c) Linking -- Yarn then links everything together by copying all files needed from the global cache into the local node_modules directory


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: Unsure (see researched answer below).

  Researched answer: An anonymous function is a function without a name. It can have many arguments but only one output/expression. In order to access it after creation it must be assigned to a variable.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: A term that describes how a user interface is rendered based upon a given condition (i.e. showing or hiding elements, handling authentication and authorization, rendering external data from an API, etc).

2. Object-oriented programming: A programming model that focuses on designing software that manipulates data or objects, rather than the logic that is required to do the manipulation. Object-oriented programming (OOP) touts reusability, scalability, and efficiency. It is a great option for large, complex programs.

3. Ruby: An open source programming language that is used for object-oriented programming. 

4. Ruby blocks: Ruby blocks are anonymous functions that can have multiple arguments, are enclosed using a do/end statement or {}, and are ultimately passed into methods.

5. Ruby hashes: A collection of key-value pairs whose default indexing is arbitrary, thus referencing values must be done using their unique key

