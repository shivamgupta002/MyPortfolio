import React from 'react'
import './Project.css'
import data from './Project_data'
import Card from './Project_Card';

const Project = () => {
  return (
    <>
      <div className="features top" id="features" >
        <div className="container">
          <div className="heading text-center" data-aos="zoom-in-down">
            <h4>What I Done</h4>
            <h1>Project</h1>
          </div>
          <div className="content newFlex" data-aos="zoom-out-down">
            {data.map((val,index)=>{
              return <Card key={index} link={val.link} title={val.title} image={val.image} desc={val.desc}/>;

            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
