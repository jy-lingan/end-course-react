import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpeg'
import img3 from '../img/img3.jpg'


const Carrousel = () => {
    return (

        <div className='container'>
            <hr />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: '500px', objectFit: 'cover' }}>
                        <img src={img1} className="d-block w-100" alt="Spiderman No Way Home" />
                    </div>
                    <div className="carousel-item" style={{ height: '500px' }}>
                        <img src={img2} className="d-block w-100" alt="Dune" />
                    </div>
                    <div className="carousel-item" style={{ height: '500px' }}>
                        <img src={img3} className="d-block w-100" alt="Eternals" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Posterior</span>
                </button>
            </div>
        </div>
    )
}

export default Carrousel
