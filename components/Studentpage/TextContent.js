import React, { Component, Fragment } from 'react'


export default class TextContent extends Component {
  render() {
    return (
      <Fragment>
      <div className="services">
        <div className="container">
          <h2 className="w3ls_para">EXPERIENCE THE POWER OF MCC </h2>
          <div className="col-md-12">
            <p>
              Proin id arcu odio. Proin tincidunt ante lacus, at commodo felis aliquam eu. Praesent ut turpis venenatis, aliquam mauris tempus, lobortis nunc. Pellentesque maximus ipsum turpis, sed blandit diam placerat ac. Proin in mi ut nulla lacinia facilisis. Nullam semper sapien eget viverra iaculis. Integer quis vestibulum lacus, imperdiet pellentesque libero.
              Cras feugiat dui augue, in malesuada sem porta id. Mauris tempor aliquam risus eget sagittis. Nulla eu imperdiet mauris. Morbi ornare ac elit luctus vestibulum.
              Proin id arcu odio. Proin tincidunt ante lacus, at commodo felis aliquam eu. Praesent ut turpis venenatis, aliquam mauris tempus, lobortis nunc. Pellentesque maximus ipsum turpis, sed blandit diam placerat ac. Proin in mi ut nulla lacinia facilisis. Nullam semper sapien eget viverra iaculis. Integer quis vestibulum lacus, imperdiet pellentesque libero.
              Cras feugiat dui augue, in malesuada sem porta id. Mauris tempor aliquam risus eget sagittis. Nulla eu imperdiet mauris. Morbi ornare ac elit luctus vestibulum. 
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
          li{
            font-size : 16px ;
            margin : auto 15px ;
            line-height : 30px ;
          }
          .w3l_services_grids{
            color : #fff !important ;
          }
          `}
        </style>
      </Fragment>
    );
  }
}