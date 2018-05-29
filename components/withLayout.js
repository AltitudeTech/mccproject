import Head from 'next/head'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Testimonials from './Homepage/Testimonials'
import Scripts from './Scripts'
import injectTapEventPlugin from 'react-tap-event-plugin'


//injectTapEventPlugin()


export default function withLayout(Child, opts) {
    return class WrappedComponent extends React.Component {
      render() {
        return (
          <div>
            <Head>
              <meta name="format-detection" content="telephone=no"/>
              <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <meta charSet="utf-8"/>
              <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
              <link href="/static/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
              <link href="/static/css/style.css" rel="stylesheet" type="text/css" media="all" />
              <script type="text/javascript" src="/static/js/jquery-2.1.4.min.js"></script>
              <link rel="stylesheet" href="/static/css/flexslider.css" type="text/css" media="screen" property="" />
              <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800,900&amp;subset=vietnamese" rel="stylesheet"/>
            </Head>
            <div>
              <div className="">
                  <Child {...this.props}/>
                  <Testimonials />
                <Footer />
              </div>
              <Scripts />
            </div>
            <style jsx>{`
              a{
                text-decoration : none
              }
            `}
            </style>
          </div>
        )
      }
    }
    //return withData(WrappedComponent)
  }