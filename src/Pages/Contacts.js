import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import {
    Button,
    Container,
    Form,
    FormCheck,
    FormControl,
    FormGroup,
    FormLabel,
    FormText,
} from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <div>




                <div>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="kontakty">
                            <Row>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="kontakty">
                                            <p><strong>Телефоны для связи:</strong></p>
                                            <p>+7(911) 421-61-67
                                                <br />Салова Анна Сергеевна
                                                <br />
                                                <hr class="hr-line" width="250px" align="right" />
                                            </p>
                                            <p><strong>E-mail:</strong></p>
                                            <p>annarbz2003@gmail.com

                                                <br />
                                                <hr class="hr-line" width="250px" align="right" />
                                            </p>
                                            <p><strong>Адрес:</strong></p>
                                            <p>Россия, Республика Карелия,
                                                <br />территория Утуки 1, д.7</p>

                                            <hr class="hr-line" width="250px" align="right" />

                                            <p><strong>Ссылки на социальные сети:</strong></p>
                                            <a href="https://vk.com/annarbz"> https://vk.com/annarbz</a>
                                                <br />
                                                <a href="https://t.me/annarbz">https://t.me/annarbz</a>

                                                <hr class="hr-line" width="250px" align="right" />

                                            
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </div>

                <Container>
                    <h1>Свяжитесь с нами</h1>
                    <Form>
                        <FormGroup controlId="formBasicEmail">
                            <FormLabel>E-mail адрес:</FormLabel>
                            <FormControl type="email" placeholder="Введите ваш e-mail" />
                            <FormText>Мы никогда не передадим ваш email в другие руки</FormText>
                        </FormGroup>

                        <FormGroup controlId="formBasicPassword">
                            <FormLabel>Введите ваше сообщение:</FormLabel>
                            <FormControl as="textarea" rows="3" />
                        </FormGroup>

                        <FormGroup controlId="formBasicCheckbox">
                            <FormCheck type="checkbox" label="Запомнить" />
                        </FormGroup>
                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>
                    </Form>
                </Container>
            </div>

        )
    }
}
