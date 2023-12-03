import { Button, Col, Container, Row } from "react-bootstrap";
import { person   } from "./data";
import DatesCount from "./component/DatesCount.js";
import Datelist from "./component/datelist";
import Datesaction from "./component/Datesaction";
import { useState } from "react";







function App() {
  const [action, setaction] = useState(person)
  const ondelete=()=>{
    setaction([])
  }
  const onshow=()=>{
    setaction(person)
  }


  return (
    <div className="font color-body" >
    <Container className="py-5">
      <DatesCount person={action} />
      <Datelist person= {action} />
      <Datesaction deletedates={ondelete} showdates={onshow} />
    </Container>
    </div>
  );
}

export default App;
