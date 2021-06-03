import React from 'react'
import './footer.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {

    let date = new Date
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Amila Fernando</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h4>Copyright © {year} </h4>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
              <a
                href="https://github.com/amillafdo"
                style={{ color: "white",paddingRight:"5px" }}
                className="social-icons"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://github.com/amillafdo"
                style={{ color: "white",paddingRight:"5px" }}
                className="social-icons"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/amila-fernando-787359196/"
                style={{ color: "white",paddingRight:"5px" }}
                className="social-icons"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://www.instagram.com/amillafdo/"
                style={{ color: "white" ,paddingRight:"5px"}}
                className="social-icons"
              >
                <i className="fa fa-instagram"></i>
              </a>
          </ul>
        </Col>
      </Row>
    </Container>

        // <Container className='footer'>
        //     <Row>
        //         <Col md='4' className='footer-copywright'>
        //             <h3>Developed By Amila Fernando</h3>
        //         </Col>
        //         <Col md='4' className='footer-copywright'>
        //             <h3>Copyright © {year} AF</h3>
        //         </Col>
        //         <Col md='4' className='footer-body'>
        //             <ul className='footer-icons'>
        //                 <li className='social-icons'>
        //                     <a href='https://github.com/amillafdo' style={{color:'white'}}>
        //                         <i className='fa fa-github'></i>
        //                     </a>
        //                 </li>
        //                 <li className='social-icons'>
        //                     <a href='https://twitter.com/kottearachchi' style={{color:'white'}}>
        //                         <i className='fa fa-twitter'></i>
        //                     </a>
        //                 </li>
        //                 <li className='social-icons'>
        //                     <a href='https://www.linkedin.com/in/pasan-kottearachchi-63970a198/' style={{color:'white'}}>
        //                         <i className='fa fa-linkedin-square'></i>
        //                     </a>
        //                 </li>
        //                 <li className='social-icons'>
        //                     <a href='https://instagram.com/pasan_kottearachchi?igshid=1658xcumq4pw5' style={{color:'white'}}>
        //                         <i className='fa fa-instagram'></i>
        //                     </a>
        //                 </li>         
        //             </ul>
        //         </Col>
        //     </Row>
        // </Container>
    )
}
