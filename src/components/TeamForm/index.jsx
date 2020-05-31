import React, { useMemo,useState } from 'react'
import './styles.css'

const TeamForm = () => {
  const [thumbnail, setThumbnail] = useState(null)
  const [display, setDisplay] = useState('block')

  const preview = useMemo(()=>{
    if(thumbnail){
      setDisplay('none')
      return URL.createObjectURL(thumbnail)
    }else{
      setDisplay('block')
      return null
    }
  },[thumbnail])

  return(
    <form className='teamform'>
      <input placeholder='Team Name'/>

      <textarea rows={3} placeholder='Description'/>

      <label id='labelImage' style={{backgroundImage: `url(${preview})`}}>
        <input className='inputImage' type='file' onChange={e => setThumbnail(e.target.files[0])} />
        <p style={{display}}>Banner 16x9</p>
        <p style={{display}}>Click or drag an image</p>
      </label>

      <button type='submit'> Create </button>
    </form>
  )
}

export default TeamForm