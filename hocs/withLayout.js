import Footer from "../components/layout/Footer";
import Testimonials from "../components/Homepage/Testimonials";
import Scripts from "../components/Scripts";
import { ToastContainer } from "react-toastify";

import { LoginModalWrapper } from "../contexts/LoginModalContext";

export default function withLayout(Child, opts = {}) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context, apolloClient) {
      let ChildProps = {};
      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context, apolloClient);
      }

      return {
        ...ChildProps
      };
    }

    render() {
      const { showSignIn } = this.props;
      const { disableEndorsement = false } = opts;

      return (
        <div>
          <div>
            <div className="">
              <LoginModalWrapper showSignIn={showSignIn}>
                <Child {...this.props} />
              </LoginModalWrapper>
              {!disableEndorsement && <Testimonials />}
              <Footer />
            </div>
            <Scripts />
          </div>
          <style jsx>
            {`
              a {
                text-decoration: none;
              }
            `}
          </style>
          <ToastContainer />
        </div>
      );
    }
  }

  return WrappedComponent;
}
