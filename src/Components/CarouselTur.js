import React, { Component } from 'react'

import kivach from './kivach.jpg';
import marzial from './marzial.jpg';
import girvas from './girvas.jpg';


export default class CarouselTur extends Component {
    render() {
        return (
            <div class='contmeleft'>
                <img src={kivach} alt='Кивач' />
                <p><b>Водопад Кивач</b> – второй по величине равнинный водопад Европы. Расположен на реке Суне в центральной части Карелии. Вокруг него находится одноименный природный заповедник и дендрарий.

                    Водопад Кивач невероятно красив и величественен в любую погоду. Сжатые базальтовыми скалами воды реки Суны, с высоты 11 метров тяжелым литым потоком обрушиваются по ступеням каменной лестницы, образуя мощный, в клочьях пены, водоворот и создавая впечатляющий шум. Помимо обзорных площадок с видом на каскады водопада, туристы могут познакомиться с животным и растительным миром Карелии в музее природы.</p>



                <div class='contmeright'>
                    <img src={marzial} alt='Марциальные воды' align="right" />
                    <p>
                        Исторический санаторий <b> «Марциальные воды» </b>находится в Карелии, вдали от крупных людских поселений, между несколькими озерами. Это лечебный курорт, рассчитанный на туристов разных категорий. Все лечебно-оздоровительные процедуры, предлагаемые здесь, проводятся семь дней в неделю, выходных нет.

                        В непосредственной близости от санатория расположен другой курорт, горнолыжный, под названием «Спасская губа». Добраться до него можно быстро – расстояние всего 7-8 километров. Самая длинная спусковая трасса «губы» протянулась на 350 метров.
                    </p>
                </div>

                <div class='contmeleft'>
                    <img src={girvas} alt='Гирвас' />
                    <p>
                        <b>Вулкан Гирвас</b> — древний потухший вулкан в Карелии возрастом более 2–3 млрд лет, находящийся в русле реки Суна недалеко от одноименного поселка. Вулкан Гирвас в настоящее время почти полностью разрушен природой и временем. Сохранились лишь более 20 застывших лавовых потоков толщиной до 32 метров и следы кратера, который считается одним из древнейших на планете и в Карелии.
                    </p>

                </div>
            </div>

        )
    }
}