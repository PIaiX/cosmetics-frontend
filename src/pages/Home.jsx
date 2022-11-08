import React from 'react'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <main>
            <Banner link={'/category/product'} main={true} title={'НОВИНКА FR ОСВЕЖАЮЩИЙ СПРЕЙ'} imgUrl={'imgs/products/НОВИНКА FR ОСВЕЖАЮЩИЙ СПРЕЙ.jpg'}/>

            <Banner link={'/category/product'} main={false} title={'HA МАТЕРИАЛ'} imgUrl={'imgs/products/HA - КРЕМ ДЛЯ РУК СИНЯЯ КАЛИФОРНИЙСКАЯ ВОДОРОСЛЬ.jpg'}/>
            <Banner link={'/category'} main={false} title={'MATEРИАЛ ВОЛОС'} imgUrl={'imgs/products/SS -СЫВОРОТКА ДЛЯ КОНЧИКОВ ВОЛОС КАМЕЛИЯ + ЖИДКИЙ ШЁЛК.jpg'}/>
            <Banner link={'/category'} main={false} title={'МАТЕРИАЛ КОЖИ'} imgUrl={'imgs/products/MM - УВЛАЖНЯЮЩИЙ МУСС ФИТО-ПЕПТИДЫ + СО2 ЭКСТРАКТ ГРАНАТА.jpg'}/>
            <Banner link={'/category'} main={false} title={'EC МАТЕРИАЛ'} imgUrl={'imgs/products/EC - КРЕМ ДЛЯ ГЛАЗ ГИНКГО + ИРИС.jpg'}/>
        </main>
    );
};

export default Home;