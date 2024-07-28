
// When you want to reuse a component and have it not render the same data,   you use PROPS 

// An example of using props

export default function Joke(props){
    let stars="";
    for (let i = 0; i < 6; i++){
        if(i < props.rating){
            stars += "🌟"
        }else{
            stars += "⭐"
        }
    }
    return (
        <>
            <p>{joke}</p>
            <p>{stars}</p>
        </>
    )
}

// This component above could be just written as follows:

export default function Jokes( {rating, joke}){ // Instead of passing in the props object you could could just pass them in like this
    let stars="";
    for (let i = 0; i < 6; i++){
        if(i < rating){ // We would then not have to use the props object when using the parameters we passed in
            stars += "🌟"
        }else{
            stars += "⭐"
        }
    }
    return (
        <>
            <p>{joke}</p>
            <p>{stars}</p>
        </>
    )
}

// IN OUR APP JS FILE WE WOULD HAVE SOMETHING LIKE THIS:

function App(){
    const jokes = [
        {
            joke: "I used to be addicted to soap but im clean noww  ",
            rating: 4 
        },
        {
            joke: "I'm afraid for the calendar, Its days are numbered.",
            rating: 4
        }
    ]

    const dadJokes2 = {
        joke: "I'm afraid for the calendar, Its days are numbered.",
        rating: 4
    }
    
    return (
        <>
            <h1>Dad Jokes</h1>

            <Jokes {...dadJokes2} />
            // OR
            {jokes.map((joke, index) =>{
                return (
                    <Joke key={index} joke={joke.joke} rating={joke.rating} />
                )
            })}
           
        </>
    )
}


// Rendering a list of Components 

export default function Jokes(){

    // We create a list of objects 
      const jokes = [
    
            {
                joke: "I used to be addicted to soap but im clean noww  ",
                rating: 4 
            },
            {
                joke: "I'm afraid for the calendar, Its days are numbered.",
                rating: 4
            }
        ]

        return (
        
        // We render these by coding them one by one which is not effient for us

            <Joke 
                joke = {jokes[0].joke}
                rating = {jokes[0].joke}
             />,

             <Joke 
                joke={jokes[0].joke}
                rating={jokes[0].joke}
             />
        )

}

export default function Jokes(){
    const jokesComponents = [
        <Joke 
                joke = {jokes[0].joke}
                rating = {jokes[0].joke}
             />,

             <Joke 
                joke={jokes[0].joke}
                rating={jokes[0].joke}
             />
    ]

    return (
        {jokesComponents}
    )
}