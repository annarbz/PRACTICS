import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Accordion, Card } from 'react-bootstrap'
import CarouselTur from '../Components/CarouselTur'


export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <a class="el-content uk-button uk-button-default uk-button-large" href="ьь">
                    ЗАБРОНИРОВАТЬ
                </a>

                <h2 class="uk-heading-medium uk-text-left uk-scrollspy-inview " uk-scrollspy-class="" >
                    О НАС
                </h2>
                <div>

                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Гостевой Дом УТУКИ</Card.Title>
                            <Card.Text>
                                Мы находимся в уединенном местечке, на берегу живописного лесного озера в 55 км от г. Петрозаводска. Дом площадью 80 кв.м., с выходом на озеро и собственным причалом располагается на участке площадью 30 соток.
                                В доме имеется 3 спальни, которые позволяют комфортно разместиться 6-ти гостям.
                            </Card.Text>
                        </Card.Body>

                        <h2>Услуги</h2>
                        <Accordion defaultActiveKey="0" class="accordion" >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Стандартные</Accordion.Header>
                                <Accordion.Body>
                                    Что-то
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>За доп. плату</Accordion.Header>
                                <Accordion.Body>
                                    Баня
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </div>

                <h2 class="uk-heading-medium uk-margin-remove-vertical uk-text-left uk-scrollspy-inview " uk-scrollspy-class="" >
                    ТУРИЗМ
                </h2>

                <CarouselTur />








            </div>

        );
    }
}

