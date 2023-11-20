// Define an object with arrays of keywords and their corresponding responses
const responses = {
    "greeting": ["hello", "hi", "hey", "hi there"],
    "goodbye": ["goodbye", "bye", "see you later"],
    "thank you": ["thank you", "thanks"],
    "help": ["help", "need help", "can you help me"],
    "weather": ["weather", "how's the weather", "what's the weather like"],
    "python": ["what is python", "define python"],
    "type of language": ["type of language"],
    "key features": ["key features","features"],
    "interpreted language": ["interpreted language"],
    "Mutable datatype and an Immutable data type": ["difference between Mutable datatype and Immutable","difference between Immutable and Mutable datatype"],
    "shallow copy and a deep copy": ["difference between shallow copy and deep copy","difference between and deep copy and shallow copy"],
    "pickling and unpickling": ["pickling and unpickling"],
    "map function": ["map function"],
    "reduce function": ["reduce function"],
    "zen": ["Zen"],
    "significance of indentation": ["significance of indentation"],
    "operator":["operator"],
    "try except block":["try except block"],
    "class":["class"],
    "object":["object"],
    "inheritance":["inheritance"],
    "polymorphism":["polymorphism"],
    "encapsulation":["encapsulation"],
    "print()":["print() function"],
    "len()":["len() function"],
    "input()":["input() function"],
    "str(), int(), float()":["str() function","int() function","float() function"],
    "range()":["range() function"],
    "min() and max()":["max() function"],
    "sum()":["sum() function"],
    "benefits":["benefits of Python"],
    "memory managed":["memory managed"],
    "static analysis tools":["static analysis tools"],
    "decorators":["decorators"],
    "list and tuple":["difference between list and tuple","difference between tuple and list"],
    "arguments passed":["arguments passed"],
    "Dict and List comprehensions":["Dict and List comprehensions"],
    "built-in":["built-in type"],
    "namespace":["namespace"],
    "lambda":["lambda"],
    "pass":["pass"],
    "iterators":["iterators"],
    "unittest":["unittest"],
    "slicing":["slicing"],
    "generators":["generators"],
    "docstring":["docstring"],
    "copy an object":["copy an object"],
    "negative index":["negative index"],
    "number to a string":["convert number to string"],
    "xrange and range":["difference between xrange and range"],
    "module and package":["module","package"],
    "rules for local and global variables":["rules for local and global variables","rules for global and local variables"],
    "share global variables across modules":["share global variables across modules",],
    "Python Script executable on Unix":["script executable on unix"],
    "delete a file":["delete a file"],
    
    // add more keyword and response arrays here as needed
  };
  
  // Define a function to process user input
  function processInput(input) {
    // Convert the input to lowercase and remove any punctuation
    input = input.toLowerCase().replace(/[^\w\s]/gi, "");
  
    // Loop through the responses and look for a keyword match
    for (const [category, keywords] of Object.entries(responses)) {
      for (const keyword of keywords) {
        if (input.includes(keyword)) {
          // If a keyword match is found, return a corresponding response
          return getCategoryResponse(category);
        }
      }
    }
  
    // If no keyword match was found, return a default response
    return "I'm sorry, I didn't understand. Can you please rephrase your question?";
  }
  
  // Define a function to get a response for a given category
  function getCategoryResponse(category) {
    // Define an object with responses for each category
    const categoryResponses = {
      "greeting": ["Hello! How can I help you?", "Hi there! How may I assist you?", "Hey! What can I do for you?"],
      "goodbye": ["Goodbye! Have a nice day.", "Bye! It was nice talking to you.", "See you later!"],
      "thank you": ["You're welcome!", "No problem!", "Glad I could help."],
      "help": ["Sure, what do you need help with?", "Of course! How can I assist you?", "What do you need help with?"],
      "weather": ["The weather is sunny today!", "It's a bit cloudy today.", "Looks like it might rain later."],
      "python": ["Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation…"],
      "type of language":["Python is a high-level programming language"],
      "key features":["Python is an interpreted language, dynamically typed, has extensive support libraries and presence of third-party modules."],
      "interpreted language":["Python is an interpreted language because it does not need to be compiled before it is run"],
      "Mutable datatype and an Immutable data type":["Mutable data types can be edited i.e., they can change at runtime while Immutable data types can not be edited i.e., they can not change at runtime."],
      "shallow copy and a deep copy":[" A shallow copy creates a new object which stores the reference of the original elements while a deep copy creates a new object and recursively adds the copies of nested objects present in the original elements."],
      "pickling and unpickling":["Pickling is the process of converting a Python object into a byte stream to store it in a file/database while unpickling is the inverse operation, where the byte stream is converted back into an object."],
      "map function":["The map function applies a given function to each item of an iterable (list, tuple etc.) and returns a list of the results."],
      "reduce function":["The reduce function applies a rolling computation to sequential pairs of values in a list."],
      "zen":["The Zen of Python is a collection of guiding principles for writing computer programs in the Python language. It was written by Tim Peters and can be accessed by typing import this in the Python interpreter."],
      "significance of indentation":["In Python, indentation is used to define code blocks. The amount of indentation is up to you, but it must be consistent throughout that block."],
      "operator":["An operator in Python is a symbol that performs a specific operation on one or more operands."],
      "try except block":["A try except block in Python is used to catch and handle exceptions. The code that might raise an exception is placed inside the try block and the code that handles the exception is placed inside the except block."],
      "class":["A class in Python is a blueprint for creating objects. It defines the attributes and methods that the objects created from it will have."],
      "object":["An object in Python is an instance of a class. It has its own attributes and methods that are defined by the class."],
      "inheritance":["Inheritance in Python is a way of creating a new class by inheriting the attributes and methods of an existing class."],
      "polymorphism":["Polymorphism in Python refers to the ability of an object to take on many forms. It allows us to use a single interface to represent different types of objects."],
      "encapsulation":["Encapsulation in Python refers to the practice of hiding the internal details of an object and providing a public interface for interacting with the object."],
      "print()":["The print() function is used to output text or variables to the console.Example: print('Hello, world!')"],
      "len()":["The len() function is used to determine the length of a string, list, or other iterable. Example: string = 'Hello';length = len(string);print(length)"],
      "input()":["The input() function is used to prompt the user for input from the console. Example: name = input('What is your name?');print('Hello,'+ name + '!')"],
      "str(), int(), float()":[" These functions are used to convert values between different data types. Example: string = '42';integer = int(string);float_number = float(string)"],
      "range()":["The range() function is used to generate a sequence of numbers. Example: for i in range(10):print(i)"],
      "min() and max()":["These functions are used to determine the minimum and maximum values in a list or other iterable. Example: numbers = [1, 2, 3, 4, 5];minimum = min(numbers);maximum = max(numbers);print(minimum,maximum)"],
      "sum()":["The sum() function is used to calculate the sum of all elements in a list or other iterable.Example: numbers = [1, 2, 3, 4, 5];total = sum(numbers);print(total)"],
      "benefits":["The benefits of pythons are that it is simple and easy, portable, extensible, build-in data structure, and it is open-source."],
      "memory managed":["Python memory is managed by Python private heap space. All Python objects and data structures are located in a private heap. The programmer does not have an access to this private heap, and the interpreter takes care of this Python private heap.The allocation of Python heap space for Python objects is done by the Python memory manager. The core API gives access to some tools for the programmer to code.Python also has an inbuilt garbage collector, which recycles all the unused memory and frees the memory and makes it available to the heap space."],
      "static analysis tools":["PyChecker is a static analysis tool that detects the bugs in Python source code and warns about the style and complexity of the bug. Pylint is another tool that verifies whether the module meets the coding standard."],
      "decorators":["A Python decorator is a specific change that we make in Python syntax to alter functions easily."],
      "list and tuple":["The difference between list and tuple is that list is mutable while tuple is not. Tuple can be hashed, for example., as a key for dictionaries."],
      "arguments passed":["Everything in Python is an object, and all variables hold references to the objects. The reference values are according to the functions. Therefore, you cannot change the value of the references. However, you can change the objects if it is mutable."],
      "Dict and List comprehensions":["They are syntax constructions to ease the creation of a Dictionary or List based on existing iterable."],
      "built-in":["Python provides two built-in types: 1) Mutable and 2) Immutable. Mutable built-in types are: List,Sets,Dictionaries,Immutable built-in types,Strings,Tuples,Numbers. Immutable built-in types are: Strings,Tuples,Numbers."],
      "namespace":["In Python, every name introduced has a place where it lives and can be hooked for. This is known as a namespace. It is like a box where a variable name is mapped to the object placed. Whenever the variable is searched out, this box will be searched to get the corresponding object."],
      "lambda":["It is a single expression anonymous function often used as inline function."],
      "pass":["Pass means no-operation Python statement, or in other words, it is a place holder in a compound statement, where there should be a blank left, and nothing has to be written there."],
      "iterators":["In Python, iterators are used to iterate a group of elements, containers like a list."],
      "unittest":["A unit testing framework in Python is known as unittest. It supports sharing of setups, automation testing, shutdown code for tests, aggregation of tests into collections, etc."],
      "slicing":["A mechanism to select a range of items from sequence types like list, tuple, strings etc., is known as slicing."],
      "generators":["The way of implementing iterators are known as generators. It is a normal function except that it yields expression in the function."],
      "docstring":["A Python documentation string is known as docstring, it is a way of documenting Python functions, modules, and classes."],
      "copy an object":["To copy an object in Python, you can try a copy.copy () or copy.deepcopy() for the general case. You cannot copy all objects but most of them."],
      "negative index":["Python sequences can be index in positive and negative numbers. For positive index, 0 is the first index, 1 is the second index, and so forth. For the negative index, (-1) is the last index, and (-2) is the second last index, and so forth."],
      "number to a string":["In order to convert a number into a string, use the inbuilt function str(). If you want a octal or hexadecimal representation, use the inbuilt function oct() or hex()."],
      "xrange and range":["Xrange returns the xrange object while range returns the list and uses the same memory and no matter what the range size is."],
      "module and package":["In Python, module is the way to structure a program. Each Python program file is a module, which imports other modules like objects and attributes.The folder of Python program is a package of modules. A package can have modules or subfolders."],
      "rules for local and global variables":["Here are the rules for local and global variables in Python: Local variables: If a variable is assigned a new value anywhere within the function is body, it is assumed to be local. Global variables: Those variables that are only referenced inside a function are implicitly global."],
      "share global variables across modules":["To share global variables across modules within a single program, create a special module. Import the config module in all modules of your application. The module will be available as a global variable across modules."],
      "Python Script executable on Unix":["To make a Python Script executable on Unix, you need to do two things,Script file’s mode must be executable, and the first line must begin with # ( #!/usr/local/bin/python)"],
      "delete a file":["By using a command os.remove (filename) or os.unlink(filename)"],
    };
  
    // Get a random response for the given category
    const responses = categoryResponses[category];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  
  // Define a function to handle user input and generate a response
  function handleInput() {
    // Get the user input from the input field
    const input = document.getElementById("input-field").value;
  
    // Process the input and generate a response
    const response = processInput(input);
  
    // Update the chat window with the response
    const chatWindow = document.getElementById("chat-window");
  
    // Create a new chat message element with the user's message on the right side
    const userMessage = document.createElement("div");
    userMessage.className = "message right";
    userMessage.innerHTML = `<p>${input}</p>`;
    chatWindow.appendChild(userMessage);
  
    // Create a new chat message element with the bot's response on the left side
    const botMessage = document.createElement("div");
    botMessage.className = "message left";
    botMessage.innerHTML = `<p>${response}</p>`;
    chatWindow.appendChild(botMessage);
  
    // Clear the input field
    document.getElementById("input-field").value = "";
  }
  
  
  // Attach the handleInput function to the submit button
  document.getElementById("submit-button").addEventListener("click", handleInput);
  