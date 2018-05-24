import React, { Component, Fragment} from 'react'
import CommonNav from './CommonNav'

const Nav2 = (props) => (
<Fragment>
    <div className="banner1">
    <CommonNav {...props} />
    </div>
    <style jsx>{`
        .banner1{
            background: url('/static/images/${props.image}') ;
            background-size : cover;
        }
    `}
    </style>
</Fragment>
)

export default Nav2
