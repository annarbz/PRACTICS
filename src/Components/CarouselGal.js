import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import b from './pictures/b.jpg';
import d from './pictures/d.jpg';
import g from './pictures/g.jpg';
import v from './pictures/v.jpg';


class CarouselGal extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="carousel-home">
                    <img
                        className="d-block w-100"
                        src={d}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>Описание места</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img
                        className="d-block w-100"
                        src={b}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>Описание места</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img
                        className="d-block w-100"
                        src={d}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>Описание места</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img
                        className="d-block w-100"
                        src={g}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>Описание места</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-home">
                    <img
                        className="d-block w-100"
                        src={v}
                        alt='антенна'
                    />
                    <Carousel.Caption>
                        <h3>Описание места</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselGal;