I tried to resume in this file the methodology I adapted when solving the KATA

##1. Analysis Step

1. Architecture
I first read the readme and then analysed the used architecture.
I noticed that the api gateway port is absent, and the action receiveDomains is dispatched on the index as if
the server would do it on sub/publish fashion. Well thi works well, but I think that injecting the api's gateway 
in the createStore method would be a better tradeoff and closer to real word architecture.
Also when working with redux we usually need a middleware thunk, observable...
I would also use redux toolkit to slice my store and create the actions from the slice as it reduces the boilerplate.
Reselect is also a powerfull library that helps with performance when working with memoized selectors. 
I would introduce that one to the project as well.
Now since it is tagged with `// This file has to be left untouched`, I am not sharing any mentioned solution on architecture.

2. The ClassComponents:
React Hooks are an amazing way to share logic among components. Unfortunately, they can't be used with classComponents 
I believe that using class components with react >16 can really increase learning curve among te Team (you will need to learn both) 
and step away from best react features and best practices.
I would consider switching to full function components. 
But once again this is not in the perimeter of this kata :) 

Otherwise, something looks weired in the component itself. The state of the components is mixed with its props.
Instead of holding the selects' different options, the state of the component should capture the user's selected values.

3. Usecase Driven:
I use `Task based UI(User Intereaction)` paradigm and `usecase driven development`. 
The usecase of this KATA is RetrieveDomains. it should react on the action RetrieveDomainsAction, pulls the encoded domains using a gateway and then parse the result 
in the new model and finally push an action with the data to reduce in the store(ex DomainsReceivedAction). 
Using this principle, we can introduce a unit test suite that
verifies a unit of behaviour (TDD is about assertions of expected system behaviour and not about testing functions and classes)
The cleanest way to do so, would be by introducing a middleware in redux and injecting th dependencies to it. I usually use
redux-observable for that because it offers obsever pattern out of tht box and facilitates reactive programming with rxjs.

For this Kata, I will just move the logic into a usecase that I will call in the reducer directly and update the store 
according to the returned data.

4. The store model
The redux store model couples the data of the 3 selects components together. 
Destructuring the model may be a better trade off so we can use the selects separately with a simpler selector logic

5. The warning in the console:
In react, we just shouldn't mutate the state without using setState method (or useState), this may mess up the VDOM update
logic and cause unexpected rerendering and loss of state references.
So, at first view I would say that this comes from using `state.push`statements that mutates the state in an uncontrolled way. 

I think we can stop analsing at this level :). I will pass to refactoring Step

## Refactoring the code

1. Is there any unit tests?
First at all, I search for unit tests. Unit tests gives us trust to refactor.
- The Enzyme based test is very close to the component so I wont touch that one (more like e2e).
- The reducer and selector tests can be combined into a usecase test that asserts directly that dispatching the action will result to a correct 
updated version of the selected view model (using the selector) from the store.
I assume that redux is part of my core domain and I don't need to put abstraction on top of it
Finally, since nothing is really I will just delete the existing tests and create new usecase and its unit tests suite

2. First commit: refine structures/io and write tests
I don't commit code that don't compile or with failing tests
When changing structure, I rebuild the project after each change to let the transpiler guide my modifications 
This may look like a big commit but was necessary to prepare the next steps
after this commit we have a new structure with unit test of the usecase RetrieveDomains initialized with first test case:
when we receive no domains from the server(empty array)

3. TDD cycles
here it goes, I imagined other scenarios, each scenario is followed by a new commit.
I use test driven development for building the usecase and I let the tests guide the implementation of the algorithm.
I tried to commit after each red->green->refactor cycle

4. UI integration:
Now that I have my usecase tested, I integrate it as it is and I test on the browser(yeah i'am not a big fun of enzyme or react testing)
those tests are usually fragile and breaks when changin ui details...So I write minimum
Otherwise I use E2E testing using cypress
(I adapted the enzyme test anyway ^^)

5.Refactoring to reusable component:
in the last step, I split the component into 3  separate Selects Components and I change the container logic into a composite component.
I do this in separate step-by-step commits

