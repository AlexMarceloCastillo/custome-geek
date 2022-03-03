import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//css
import './RelatedProducts.component.css';

//icons
import { GrNext, GrPrevious } from 'react-icons/gr'

const RelatedProductsComponent = ({ products }) => {
    const [carouselActive, setCarouselActive] = useState(<></>);
    const [carousel, setCarousel] = useState(<></>);

    const createItemCarousel = (item, index) => {
        return <div key={index} className="col-md-4 mb-3">
            <Link to={"/item/"+item.id+"#detail" }>
                <div className="card">
                    <img className="img-fluid img-related" alt="100%x280" src={item.pictureUrl} />
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.description}</p>
                        <span style={{ marginRight: 5 + 'px', fontSize: 15 + 'px', textDecoration: 'line-through' }}>
                            {item.originalPrice !== item.price && item.originalPrice + ',00 ARS'}</span>
                        {item.price}, 00 ARS
                    </div>
                </div>
            </Link>
        </div>
    }

    useEffect(() => {
        if (products.length) {
            let perChunk = 3 // items per chunk    
            let inputArray = products;
            let resultProducts = inputArray.reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / perChunk)
                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = []
                }
                resultArray[chunkIndex].push(item)
                return resultArray
            }, [])
            setCarouselActive(resultProducts[0].map((item, index) => {
                return createItemCarousel(item, index)
            }))
            if (products.length > 3) {
                setCarousel(
                    resultProducts[1].map((item, index) => {
                        return createItemCarousel(item, index)
                    })
                )
            }

        }
    }, [])


    return (
        <section className="related-products-component">
            {products.length ?

                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <h3 className="mb-3">Quienes vieron este producto también compraron</h3>
                        </div>
                        <div className="col-2 text-right">
                            <a className="btn mb-3 mr-1" data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
                                <GrPrevious />
                            </a>
                            <a className="btn mb-3 " data-bs-target="#carouselExampleIndicators2" role="button" data-bs-slide="next">
                                <GrNext />
                            </a>
                        </div>
                        <div className="col-12">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            {carouselActive}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            {carousel}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </section>
    );
}

export default RelatedProductsComponent;
