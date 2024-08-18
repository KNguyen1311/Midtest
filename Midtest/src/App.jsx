import { useEffect, useState } from 'react'
import Header from './Header'
import Explore from './Explore'
import './index.css'
import NewRealase from './NewRealase'
import movie from './movie.json'
import Movie from './Movie'


function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  return (
<>
<div> 
  <Header />
  <Explore />
  <NewRealase  />

 

</div>
</>
  )
}

export default App

