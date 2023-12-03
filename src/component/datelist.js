import React from 'react'
import { Col, Row } from 'react-bootstrap'

const datelist = ({person}) => {
  return (
    <Row className="justify-content-center">
    <Col sm="8" className="">
      <div className="rectangle p-3">
      {person.length ? (person.map((index)=>{
        return( <div key={index.id} className="d-flex border-bottom my-2">
          <img src="person-1.webp" alt="" className="img-avatar"/>
          <div className="px-3">
            <p className="d-inline fs-4">{index.name}</p>
            <p className="fs-5">{index.date}</p>
          </div>
        </div>)
      })) : <h2 className="text-center py-5">لايوجد مواعيد اليوم</h2>}
      </div>
    </Col>
  </Row>
  )
}

export default datelist
