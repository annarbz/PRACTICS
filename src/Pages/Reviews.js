import React, { Component } from 'react'
import CarouselGal from '../Components/CarouselGal'

export default class About extends Component {
    render() {
        return (
            <div>


                <CarouselGal />
                
                <div className="Gallery" >
                <br />
                <h1 className="Gallery">Отзывы наших гостей

                    <hr width="250px" align="center" />
                </h1>
                <br />
                <h5 className="Gallery">Здесь будут ваши отзывы)
                

                    <hr width="250px" align="center" />
                </h5>
                <br />
                <h3 className="Gallery">Ваше мнение очень ценно для нас!</h3>
                <br />
                <button className="Otzyv"><a href="https://forms.yandex.ru/u/62b9ab2dae70b5db5e9d6dac/">
                    Оставить отзыв
                </a></button>
                <br />
                </div>
            </div>
        )
    }
}

