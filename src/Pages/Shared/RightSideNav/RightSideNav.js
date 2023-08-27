import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='position-fixed'>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignin} variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle> Login via Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login via Github</Button>
            </ButtonGroup>

            <div className='mt-4 w-75'>
                <h5>Find us On</h5>
                <ListGroup >
                    <ListGroup.Item className='mb-2 '><FaFacebook/><Link className='ms-1 text-decoration-none text-dark' to="https://web.facebook.com/MinnsPort.00/" target="_blank"                   >Facebook</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 '><FaLinkedin/><Link className='ms-1 text-decoration-none text-dark' to='https://www.linkedin.com/in/minnatulislam/' target="_blank">Linkedin</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 '><FaTwitter/><Link className='ms-1 text-decoration-none text-dark' to='https://twitter.com/m_minnatul' target="_blank">Twitter</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 '><FaWhatsapp/><Link className='ms-1 text-decoration-none text-dark' to=''>Whatsapp</Link></ListGroup.Item>
                    <ListGroup.Item className='mb-2 '><FaInstagram/><Link className='ms-1 text-decoration-none text-dark' to='https://www.instagram.com/sm_minnatul/' target="_blank">Instagram</Link></ListGroup.Item>
                </ListGroup>

            </div>

            <div className='w-75'>
                <BrandCarousel></BrandCarousel>
            </div>             
        </div>
    );
};

export default RightSideNav;