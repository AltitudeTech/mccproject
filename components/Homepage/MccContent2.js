import React, { Component, Fragment } from 'react'

export default props =>
<Fragment>
<div style={{borderBottom:'1px solid #000', background : 'rgba(12,96,83,.9)', paddingBottom: '30px'}} >
	<div className="container">
		<h4>
			DISCOVER AND DEVELOP YOUR TRUE PASSION AND TALENT FOR A PROFITABLE AND HAPPY CAREER IN FUTURE
		</h4>
		<div className="w3l_services_grids">
			<div className="row">
				<div className="col-md-4">	
                    <p>
                        We specialize in matching your true passion to suitable courses and institutions of higher education across the world.
                    </p>
                    <p>
                        Our approach is individualized, assisting our student clients on choices of higher education providers.
                    </p>
				</div>
                <div className="col-md-4">	
                    <p>
                    Against a backdrop of continuous rigorous education providers research, Our Career Advisers are best placed to assist students in making and processing the right choices. Some of the factors we consider are: reputation, cost, criteria, speciality, language, cultural suitability, length of courses, and most importantly post-graduation employability. We cover pre-degree subjects, Bachelors, Masters, Doctorate, and Professional Studies. We want you to succeed.  
                    </p>
				</div>
                <div className="col-md-4">	
                    <p>
                    Students have better and outstanding chances of future career success, if they choose a career that they love and matches their personality styles. Making the right career choices early in life improves the chances of landing a dream job in the future.
                    It is therefore wise to make this decision carefully and with proven scientific method. Many adult workers are unhappy, unfulfilled and do regret their career decisions and often find it more painful and difficult to make career changes later on in life.
                    </p>
				</div>
			</div>
		</div>
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
