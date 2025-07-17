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


    const ClearInputField = () =>{
        setTerm('')
    }


    

    return (
        <div ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>

            <div className='d-flex gap-2 mb-4'>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)} placeholder='Enter the Medicine Name' className="form-control  py-3" />
            <button disabled={!term} onClick={ClearInputField} className='btn btn-primary'><i class="fa-solid fa-delete-left fa-xl"></i></button>
            </div>

            {
                suggestions.length > 0 && (
                    <ul className='text-dark text-start rounded' style={{ position: 'absolute', top: '100%', left: 0, right: 0, maxHeight: '180px', margin: 0, padding: '5px', listStyle: 'none', background: '#fff', overflowY: 'auto', zIndex: 10 }}>

                        {suggestions.map((name, i) => (
                            <li key={i}
                                className='mb-1 '
                                onMouseDown={e => e.preventDefault()}
                                onClick={() => {
                                    onSelect(name);
                                    setTerm(name);
                                    setSuggestions([])
                                }}
                                style={{ padding: '2px', cursor: 'pointer',borderBottom: '1px solid #ddd' }}
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