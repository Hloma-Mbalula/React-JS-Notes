//REACT JS NOTES 

// Start a create a react app

// write this in the terminal: yarn create vite

        /* JSX only exists in development, local host does not exist production so when its time to deploy into prodcution we need to run :

        // yarn build

        // This converts all the jsx into simple html, css, and javascript

        */ 

// STATE VS PROPS


/*1. How would you describe the concept of "state"?


A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?


Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?

Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?


Unchanging. Props are immutable. State is mutable.


*/

//CONDITIONAL RENDERING

          //Allows you to dynamically display different UI elements based on certain conditions

          //TERNARY OPERATOR

            //A concise way to render different UI elements based on a boolean condition
              
                return isLogged ? <UserGreeting /> : <GuestGreeting/> 

          //SHORT CIRCUIT EVALUATION

            //A technique to efficiently render UI elements based on conditional expressions.

                return isLogged && <UserGreeting />

          /*
                1. What is "conditional rendering"?

                    When we want to only sometimes display something on the page
                    based on a condition of some sort


                2. When would you use &&?


                When you want to either display something or NOT display it


                3. When would you use a ternary?

                When you need to decide which thing among 2 options to display


                4. What if you need to decide between > 2 options on
                  what to display?


                Use an `if...else if... else` conditional or a `switch` statement
          */ 


//Event Handling 

            //HANDLING EVENTS
              
              //A way to define functions that respond to specific user interactions. eg Clicks

              const handleClick = () => {
                //Handle the click event
              }

            //useState with Event Handling 

              //Integrating event handlers with useState to dynamically update component state based on user input

              const [ inputValue, setInputValue ] = useState("")  

              const handleChange = (e) => {
                setInputValue(e.target.value)
              }

            //

//React Hooks
            
    //useState
    //useEffect
    //useContext
    //useReducer
    //useCallback
    //useMemo 
    //useRef

        //useState 

          // A hook for managing component state, allowing you to keep track of data within the component and update it as needed

              //This is how you can import useState to react 

              
              import React from "react" 
              // or import React, {useState} from "react"

              export default function App(){
                const result = React.useState() 
                /* this will give us an array with the following information : [ undefined, f() ]

                  meaning the default value of the was not defined on useState

                  whatever value is inside the parenthesis of useState is an initial value

                */

              }

                //We use array destructuring array instead of what we have done above

              export default function App(){
                const [result, setIsImportant] = React.useState("Yes") 

                // the 'func' function allows us make changes to our state

                function handleClick () {
                  setIsImportant('No') // we made changes to our state


                }

                        
                 
                return (
                  <div className="state">
                    <h1 className="state--title">
                      Is state impotant to know ?
                    </h1>
                    <div className="state--value"onClick = {handleClick}>
                      <h1>
                        {result}
                      </h1>
                    </div>
                  </div>
                )
              }

              
             

             import React from 'react'

             export default function App2(){
                  const [ count, setCount ] = React.useState(0)

                  function add(){
                     // We can pass in functions to our setState function to effectively make changes to our current state 
                    setCount (
                      function (prevCount) {
                        return prevCount + 1 
                        /*
                        we are making changes to our state given that the function add() is activated. we passed in a callback function that allows us to do that in setCount

                        We cannot use something like count ++ because then we would directly rendering our variable which is not allowed in react
                        */
                      }
                    )
                  }
             }
             
                //What is happening in array destructuring ?

                /*
                    We define the variable as an array
                    and assign it to our state 

                */


              

              

        //useEffect

          // A hook for handling side effects, such as data fetching, subscriptions, and cleanup logic.

          useEffect (() => {
            //Effect Logic here

          }, [dependencies])


        //useContext 

          // A hook for sharing data across components without the need for prop drilling

          const val = useContext(MyContext)

        //useReducer

          //A hook for managing complex statem providing a more structured approach to state updates

          const [state, dispatch] = useReducer (reducer, initialState);

        //useCallback

          //This hook memoizes a callback function, preventing unnecessary re-renders of child components

          const memoizedCallback = useCallback (() => {
            //callback logic
          }, [dependencies] )

        //useMemo 

          //useMemo memoizes the result of a computation, preventing it from being recalculated on every render

          const value useMemo(() => computeValue(a, b), [a, b]);

        //useRef

          //useRef returns a ref object with a current property that can be used to hold a mutable value.

          const myRef = useRef (initialValue);

          





//Components and Props

    //FUNCTIONAL COMPONENTS 
    //DESTRUCTING PROPS
    //DEFAULT PROPS

          //Functional Compontents 

            //The fundamental building blocks of UI construction in React

              const MyComponent = (props) => {
                return (
                  <div>(props.message)</div>
                )
              }

                /*
                Two child components can not share state, the state will have to be declared by the parent component which will then be able to distribute the state to its child components through props.

                rule : keep state as local as you can, if the other child component does not need state, there is no need to declare the state on the parent component, declare it locally instead on the component that needs that particular state.
                
                */

          //Destructing Props

              //A concise way to access prop values directly within the functional comp

              const MyComponent1 ( { message } ) => {
                return (
                  <div>{message}</div>
                )
              }

          //Defaulting Props

              //A mechanisn to provide default values for props

              MyComponent.defaultProps = {
                message: 'Default Message'
              }


    //We use state to watch for local changes 


//Forms in React


