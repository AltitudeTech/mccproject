import React, { Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar';
import {greenA900, pinkA200, transparent} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default class TextContent extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <h2 className="w3ls_para">Frequently asked questions (FAQ) </h2>
          <div className="w3l_services_grids">
            <div className="row">
              <div className="col-md-12">
                {/* <p className="question">Q: What is My Career Choice?</p>
                <p className="answer">My Career Choice is the world’s No 1 online platform for making career choices. We help employers fill their vacancies quickly and cost-effectively by giving them access to the most relevant pool of qualified job-seekers.</p>

                <p className="question">Q: Who is behind Jobberman?</p>
                <p className="answer">Jobberman is a privately held company with global ambitions and consists of a well seasoned management team and advisors. The founders are Opeyemi Awoyemi, Olalekan Olude, and Ayodeji Adewunmi.</p>
                
                <p className="question">Q: Is Jobberman a recruitment firm?</p>
                <p className="answer">No. Jobberman is NOT a recruitment agency. We do not do candidate interviewing  or short-listing. When we get such request, we recommend a list of qualified recruiters that we are familiar with. We do not accept commissions for recommendations we make. </p>

                <p className="question">Q: Do you offer career advice?</p>
                <p className="answer">Yes. blog.jobberman.com offers top career advice from well-known personalities like David Eyinade, Anderson Uvie-Emeagbo, and Bode Asiyanbi, to mention a few. We are constantly looking for other experienced writers who are passionate about career and working life. </p>

                <p className="question">Q: Can I advertise with Jobberman?</p>
                <p className="answer">Yes, you can. As an employer, to advertise your job vacancies on Jobberman.com, click on 'Post a job' and choose from the options available. To advertise your brand on our website, send a mail to anu@jobberman.com for a free consultation on our advertising rates.</p>

                <p className="question">Q: How do I apply for a job?</p>
                <p className="answer">Click on the job title and follow the directions for applying in the selected listing. If you have questions about an application you have submitted, you should contact the employer directly.</p>

                <p className="question">Q: Do I need a PC before i can visit Jobberman.com?</p>
                <p className="answer">No. You can also access Jobberman.com on your mobile phone. Visit m.jobberman.com.</p>

                <p className="question">Q: What happens when I apply online for jobs posted on Jobberman.com?</p>
                <p className="answer">Your resume will be sent to the employer who will handle the hiring process. Do not worry if you do not receive immediate response. Sometimes it takes weeks or even months to sort applications. Be rest assured that the employer will contact you if you are a successful candidate.</p>

                <p className="question">Q: Do I need a resume to apply to a job posting?</p>
                <p className="answer">Yes. Your resume is what explains your focus, qualifications, strengths, as well as your commitment to starting or changing a career, which will help the employer make recruiting decisions.</p>

                <p className="question">Q: If I get a job through Jobberman.com, will Jobberman.com collect part of my salary?</p>
                <p className="answer">No, No and No. Jobberman.com does not get a cut out of your salary nor do we demand for such.</p> */}

              </div>
            </div>
          </div>
          <br/><br/>
        </div>
        <style jsx>{`
          h4{
            font-size: 26px;
            margin-bottom: 10px;
          }
          p{
            font-size : 18px ;
            line-height : 30px ;
          }
          p.question{
            font-weight: 700 ;
            text-transform: uppercase ;
          }
          p.answer{
            margin-bottom : 30px ;
          }
          p.answer::before{
            content : 'A: ' ;
            font-weight: 700 ;
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
