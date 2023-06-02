import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Sports = () => {
  return (
    <div>
 
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1jaycvbcjagx8RJNVfdC0iycwyTS7DwhD"
          alt="First slide"
        />
        <Carousel.Caption>
        <a href="https://www.artworkscincinnati.org/mural/ezzard-charles-the-cincinnati-cobra/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i class="bi bi-info-lg"></i></Button></a>{' '} 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1UHLQYzbpMMtT6pVFmnrFFxDYmbiZ-xw7"
          alt="Second slide"
        />

        <Carousel.Caption>
        <a href="https://www.mlb.com/reds/hall-of-fame" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1IOtk4ygaFPMo-Vu-Cs0rTzArh38iss_I"
          alt="Third slide"
        />

        <Carousel.Caption>
        <a href="https://www.bengals.com/stadium/" target="_blank" rel="noopener noreferrer">
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
        <Dropdown.Item href="https://www.mlb.com/reds/hall-of-fame" target="_blank">Reds Hall of Fame and Museum</Dropdown.Item>
        <Dropdown.Item href="https://www.bengals.com/stadium/" target="_blank">Bengal's Paycor Stadium</Dropdown.Item>
        <Dropdown.Item href="https://tqlstadium.com/" target="_blank">FC Cincinnati TQL Stadium</Dropdown.Item>
        <Dropdown.Item href="https://heritagebankcenter.com/" target="_blank">Cincinnati Cyclones Heritage Bank Center</Dropdown.Item>
        <Dropdown.Item href="https://wsopen.com/" target="_blank">Western & Southern Open</Dropdown.Item>
        <Dropdown.Item href="https://www.hardrockcasinocincinnati.com/" target="_blank">Hard Rock Casino</Dropdown.Item>
        <Dropdown.Item href="https://www.turfway.com/" target="_blank">Turfway Park Racing & Gaming</Dropdown.Item>
        <Dropdown.Item href="https://belterrapark.boydgaming.com/" target="_blank">Belterra Park Gaming & Entertainment Center</Dropdown.Item>
        <Dropdown.Item href="https://www.houdinisroomescape.com/" target="_blank">Houdini's Room Escape</Dropdown.Item>
        <Dropdown.Item href="https://braxtonbrewing.com/" target="_blank">Braxton Brewing Company</Dropdown.Item>
        <Dropdown.Item href="https://gofullthrottle.com/" target="_blank">Full Throttle Indoor Karting</Dropdown.Item>
        <Dropdown.Item href="https://www.pinsbar.com/cincy" target="_blank">Pins Mechanical</Dropdown.Item>
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

export default Sports