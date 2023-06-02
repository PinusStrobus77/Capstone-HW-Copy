//worked on styling modal box and the icons in the generator

import React, { useState } from "react";
import { FaDiceD20 } from 'react-icons/fa'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
const facts = [
  'Cincinnati was originally named Losantville. It was renamed in 1790 in honor of Lucius Cincinnatus. He was a military leader and statesman in Rome who lived from 519 to 430 B.C.E.',
  'Cincinnati is the birthplace of Neil Armstrong. He was born in Cincinnati in August 1930. After his victorious career with NASA, he went on to teach aeronautical engineering at the University of Cincinnati from 1971 to 1979.',
  'The Cincinnati Observatory was established in 1842 and is the oldest professional observatory in the country and in the entire western hemisphere.',
  'The Cincinnati Observatory was established in 1842 and is the oldest professional observatory in the country and in the entire western hemisphere.',
  'Cincinnati was a key stop in the Underground Railroad. Slaves escaping from the south could stop here on their way to Canada to be free. You can learn more on this subject at the National Underground Railroad Freedom Center right here in Cincinnati.',
  'Cincinnati is home to the biggest Oktoberfest in the country and second largest in the world with Germany holding the number one spot.',
  'Founded in 1895, the Cincinnati Symphony Orchestra is the sixth oldest orchestra in the country.',
  'Cincinnati is the home to the only ventriloquist museum in the world. The museum is called Vent Haven Museum and can only be visited via appointment.',
  'The Cincinnati Reds was the first Major League Baseball team in the country. Established in 1890, the team was originally named the Cincinnati Red Stockings.',
  'Cincinnati is known as The Queen City but do you know its other nicknames? It is also known as The City of Seven Hills, The Queen of the West, The Blue Chip City, and Porkopolis.',
  'Cincinnati is known for its chili that includes cinnamon and chocolate in its seasoning. It is usually served on spagetti or hot dogs and piled high with cheese.', 
  'Cincinnati is known as The Queen City but do you know its other nicknames? It is also known as The City of Seven Hills, The Queen of the West, The Blue Chip City, and Porkopolis.',
  'Cincinnati is known for its chili that includes cinnamon and chocolate in its seasoning. It is usually served on spagetti or hot dogs and piled high with cheese.', 
  'Cincinnati is "the capital of Cornhole". Locals gave rise to the party game starting back in 2005.'
];

const FunFact = () => {
  const [displayedFact, setDisplayedFact] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const randomNumber = Math.floor(Math.random() * (facts.length));
    setDisplayedFact(facts[randomNumber]);
    setShow(true);
    setDisplayedFact(facts[randomNumber]);
    setShow(true);
  }
  
  
  return (
  <div>
    <Button variant="primary" onClick={handleShow}>
      <FaDiceD20 />
    </Button>
 
    <Modal id="modal-box"show={show} onHide={handleClose}>
      <Modal.Header className="text-right">
        <Button variant="tertiary" id="x-button" onClick={handleClose}>X</Button>
      </Modal.Header>
      <Modal.Body className="text-center">{displayedFact}</Modal.Body>
      <Modal.Footer className="justify-content-center">
      <div id="modal-icons">
        <Button variant="secondary" onClick={handleShow} >
          <FaDiceD20 />
        </Button>
        </div>
     
      </Modal.Footer>
    </Modal>
  </div>
  )
  
}

export default FunFact;