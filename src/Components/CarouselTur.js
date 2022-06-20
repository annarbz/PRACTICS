import React, { Component } from 'react'
import Carousel from 'better-react-carousel'
import kivach from './kivach.jpg'
import girvas from './girvas.jpg'
import marzial from './marzial.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel  >
                <Carousel.Item interval={5000}>
                    <div class='imgblock'>
                        <img sclassName="d-block w-100" src={kivach} alt='Утуки' />
                        {/* <Carousel.Caption> */}
                        <span>Кивач</span>
                    </div>
                    

                    {/* </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div class='imgblock'>
                        <img sclassName="d-block w-100" src={girvas} alt='Утуки' />

                        {/* <Carousel.Caption> */}
                        <span>Гирвас</span>
                    </div>

                    {/* </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <div class='imgblock'>
                        <img sclassName="d-block w-100" src={marzial} alt='Утуки' />

                        {/* <Carousel.Caption> */}
                        <span>Марциальные воды</span>
                    </div>

                    {/* </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        )
    }
}