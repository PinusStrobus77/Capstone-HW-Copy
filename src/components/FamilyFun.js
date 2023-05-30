import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const FamilyFun = () => {
  return (
    <div>
 
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=12sDbkE8uOLYFUCLTaYgl4xMvxsZvqQuU"
          alt="First slide"
        />
        <Carousel.Caption>
        <Button variant="secondary">FEATURED ATTRACTIONS</Button>{' '}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=16CRjLZNuyOKfwJvJe1krRkOA1T3CzbSY"
          alt="Second slide"
        />

        <Carousel.Caption>
        <a href="https://www.visitkingsisland.com/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1g74YpQmQBGDdPkU5eetYl4dZLiT9aCh2"
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://www.greatwolf.com/mason" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=10evSTfKSVSr_ex8_GzBuBZ8j0iU9mHc3"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <a href="https://lovelandcastle.com/" target="_blank" rel="noopener noreferrer">
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
        <Dropdown.Item href="https://www.visitkingsisland.com/" target="_blank">Kings Island</Dropdown.Item>
        <Dropdown.Item href="https://www.greatwolf.com/mason" target="_blank">Great Wolf Lodge</Dropdown.Item>
        <Dropdown.Item href="https://cincinnatizoo.org/" target="_blank">Cincinnati Zoo and Botanical Garden</Dropdown.Item>
        <Dropdown.Item href="https://www.newportaquarium.com/" target="_blank">New Port Aquarium</Dropdown.Item>
        <Dropdown.Item href="https://bcmuseum.org/" target="_blank">Behringer-Crawford Museum</Dropdown.Item>
        <Dropdown.Item href="https://www.cincymuseum.org/" target="_blank">Cincinnati Museum Center</Dropdown.Item>
        <Dropdown.Item href="https://www.mlb.com/reds/hall-of-fame" target="_blank">Cincinnati Reds Hall of Fame and Museum</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnati-oh.gov/cincyparks/" target="_blank">Cincinnati Parks</Dropdown.Item>
        <Dropdown.Item href="https://www.greatparks.org/" target="_blank">Great Parks of Hamilton County</Dropdown.Item>
        <Dropdown.Item href="https://www.cincynature.org/" target="_blank">Cincinnati Nature Center</Dropdown.Item>
        <Dropdown.Item href="https://lovelandcastle.com/" target="_blank">Loveland Castle</Dropdown.Item>
        <Dropdown.Item href="https://www.cincyfiremuseum.com/" target="_blank">Cincinnati Fire Museum</Dropdown.Item>
        <Dropdown.Item href="https://coneyislandpark.com/" target="_blank">Coney Island</Dropdown.Item>
        <Dropdown.Item href="https://www.cincymuseum.org/childrensmuseum/" target="_blank">The Children's Museum</Dropdown.Item>
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

export default FamilyFun