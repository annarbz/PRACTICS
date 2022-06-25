import React, { Component } from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import kivach from './kivach.jpg';


export default class CarouselTur extends Component {
    render() {
        return (
            <CardGroup>
                <Card border="light" style={{ width: '25rem' }}>


                    <Card.Body>
                        <Card.Title> Кивач</Card.Title>
                        <Card.Text>
                            <img className="Kartinki" src={kivach} alt='Кивач'/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        )
    }
}