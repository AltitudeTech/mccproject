import { Fragment } from 'react'

export default props => (
  <Fragment>
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
    <style jsx>{`
      .spinner {
        // margin: 100px auto;
        width: 32px;
        height: 40px;
        text-align: right;
        font-size: 10px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 20px;
      }

      .spinner > div {
        background-color: ${props.color || '#0c6053'};
        // background-color: #09925E;
        // background-color: #ffffff;
        height: 100%;
        width: 6px;
        display: inline-block;

        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
      }

      .spinner .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }

      .spinner .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }

      .spinner .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }

      .spinner .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }

      @-webkit-keyframes sk-stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
        20% { -webkit-transform: scaleY(1.0) }
      }

      @keyframes sk-stretchdelay {
        0%, 40%, 100% {
          transform: scaleY(0.4);
          -webkit-transform: scaleY(0.4);
        }  20% {
          transform: scaleY(1.0);
          -webkit-transform: scaleY(1.0);
        }
      }
    `}</style>
  </Fragment>
)
