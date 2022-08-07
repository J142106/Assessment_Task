import React, { useEffect, useState, Children } from 'react';
import Modal from './Modal'
import CreateNew from './CreateNew'
import './Card.css'

function Student() {

    const [ReadmoreState] = useState(false)

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

    const [modal, setModal] = useState(false);
    const [tempdata, setTempdata] = useState([]);

    const getData = (title, img, desc) => {
        let tempData = [title, img, desc];
        setTempdata(item => [1, ...tempData]);

        return setModal(true);
    }

    return (
        <>
            <div>
                <h1 className='display-1 text-center mt-3 fonr-weight-bold'>Student Page</h1>
            </div>

            <CreateNew />

            <section className="py-4 py-lg-5 container">
                <div className="row justify-content-center align-item-center">
                    {(typeof backendData.student === 'undefined') ? (
                        <p>Loading...</p>
                    ) : (
                            backendData.student.map((item, index) => (
                                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                                    <div className='card-container'>
                                        <div className="image-container">
                                            <img src={item.imgSrc} alt='' />
                                        </div>
                                        <div className="card-content">
                                            <div className="card-title">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="card-body">
                                                <p>{ReadmoreState ? Children : item.desc.substr(0, 200)}<b>......</b></p>
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn" onClick={() => getData(item.title, item.imgSrc, item.desc)}>
                                                View More Here
                                            </button>
                                        </div>
                                    </div>
                                </div>)))}

                </div>
            </section>
            {
                modal === true ? <Modal img={tempdata[2]} title={tempdata[1]} desc={tempdata[3]} hide={() => setModal(false)} /> : ''
            }
        </>
    )
}

export default Student