import React, { useEffect, useState } from 'react';


function Tickbox() {

    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/data").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    const [lang, setLang] = useState([]);
    const handleChange = e => {
        const { value, checked } = e.target;
        if (checked) {
            setLang((prev) => [...prev, value]);
        } else {
            setLang((prev) => prev.filter((x) => x !== value));
        }
    };

    return (
        <>
            <div >Select Courses from the list</div>
            {(typeof backendData.course === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                    backendData.course.map((item, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                name="lang"
                                value={item.title}
                                onChange={handleChange}
                            /> {' '} {item.title}
                        </label>)))}

            <div>Selected Courses: {lang.length ? lang.join(', ') : null}</div>
        </>
    )
}

export default Tickbox