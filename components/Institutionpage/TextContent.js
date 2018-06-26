import React, { Component, Fragment } from 'react'
import { LoginModalContext } from '../Context/LoginModalContext'

export default class TextContent extends Component {
  render() {
    return (
      <Fragment>
      <div className="services">
        <div className="container">
          <h2 className="w3ls_para">LET YOUR INSTITUTION EXPERIENCE THE IMPACT OF MCC </h2>
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
      <div className="services" style={{backgroundColor: '#071427'}}>
        <div className="container">
            <div className="w3l_services_grids">
              <div className="row">
                <div className="col-md-7">
                  <LoginModalContext.Consumer>{
                    ({handleModalOpen, handleTabChange, changeRegisterType}) => {
                      const showRegisterModal = (event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        handleModalOpen();
                        handleTabChange(1);
                        changeRegisterType(null,null,2);
                      }
                      return (<p className="institution">
                        Institutions may register, to create an institutional account that enables the institution to purchase in bulk prices which are 20 percent
                        cheaper than individual student purchase.<a onClick={showRegisterModal} href=""> Register as an Institution.</a>
                      </p>)
                    }
                  }</LoginModalContext.Consumer>
                <p className="institution">
                    All institutions that has benefited from MCC program have also recorded a higher level of student performance in their chosen subjects.
                </p>
                </div>
                <div className="col-md-5">
                  <img src="/static/images/institution.jpg" style={{width: '100%'}} />
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
          p.institution{
            font-size : 20px ;
            line-height : 50px ;
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
