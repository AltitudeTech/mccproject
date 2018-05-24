import React, { Component, Fragment } from 'react'

export default props =>
<Fragment>
    <div className="about" style={{background: '#000'}}>
        <div className="container">
            <h3 className="text-center" title="Click Here To Login as Student">MCC cost $20. This is one off payment that must be made prior to being able to access the MCC test. There are various payment options and could be accessed once registration is completed.</h3>
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