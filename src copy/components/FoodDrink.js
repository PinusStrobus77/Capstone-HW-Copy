import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const FoodDrink = () => {
  return (
    <div>
 
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1WYufN9i8s_BXbUWbHmWEUCr8SXwDR8Pn"
          alt="First slide"
        />
        <Carousel.Caption>
        <a href="https://www.artworkscincinnati.org/mural/brewing-heritage-grain-to-glass/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i class="bi bi-info-lg"></i></Button></a> <Button variant="secondary">FEATURED ATTRACTIONS  <i class="bi bi-caret-right"></i></Button>{' '}        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1xKFwJq62x9WxBCLJGxa9YS-m1XrH7kMK"
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="https://madtree.com/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1q10B0izFkMEpPMbXYr2DHWMkcmCPi9p0"
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://www.bobevans.com/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1JFELH4zzkaoqjRDOrhIIa2tkfsJ8sl-4"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <a href="https://www.findlaymarket.org/" target="_blank" rel="noopener noreferrer">
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
        <Dropdown.Item href="https://madtree.com/" target="_blank">MadTree</Dropdown.Item>
        <Dropdown.Item href="https://www.bobevans.com/" target="_blank">Bob Evans</Dropdown.Item>
        <Dropdown.Item href="https://www.findlaymarket.org/" target="_blank">Findlay Market</Dropdown.Item>
        <Dropdown.Item href="https://www.alabama-q.com/" target="_blank">Alabama Que's</Dropdown.Item>
        <Dropdown.Item href="https://braxtonbrewing.com/" target="_blank">Braxton Brewing Company</Dropdown.Item>
        <Dropdown.Item href="https://brewingheritagetrail.org/" target="_blank">Brewing Heritage Trail</Dropdown.Item>
        <Dropdown.Item href="https://junglejims.com/" target="_blank">Jungle Jim's</Dropdown.Item>
        <Dropdown.Item href="https://sweetsandmeatsbbq.com/" target="_blank">Sweets & Meats BBQ</Dropdown.Item>
        <Dropdown.Item href="https://noliakitchen.com/" target="_blank">Nolia Kitchen</Dropdown.Item>
        <Dropdown.Item href="https://www.islandfrydays.com/" target="_blank">Island Frydays</Dropdown.Item>
        <Dropdown.Item href="https://www.kjseafood.com/" target="_blank">K&J Seafood Co</Dropdown.Item>
        <Dropdown.Item href="https://www.facebook.com/OlliesTrolleyCincinnati/" target="_blank">Ollie's Trolley</Dropdown.Item>
        <Dropdown.Item href="https://www.sugarcincinnati.com/" target="_blank">Sugar</Dropdown.Item>
        <Dropdown.Item href="https://www.sweetpetitdesserts.com/" target="_blank">Sweet Petit Desserts</Dropdown.Item>
        <Dropdown.Item href="https://www.thecinemaotr.com/" target="_blank">Cinema</Dropdown.Item>
        <Dropdown.Item href="https://nostalgiaotr.com/" target="_blank">Nostalgia Wine and Jazz Lounge</Dropdown.Item>
        <Dropdown.Item href="https://www.sleepybeecafe.com/" target="_blank">Sleepy Bee Cafe</Dropdown.Item>
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

export default FoodDrink