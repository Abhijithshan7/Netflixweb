import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from'../../constants/constants'
import axios from '../../axios'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId,setId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('network error')
    })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handelMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
      setId(response.data.results[0])
      } else {
          console.log('Array empty')
        }
      })
    }

 
  return (
    <div className='row'>

      <h2>{props.title}</h2>
      <div className='posters'>
       {movies.map((obj)=>
        <img onClick={()=>handelMovie(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />

       )}
        
       
      </div>
   { urlId &&  <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default RowPost
