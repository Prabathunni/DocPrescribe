import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function MedicineSuggest({ onSelect }) {
    const [term, setTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const wrapperRef = useRef();


    useEffect(() => {
        if (!term || term.trim().length < 2) {
            setSuggestions([]);
            return;
        }

        const controller = new AbortController();

        axios
            .get('https://rxnav.nlm.nih.gov/REST/approximateTerm.json', {
                params: { term },
                signal: controller.signal,
            })
                .then(res => {
                    const cands = res?.data.approximateGroup?.candidate || [];
                    setSuggestions(cands.map(c => c.name));


                })
                .catch(err => {
                    if (err.code !== 'ERR_CANCELED') console.error(err)
                })

        return () => controller.abort()

    }, [term])


    useEffect(()=> {
        const onClick = (e) => {
            if(wrapperRef.current && !wrapperRef.current.contains(e.target)){
                setSuggestions([]);
            }
        }

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick)
    },[]);


    

    return (
        <div ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)} placeholder='Medicine Name' className="form-control mb-2" />

            {
                suggestions.length > 0 && (
                    <ul className='text-dark text-start rounded' style={{ position: 'absolute', top: '100%', left: 0, right: 0, maxHeight: '150px', margin: 0, padding: '4px 0', listStyle: 'none', background: '#fff', overflowY: 'auto', zIndex: 10 }}>

                        {suggestions.map((name, i) => (
                            <li key={i}
                            
                                onMouseDown={e => e.preventDefault()}
                                onClick={() => {
                                    onSelect(name);
                                    setTerm(name);
                                    setSuggestions([])
                                }}
                                style={{ padding: '2px', cursor: 'pointer' }}
                            >
                                {name}
                            </li>
                        ))}

                    </ul>
                )
            }


        </div>
    )
}

export default MedicineSuggest