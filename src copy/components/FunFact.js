import React, { useState } from "react";
import { FaDiceD20 } from 'react-icons/fa'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
const facts = [
  'Cincinnati was originally named Losantville. It was renamed in 1790 in honor of Lucius Cincinnatus. He was a military leader and statesman in Rome who lived from 519 to 430 B.C.E.',
  'Cincinnati is the birthplace of Neil Armstrong. He was born in Cincinnati in August 1930. After his victorious career with NASA, he went on to teach aeronautical engineering at the University of Cincinnati from 1971 to 1979.',
  'The Cincinnati Observatory is the oldest professional observatory in the country and in the entire western hemisphere. It was established in 1842.',
  'Cincinnati was a key stop in the Underground Railroad. Slaves escaping from the south could stop here on their way to Canada to be free. You can learn more on this subject at the National Underground Railroad Freedom Center right here in Cincinnati.',
  'Cincinnati is home to the biggest Oktoberfest in the country and second largest in the world with Germany holding the number one spot.',
  'Founded in 1895, the Cincinnati Symphony Orchestra is the sixth oldest orchestra in the country.',
  'Cincinnati is the home to the only ventriloquist museum in the world. The museum is called Vent Haven Museum and can only be visited via appointment.',
  'The Cincinnati Reds was the first Major League Baseball team in the country. Established in 1890, the team was originally named the Cincinnati Red Stockings.',
  'Cincinnati is known as The Queen City but do you know its other nicknames? Cincinnati is also known as The City of Seven Hills, The Queen of the West, The Blue Chip City, and Porkopolis.',
  'Cincinnati is known for its "strange" chili that includes cinnamon and chocolate in its seasoning. It is usually served on spagetti or hot dogs and piled high with cheese.', 
  'Cincinnati is "the capital of Cornhole". Locals gave rise to the party game starting back in 2005.'
];

const FunFact = () => {
  const [displayedFact, setDisplayedFact] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const randomNumber = Math.floor(Math.random() * (facts.length));
    setDisplayedFact(facts[randomNumber]).setShow(true);
  }
  //     const newFact =() =>{//     const randomNumber = Math.floor(Math.random() * (facts.length));
  //     setDisplayedFact(facts[randomNumber])
  //     // document.getElementById('factDisplay').innerHTML = facts[randomNumber];// }return (
  <div>
    <Button variant="primary" onClick={handleShow}>
      <FaDiceD20 className="icons" />
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="text-center">{displayedFact}</Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={handleClose} >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>

}

export default FunFact;