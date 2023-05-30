import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const ArtsMusic = () => {
  return (
    <div>
 
  <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1HwK89GrdGYYzEobGaNivJ7pTn69hZGwt"
          alt="First slide"
        />
        <Carousel.Caption>
        <Button variant="secondary">FEATURED ATTRACTIONS</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1X60jHSz3fv2DwlVCfHM93hh1c4_ezT4g"
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="https://www.artworkscincinnati.org/public-art/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1xH_OYPRCfXAQXhPIFnLG4q2B61Qk7ut9"
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://www.cincyblackmusicwalkoffame.org/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1z0Q9ferX7CCnDK9ZOl6XoX0beBbcpor0"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <a href="https://www.americansignmuseum.org/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1migdmge_KMeEHybPMVi0eQPVlfHhcxHT"
          alt="Fifth slide"
        />
        <Carousel.Caption>
        <a href="https://www.cincinnatiarts.org/music-hall" target="_blank" rel="noopener noreferrer">
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
        <Dropdown.Item href="https://www.artworkscincinnati.org/public-art/" target="_blank">ArtWorks Murals</Dropdown.Item>
        <Dropdown.Item href="https://www.cincyblackmusicwalkoffame.org/" target="_blank">Black Music Walk of Fame</Dropdown.Item>
        <Dropdown.Item href="https://www.21cmuseumhotels.com/cincinnati/" target="_blank">21c Museum Hotel</Dropdown.Item>
        <Dropdown.Item href="https://www.americansignmuseum.org/" target="_blank">American Sign Museum</Dropdown.Item>
        <Dropdown.Item href="https://bradymusiccenter.com/" target="_blank">Andrew J Brady Music Center</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiarts.org/aronoff-center-home" target="_blank">Aronoff Center for the Arts</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiartmuseum.org/" target="_blank">Cincinnati Art Museum</Dropdown.Item>
        <Dropdown.Item href="https://cballet.org/" target="_blank">Cincinnati Ballet</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiarts.org/music-hall" target="_blank">Cincinnati Music Hall</Dropdown.Item>
        <Dropdown.Item href="https://www.cincinnatiopera.org/" target="_blank">Cincinnati Opera</Dropdown.Item>
        <Dropdown.Item href="https://www.contemporaryartscenter.org/" target="_blank">Contemporary Arts Center</Dropdown.Item>
        <Dropdown.Item href="https://freedomcenter.org/" target="_blank">National Underground Railroad Freedom Center</Dropdown.Item>
        <Dropdown.Item href="https://www.taftmuseum.org/" target="_blank">Taft Museum of Art</Dropdown.Item>
        <Dropdown.Item href="https://tafttheatre.org/" target="_blank">Taft Theatre</Dropdown.Item>
        <Dropdown.Item href="https://thecarnegie.com/" target="_blank">The Carnegie</Dropdown.Item>
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

export default ArtsMusic