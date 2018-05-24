import React, { Component, Fragment} from 'react'
import CommonNav from './CommonNav'

const Nav2 = () => (
<Fragment>
    <div className="banner1">
    <CommonNav />
    </div>
        <style jsx>{`
            .banner1{
                background: url('/static/images/bannerAbout.jpg') ;
                background-size : cover;
            }
        `}
        </style>
</Fragment>
)

export default Nav2
