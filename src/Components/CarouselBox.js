import React, { Component } from 'react'
import Carousel from 'better-react-carousel'
import dom_leto from './dom_leto.jpg'
import ozero from './ozero.jpg'
import pirs from './pirs.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item  className="carousel-home">
                    <div  class='imgblock'  >
                        <img sclassName="d-block w-100" src={dom_leto} alt='Утуки' />
                        <button class="btn"><a className="Bron" href="https://forms.yandex.ru/u/62b848819e3191e25abd7d56/">
                    ЗАБРОНИРОВАТЬ
                </a></button>
                        {/* <Carousel.Caption> */}
                        <span > <a href="https://yandex.ru/maps/-/CCUJn8At8D">Утуки, республика Карелия</a></span>
                    </div>


                    {/* </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item  className="carousel-home">
                    <div class='imgblock'>
                        <img sclassName="d-block w-100" src={pirs} alt='Утуки' />

                        {/* <Carousel.Caption> */}
                        <span>Утуки, республика Карелия</span>
                    </div>

                    {/* </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item  className="carousel-home">
                    <div class='imgblock'>
                        <img sclassName="d-block w-100" src={ozero} alt='Утуки' />

                        {/* <Carousel.Caption> */}
                        <span>Утуки, республика Карелия</span>
                    </div>

                    {/* </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        )
    }
}