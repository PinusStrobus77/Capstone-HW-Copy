import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div>
  {/*Navbar*/}  

  {/* Masthead*/}
  <header className="masthead ">
    <div className="container-fluid px-4 px-lg-5 h-100 text-center">
      <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" id="masthead">
        <div className="col-lg-8 align-self-end">
        </div>
        <div class="col-lg-8 align-self-baseline">
        <a href="https://www.artworkscincinnati.org/mural/whats-happening-downtown/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i class="bi bi-info-lg"></i></Button></a>
        </div>
      </div>
    </div>
  </header>
  
  {/* Portfolio*/}
  <div id="portfolio">
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="/artsmusic" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1KI7zlpBG8AX7tEhREiB8AQjttZjNQr3c" alt="arts and music" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">ARTS & MUSIC:</div>
              <div className="project-name">museums, art galleries, concert halls, theatre, shows</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="/familyfun" rel="noopener noreferrer" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1h4OQXJAqD55vBM7dbI_0RIBfU4V7eF2C" alt="family fun" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">FAMILY FUN:</div>
              <div className="project-name">parks, games, entertainment for children</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="/fooddrink" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1SYjAps7nUzu7ibU_PmNDso-hjaEuuAou" alt="food and drink" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">FOOD & DRINK:</div>
              <div className="project-name">restaurants, markets, breweries, pubs, night life</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="/heritagehistory" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1rBc_lu75ywji4jpJ1Nr_sDC7Oe0rxlmi" alt="history and heritage" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">HERITAGE & HISTORY:</div>
              <div className="project-name">museums, monuments, houses, villages</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="/outdoors" title="">
            <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1yAM5l1O76fwtjDluHP-lNW16ky8Jtxqu" alt="outdoors" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">OUTDOORS:</div>
              <div className="project-name">zoo and botanical garden, parks, swimming, sightseeing</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="/sports" title="">
           <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=14GSBgAMF6AZY2iMd-hrMBYirkird01T3" alt="sports" /> 
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">SPORTS & GAMING:</div>
              <div className="project-name">games, competions, recreation</div>
            </div>
            </a>
        </div>
        
        
      </div>
    </div>
  </div>
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1cs4ypfp8uS5oDm_MBwEhsg6oKGsrQS7I"
          alt="Highlights"
        />
        <Carousel.Caption>
        <Button variant="secondary">FEATURED ATTRACTIONS</Button>{' '}        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1oxNaFJnenu9pUk-RK7dmloc51DQViL04"
          alt="Highlights"
        />
        <Carousel.Caption>
        <a href="https://www.artworkscincinnati.org/public-art/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1gHLBmuq_94VUm_29IrBg7RxONXKiENV6"
          alt="Highlights"
        />
        <Carousel.Caption>
        <a href="https://www.visitkingsisland.com/" target="_blank" rel="noopener noreferrer">
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1jr18bKnKTxrM0XZrnwicjPVS5jEWHEkm"
          alt="Highlights"
        />
        <Carousel.Caption>
        <a href="https://madtree.com/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1LSqONgbstoG2az4rCQOBppQJWCDRAsq4"
          alt="Highlights"
        />
        <Carousel.Caption>
        <a href="https://freedomcenter.org/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1-TucT1U1aq2ElA3nnWvqxwMErne3YUc1"
          alt="Highlights"
        />
        <Carousel.Caption>
        <a href="https://www.mlb.com/reds/hall-of-fame" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1za6avGNMUr_DPKgCKeyoI6qW8YC9BBGe"
          alt="Highlights"
        />
        <Carousel.Caption>
        <a href="https://cincinnatizoo.org/" target="_blank" rel="noopener noreferrer"> 
        <Button variant="info">VISIT WEBSITE</Button>{' '}</a>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

  {/* Footer*/}
  
</div>
  )
}

export default Home