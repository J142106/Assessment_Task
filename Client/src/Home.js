import React, { useEffect, useState, Children } from 'react';
import CModal from './CModal'
import { Link } from 'react-router-dom'
import './Card.css'
import './Home.css'

function Home() {

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
                <h1 className='display-1 text-center mt-3 fonr-weight-bold'>—————— Student Page ——————</h1>
            </div>

            <section className="py-4 py-lg-5 container">
                <div className="row justify-content-center align-item-center">
                    {(typeof backendData.student === 'undefined') ? (
                        <p>Loading...</p>
                    ) : (
                            backendData.student.filter((item, index) => index < 4).map((item, index) => (
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

            <div className="btn2">
                <Link as={Link} to={"/student"} >
                    <button className="btn btn-lg col-10" type="button" style={{ backgroundColor: 'rgba(66, 113, 233, 0.8)' }}>Click for More</button>
                </Link>
            </div>

            <div>
                <h1 className='display-1 text-center mt-3 fonr-weight-bold'>—————— Course Page ——————</h1>
            </div>
            <section className="py-4 py-lg-5 container">
                <div className="row justify-content-center align-item-center">
                    {(typeof backendData.course === 'undefined') ? (
                        <p>Loading...</p>
                    ) : (
                            backendData.course.filter((item, index) => index < 4).map((item, index) => (
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

            <div className="btn2">
                <Link as={Link} to={"/course"} >
                    <button className="btn btn-lg col-10" type="button" style={{ backgroundColor: 'rgba(66, 113, 233, 0.8)' }}>Click for More</button>
                </Link>
            </div>
            {
                modal === true ? <CModal img={tempdata[2]} title={tempdata[1]} desc={tempdata[3]} hide={() => setModal(false)} /> : ''
            }
        </>
    )
}

export default Home