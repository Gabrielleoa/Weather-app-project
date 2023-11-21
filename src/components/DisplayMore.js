export default function DisplayMore({jokes, fetchNewRandomJokes}){
    

    return (
        <div>
             <div>
        {jokes.map((joke) => (
          <div>
              <p>Setup: {joke.setup}</p>
              <p>Punchline: {joke.punchline}</p>
            <hr></hr>
          </div>
        ))}
      </div>
            <button onClick={fetchNewRandomJokes}>Load more jokes</button>
    
        </div>

    )
}