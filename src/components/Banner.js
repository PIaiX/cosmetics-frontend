import React from 'react'
import Container from 'react-bootstrap/Container'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import {Link} from 'react-router-dom'

const Banner = (props) => {
    return (
        <section className='full-h'>
            <figure className='full'>
                <Link to={props.link}>
                    <img src={props.imgUrl} alt={props.title} className='main'/>
                    <figcaption>
                        <Container>
                            {
                                (props.main === true) &&
                                <Logo className='logo d-none d-md-block'/>
                            }
                            <h2 className='mt-5'>{props.title}</h2>
                        </Container>
                    </figcaption>
                </Link>
            </figure>
        </section>
    );
};

export default Banner;