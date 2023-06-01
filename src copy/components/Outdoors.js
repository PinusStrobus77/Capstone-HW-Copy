import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Outdoors = () => {
  return (
    <div>
 
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1rXALT-KCRYkQQ34C1U0d8Yv7g1vIB0K_"
          alt="First slide"
        />
        <Carousel.Caption>
        <a href="https://www.artworkscincinnati.org/mural/fiona-and-bibi-at-the-cincinnati-zoo/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i class="bi bi-info-lg"></i></Button></a> <Button variant="secondary">FEATURED ATTRACTIONS  <i class="bi bi-caret-right"></i></Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=10jQKg9OSNUBoZN9R1l3RV1XxLfisyC33"
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="https://cincinnatizoo.org/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1sjkX-iCKEW5ttEzDX0EuP5ABl03Iv1Xc"
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://www.cincinnati-oh.gov/cincyparks/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1hYEZ5C3K3EL_PgpSVvJgPlnetq9BUOiX"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <a href="https://www.cincynature.org/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
   
   <div className="container-fluid bg-info">
    <div className="row">
      <div className="col-12 text-center">

    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        <h4>Browse Attractions:</h4> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="https://cincinnatizoo.org/" target="_blank">Cincinnati Zoo & Botanical Garden</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnati-oh.gov/cincyparks/visit-a-park/" target="_blank">Cincinnati Parks</Dropdown.Item>
        <Dropdown.Item href="https://www.greatparks.org/" target="_blank">Great Parks of Hamilton County</Dropdown.Item>
        <Dropdown.Item href="https://www.cincynature.org/" target="_blank">Cincinnati Nature Center</Dropdown.Item>
        <Dropdown.Item href="https://www.aultparkac.org/" target="_blank">Ault Park</Dropdown.Item>
        <Dropdown.Item href="http://www.astonoaksgolfclub.com/" target="_blank">Aston Oaks Golf Club</Dropdown.Item>
        <Dropdown.Item href="https://kenwoodcc.com/" target="_blank">Kenwood Country Club</Dropdown.Item>
        <Dropdown.Item href="https://www.ohioriverpaddlefest.org/" target="_blank">Ohio River Paddlefest</Dropdown.Item>
        <Dropdown.Item href="https://perfectnorth.com/" target="_blank">Perfect North Slopes</Dropdown.Item>
        <Dropdown.Item href="https://myfountainsquare.com/" target="_blank">Fountain Square</Dropdown.Item>
        <Dropdown.Item href="https://www.visitcincy.com/" target="_blank">More options at Visit Cincy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    
    </div>
    </div>
   </div>

  {/* Footer*/}
  

</div>
  )
}

export default Outdoors