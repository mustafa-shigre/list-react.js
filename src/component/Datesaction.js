import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Datesaction = ({deletedates,showdates}) => {
  return (
    <Row className="justify-content-center my-2 ">
        <Col sm="8" className="d-flex justify-content-between">
          <Button className="btn-style p-2" onClick={showdates}>عرض الكل</Button>
          <Button className="btn-style p-2" onClick={deletedates}>مسح الكل</Button>
        </Col>
      </Row>
  )
}

export default Datesaction
