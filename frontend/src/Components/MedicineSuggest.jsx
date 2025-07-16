import React, { useEffect, useRef, useState } from 'react'

function MedicineSuggest() {
    const [term,setTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const wrapper = useRef();


    useEffect(()=>{
        if(!term){
            setSuggestions([]);
        }
    })

  return (
    <div>MedicineSuggest</div>
  )
}

export default MedicineSuggest