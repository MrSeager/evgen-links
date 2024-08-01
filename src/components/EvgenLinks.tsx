import React from 'react';
import ReactDOM from 'react-dom/client';
import './EvgenLinks.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Button } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgAva from '../images/avatar.gif';

const EvgenLinks = () => {
    return (
        <Container fluid className='cs-h bg-light d-flex flex-column align-items-center justify-content-center'>
            <Container className='cs-w cs-shadow p-4 border border-2 border-dark rounded d-flex flex-column gap-3 align-items-center'>
                <Image fluid src={ImgAva} alt='avatar' roundedCircle className='border border-2 border-dark' />
                <Button className='w-100 py-2 fs-4 cs-btn'>Some Link</Button>
            </Container>
        </Container>
    );
};

export default EvgenLinks;
