import React, { Component} from 'react'
import Button from '@material-ui/core/Button'


export default class TextContent extends Component {
  render() {
    return (
      <div className="banner-bottom">
        <div className="container">
          <div className="col-md-6 w3layouts_banner_bottom_left">
            <img src="/static/images/1-1.png" alt=" " className="img-responsive" />
          </div>
          <div className="col-md-6 w3layouts_banner_bottom_right">
            <h4>welcome to MyCareerChoice</h4>
            <p>
              The secret to career satisfaction lies in doing what you enjoy most. Careers that match your personality style make the best use of your natural gifts and talents and will give you the greatest happiness in your life. There is a strong link between the career you choose and your purpose in life. Your Career is the vehicle that carries you to your purpose.
            </p>
            <div className="w3_more">
            <Button size="large" color="primary" variant="outlined" href="about" >
              Read More
            </Button>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <style jsx>{`
          h4{
            font-size: 26px;
            margin-bottom: 10px ;
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