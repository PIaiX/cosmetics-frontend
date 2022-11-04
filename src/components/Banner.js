import React from 'react'
import Container from 'react-bootstrap/Container'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'

const Banner = (props) => {
    return (
        <section className='full-h'>
            <figure className='full'>
                <a href='/'>
                    <img src={props.imgUrl} alt={props.title} className='main'/>
                    <figcaption>
                        <Container>
                            {
                                (props.main === true) &&
                                <Logo className='logo'/>
                            }
                            <h2 className='mt-5'>{props.title}</h2>
                        </Container>
                    </figcaption>
                </a>
            </figure>
        </section>
    );
};

export default Banner;