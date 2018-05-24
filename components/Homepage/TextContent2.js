import React, { Component, Fragment } from 'react'

export default props =>
<Fragment>
    <div className="about" style={{background: '#000'}}>
        <div className="container">
            <h3 className="text-center" title="Click Here To Login as Student">pre-degree subjects, Bachelors, Masters, Doctorate, & Professional Studies, any where in the world<span style={{color:'#F44336'}}> *</span></h3>
            <p className="text-center" style={{color:'#F44336'}}>* Exclusive service for MCC clients only</p>
        </div>
        <style jsx>{`
            h3 {
                font-size: 2.5em;
                text-transform: capitalize;
                color: #fff
            }
        `}
        </style>
    </div>
</Fragment>