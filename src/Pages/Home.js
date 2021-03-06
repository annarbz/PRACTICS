import React, { Component } from 'react';

import { Accordion, Card } from 'react-bootstrap'
import CarouselTur from '../Components/CarouselTur'
import { CardGroup } from 'react-bootstrap';
import dom_leto from '../Components/dom_leto.jpg'





export default class Home extends Component {
    render() {
        return (

            <div class='imgblock'  >
                <img sclass="d-block w-100" src={dom_leto} alt='Утуки' />
                <button className="btn">
                    <a className="Bron" href="https://forms.yandex.ru/u/62b848819e3191e25abd7d56/">
                        ЗАБРОНИРОВАТЬ
                    </a></button>
                <span > <a href="https://yandex.ru/maps/-/CCUJn8At8D">Утуки, республика Карелия</a></span>
                <div>

                    <CardGroup  >

                        <Card border="light" style={{ width: '25rem' }} className="card">
                            <hr width="368px" align="left" />

                            <h2>

                                О НАС
                            </h2>
                            <Card.Body >

                                <Card.Title>Гостевой Дом УТУКИ</Card.Title>
                                <Card.Text>
                                    Мы находимся в уединенном местечке, на берегу живописного лесного озера в 55 км от г. Петрозаводска. Дом площадью 80 кв.м., с выходом на озеро и собственным причалом располагается на участке площадью 30 соток.
                                    В доме имеется 3 спальни, которые позволяют комфортно разместиться 6-ти гостям.
                                    На территории имеется открытый домик для пикника, мангал, коптильня и отдельно стоящая русская баня с каминным залом, собственный причал с весельной лодкой.

                                    Стоимость аренды: 8500 руб/сутки, при проживании от 2-х суток – 7500 руб/сутки.
                                    В стоимость входит: аренда дома, постельное белье, стоянка для авто, пользование посудой и бытовой техникой, мангалом, домиком для пикников, весельной лодкой.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card border="light" style={{ width: '25rem' }} >
                            <hr width="0px" align="right" />
                            <h2>Услуги</h2>
                            <Accordion defaultActiveKey="0" className="accordion" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Стандартные</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>

                                            <li>Кондиционер</li>
                                            <li>Бесплатный Wi-Fi</li>
                                            <li>Холодильник</li>
                                            <li>Мебель на улице</li>
                                            <li>Места для курения</li>
                                            <li>Отопление</li>
                                            <li>Посудомоечная машина</li>
                                            <li>Стиральная машина</li>
                                            <li>Сушилка</li>

                                            <li>Терраса</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>За доп. плату</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>

                                            <li>Баня</li>
                                            <li>Рыбалка</li>
                                            <li>Саб-сёрф</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </CardGroup>


                </div>



                <hr width="368px" align="left" />
                <h2 className="Turism">
                    Рядом с нами
                </h2>

                <CarouselTur />
                <hr class="hr-line" width="250px" align="right" />









            </div>

        );
    }
}

