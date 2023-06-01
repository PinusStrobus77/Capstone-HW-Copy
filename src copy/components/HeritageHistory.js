import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const HeritageHistory = () => {
  return (
    <div>
 
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1ks9QzUgShrK-EqbT5_0s9V62dnBhvm1m"
          alt="First slide"
        />
        <Carousel.Caption>
        <a href="https://www.artworkscincinnati.org/mural/canal-at-vine-street-circa-1900/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i class="bi bi-info-lg"></i></Button></a> <Button variant="secondary">FEATURED ATTRACTIONS  <i class="bi bi-caret-right"></i></Button>{' '}        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1rA1TPd-M-hJkd8wVryhw0OBcKRqwIgch"
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="https://freedomcenter.org/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1cPYL3XBWfifgf4GCDDoSaBASIEroIp-W"
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://heritagevillagecincinnati.org/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1A-x06Gdhcp9WOcHS3Jm3lBrDvdcBtJzc"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <a href="https://www.americanlegacytours.com/" target="_blank" rel="noopener noreferrer">
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
      <Dropdown.Item href="https://freedomcenter.org/" target="_blank">National Underground Railroad Freedom Center</Dropdown.Item>
        <Dropdown.Item href="https://heritagevillagecincinnati.org/" target="_blank">Heritage Village Museum</Dropdown.Item>
        <Dropdown.Item href="https://www.americanlegacytours.com/" target="_blank">American Legacy Tours</Dropdown.Item>
        <Dropdown.Item href="https://www.cincymuseum.org/" target="_blank">Cincinnati Museum Center</Dropdown.Item>
        <Dropdown.Item href="https://www.mlb.com/reds/hall-of-fame" target="_blank">Cincinnati Reds Hall of Fame and Museum</Dropdown.Item>
        <Dropdown.Item href="https://lovelandcastle.com/" target="_blank">Loveland Castle</Dropdown.Item>
        <Dropdown.Item href="https://www.cincyfiremuseum.com/" target="_blank">Cincinnati Fire Museum</Dropdown.Item>
        <Dropdown.Item href="https://www.holocaustandhumanity.org/" target="_blank">Center for Holocaust & Humanity Education</Dropdown.Item>
        <Dropdown.Item href="https://www.cincymuseum.org/heritage-programs/" target="_blank">Cincinnati Heritage Programs</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiobservatory.org/" target="_blank">The Cincinnati Observatory</Dropdown.Item>
        <Dropdown.Item href="https://eastrow.org/" target="_blank">East Row Historic District</Dropdown.Item>
        <Dropdown.Item href="https://www.facebook.com/GermanHeritageMuseum" target="_blank">German Heritage Museum</Dropdown.Item>
        <Dropdown.Item href="http://stowehousecincy.org/index.html" target="_blank">Harriet Beecher Stowe House</Dropdown.Item>
        <Dropdown.Item href="https://brewingheritagetrail.org/" target="_blank">Brewing Heritage Trail</Dropdown.Item>
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

export default HeritageHistory