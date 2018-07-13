import React, { Component, Fragment } from 'react'


export default class TextContent extends Component {
  render() {
    return (
      <Fragment>
      <div className="services">
        <div className="container">
          <h2 className="w3ls_para">EXPERIENCE THE POWER OF MCC</h2>
          <div className="col-md-12">
            <p className="experience">
              Join millions of students around the world who are already enjoying the unique benefits of MCC.
              <ul>
                <li>Secondary School.</li>
                <li>Higher Education.</li>
                <li>New graduates seeking their job.</li>
                <li>Graduate from one career to another.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="services" style={{backgroundColor: '#0D0D0B'}}>
        <div className="container">
            <div className="w3l_services_grids">
              <div className="row">
                
                <div className="col-md-6">
                  <img src="/static/images/student.png" style={{width: '100%'}} />
                 </div>
                <div className="col-md-6">
                  <h4>Before you choose your subjects, ask yourself these questions: </h4>
                  <p>
                    <ul>
                      <li>What are your passions and talents?</li>
                      <li>What careers would you love?</li>
                      <li>What subjects would enable you achieve your career objectives</li>
                    </ul>
                  </p>
                  <br/>
                  <h4>What you should not do </h4>
                  <p>
                    <ul>
                      <li>Do not choose a career because of peer pressure</li>
                      <li>Do not choose your subjects just because that is what is available</li>
                      <li>Do not choose a career simply because your parents or relatives are in similar career.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>        
        </div>
      </div>
        <style jsx>{`
          h4{
            font-size: 20px;
            margin-bottom: 10px;
            text-transform : uppercase ;
            font-weight : bold ;
          }
          p{
            font-size : 18px ;
            line-height : 30px ;
          }
          
          p.experience{
            font-size : 2em ;
            line-height : 1.5em ;
          }
          li{
            font-size : 16px ;
            margin : auto 15px ;
            line-height : 30px ;
          }
          .w3l_services_grids{
            color : #fff !important ;
          }
          p.experience ul li{
            font-size : 0.8em ;
            margin : auto 15px ;
            line-height : 1.4em ;
          }
          p.experience ul {
            margin : 20px 15px ;
          }
          `}
        </style>
      </Fragment>
    );
  }
}