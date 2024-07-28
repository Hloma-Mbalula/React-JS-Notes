// In React the markup and the logic live together , html and js 
// Components are basically functions that start with a capital letter, and return some markup

// JSX

//Returns one div
/**
 *  In react, everything that we return has to be enclosed by a one div,
 *  Which means that in React we are only supposed to return only one div 
 *  that has everything in it, this could be multiple divs 
 * 
 */


//Every tag must be closed
/**
 * Every tag in react has to have a closing tag
 */

//Adding Css to your compontes
/**
 * There are many ways to do that , but one way is to create a separate css file and
 * import that css file into your component
 */

//Javascript in JSX is enclosed by curly braces
export default function Hello(){
    let name = "Hloma";
    return(
        <>
        <h1>Hello World!</h1>
        <h1>My name is {name}</h1>
        </>
    )

}



