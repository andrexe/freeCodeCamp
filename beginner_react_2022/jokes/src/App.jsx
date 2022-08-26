import { useState } from 'react'
import Joke from "./components/Joke"
import jokesData from "./jokesData"

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke
      setup={joke.setup}
      punchline={joke.punchline}
      comments={joke.comments}
    />
  })
  return (
    <div className='p-6'>
      {jokeElements}
    </div>
  )
}

// function App() {

//   return (
//     <div className="p-6">
//       <Joke
//         setup="What do you call a factory that makes okay products?"
//         punchline="A satisfactory."
//         isPun={true}
//         upvotes={10}
//         comments={[
//           {
//             author: "Joe",
//             body: "I can't get enough of these jokes",
//             title: "Too funny"
//           }
//         ]}
//       />
//       <Joke
//         setup=""
//         punchline="Dear Math, grow up and solve your own problems."
//         isPun={false}
//         upvotes={10}
//         comments={[
//           {
//             author: "John",
//             body: "I don't understand these jokes",
//             title: "Is it funny?"
//           },
//           {
//             author: "Joe",
//             body: "I can't get enough of these jokes",
//             title: "Too funny"
//           }
//         ]
//       }
//       />
//       <Joke
//         setup="What did the janitor say when he jumped out of the closet?"
//         punchline="Supplies!"
//         isPun={true}
//         upvotes={6}
//         comments={[
//           {
//             author: "Jimothy",
//             body: "I don't like these jokes",
//             title: "Not funny"
//           }
//         ]}
//       />
//       <Joke
//         setup=""
//         punchline="I only know 25 letters of the alphabet. I don't know y."
//         isPun={true}
//         upvotes={5}
//         comments={[
//           {
//             author: "James",
//             body: "I love these jokes",
//             title: "Soo funny"
//           }
//         ]}
//       />
//       <Joke
//         setup="What did one wall say to the other?"
//         punchline="I'll meet you at the corner."
//         isPun={false}
//         upvotes={4}
//         comments={[
//           {
//             author: "Jim",
//             body: "I am going to steal these jokes",
//             title: "Very funny"
//           }
//         ]}
//       />
//     </div>
//   )
// }

export default App
