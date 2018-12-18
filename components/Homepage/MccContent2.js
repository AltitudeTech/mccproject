import React, { Component, Fragment } from 'react'
import StepsCarousel from './StepsCarousel'
export default props =>
<Fragment>
<div style={{ background : '#e5e5e5', paddingBottom: '30px', paddingTop: '30px'}} >
	<div className="container">
		<StepsCarousel />
	</div>
    <style jsx>{`
        h4{
        margin-bottom: 10px;
        text-transform: uppercase;
        text-align : center ;
        font-size: 26px;
        letter-spacing: 5px;
        color:#fff;
        position: relative;
        padding: 1.5em;
        }
        p{
            font-size: 18px;
            line-height : 30px;
            color : #b2b2b2 ;
        }
        `}
    </style>
</div>
</Fragment>
