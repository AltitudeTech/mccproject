import React, { Component} from 'react'



export default class TextContent extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <div className="w3l_services_grids">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  My Career Choice currently runs an “affiliate program” for highly vetted
                  career professionals with proven and existing network of students and
                  institutions.
                </p>
                <p>
                  To register your interest in becoming an affiliate, please
                  fill the form below.
                </p>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
        <style jsx>{`
          .services{
            padding-bottom: 1em;
          }
          h4{
            font-size: 26px;
            margin-bottom: 10px;
          }
          p{
            font-size : 18px ;
            line-height : 30px ;
          }
          li{
            font-size: 16px;
            line-height : 30px;
            color : black ;
          }
          `}
        </style>
      </div>
    );
  }
}
