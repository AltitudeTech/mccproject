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
          <h2 className="w3ls_para">Terms of Use </h2>
          <div className="w3l_services_grids">
            <div className="row">
              <div className="col-md-12">                
                {/* <h3>Introduction</h3>
                <p>
                This site is owned and operated by Career Intelligence Human Capital Development Company Limited. The contents and materials of this website are displayed for personal and educational use only. All contents, materials used, including without limitations, site designs, texts, graphics, audio, video and the selection and arrangements, is the property of Career Intelligence Human Capital Development Limited or its suppliers and its protected by International copyright laws.  
                </p>
                <p>
                MCC is an authorized service of Career Intelligence Human Capital Development Company Limited. Please read the TERMS OF USE carefully and seek independent legal advice is required begore use og the site. If you do not accept these terms of use, please do not use the services offered on the site. BY proceeding with an MCC assessment, you acknowledge that you have agreed to our terms of use. Career Intelligence Human Capital Development Company Limited may update these terms of use from time to time and you should therefore review this page regularly. 
                </p>
                <h3>
                Links to our websites
                </h3>
                <p>
                You may link from your site to our sites, provided that it is clearly indicated on your site that the content being accessed is the property of Career Intelligence Human Capital Development Company Limited. These links must not be for financial gain and you may not collect personal data from these links. You may not reproduce any content from our website onto your website and all links must link directly to the MCC website for downloads and information.
                </p>
                <h3>
                Links to other sites
                </h3>
                <p>
                Links may be provided on MCC website from time to time to other websites for the convenience of users. The inclusion of these links does not in any way imply endorsement by Career Intelligence Human Capital Development Company Limited. These other sites will have their own privacy policies and may collect or solicit personal information. Our policies and procedures do not apply to any external links.

                </p>

                <h3>
                Acknowledgments
                </h3>
                <p>
                Users acknowledge that MCC Reports are based solely on information provided by the user in response to an online questionnaire and that Career Intelligence Human Capital Development Company Limited cannot warrant the accuracy or truthfulness of the user’s response. MCC reports are intended to provide general behavioral information regarding the user’s personality and are a guide to assist users in their careers or personal development and education. 
                </p>

                <h3>
                Limitation of Liability and Indemnity
                </h3>
                <p>
                Career Intelligence Human Capital Development Company LImited, its Directors, Associates, Consultants, Staff or Clients are not liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including and without limitation, any damages arising out of, or in anyway connected with, the use or performance of the MCC Report or analysis of the user or any impact of any comments or analysis in respect of any decision of any person to employ, continue to employ or offer employment to, the user or otherwise, arising out of the use of the MCC Program.
                </p>
                <p>
                  In no event shall Career Intelligence Human Capital Development Company Limited, its officers, employees, partners and agents be liable to you for any damages or claim for lost profits or income, failure to secure or maintain employment, loss or depletion of goodwill or loss of opportunity, emotional stress and suffering, or damages resulting from lost data or business interruption or any indirect or consequential loss resulting from your use, inability to use, interruption, suspension or termination of the Web Site, online assessment, or your reliance upon any material or report, whether based on a breach of warranty, or contract, tort, misrepresentation or otherwise
                </p>
                
                <h3>
                Warranties
                </h3>
                <p>
                Career Intelligence Human Capital Development Company Limited  does not view or retain copies of the users MCC Reports. Reports are sent electronically to the e-mail address specified by the user. If the user is requested by a Client or School or University to complete a report then a copy of the report may also be sent to the person requesting the user complete a report.
                </p>
                
                
                <h3>Termination
                </h3>
                <p>
                Career Intelligence Human Capital Development Company Limited may terminate a Client agreement by giving the Client 30 days notice in writing by email to this effect. Clients wishing to terminate their agreement with Career Intelligence Human Capital Development Company Limited must give 30 days notice in writing by email.
                </p>
                
                
                <h3>
                  Fees
                </h3>
                <p>
                  MCC Fees are set by Career Intelligence Human Capital Development Company Limited and include value added taxes only where applicable. Career Intelligence Human Capital Development Company Limited reserves the right to set fees as may be determined by the company and to advise Clients by notifying them in writing by email 30 days in advance of any variation. No refund can be made after an MCC code has been purchased. All payments are subject to receipts, stating the amount paid and names of the payer.
                </p>

                <h3>Web Site</h3>
                <p>Career Intelligence Human Capital Development Company LImited uses all reasonable efforts to ensure the contents of its Web Sites are accurate and up to date and that the Web Site is available 24 hours a day. However, the information may contain inaccuracies or typographical errors, and the company makes no representations about the accuracy, reliability, completeness, or timeliness of the information, software or links. Changes are periodically made to the Web Site and may be made at any time. The Web Site may be unavailable or access may be interrupted from time to time due to technical failure. The company does not warrant that this Web Site and its server are free of computer viruses, infection, worms and Trojan horses and other harmful codes or properties. If your use of the Web Site or the information results in the need for servicing or replacing equipment or data, Career Intelligence Human Capital Development Company Limited is not responsible for those costs.</p>
                <p>Under no circumstances shall Career Intelligence Human Capital Development Company Limited be held liable for any delay or failure in performance resulting directly or indirectly from acts of nature, forces, or causes beyond its reasonable control, including without limitation, incorrect email addresses, internet failures, computer equipment failures, telecommunication equipment failures, other equipment failures, electrical power failures, orders of domestic or foreign courts or tribunals, or non-performance of third parties.</p>
                <h3>Conditions of Use</h3>
                <p>Career Intelligence Human Capital Development Company Limited products are for the exclusive use of its registered clients.  Products include, MCC, JobProfiling, PRET, JobMatch and include all private label and rebranded products. Career Intelligence Human Capital Development Company Limited products cannot be sold, re-sold, shared, transferred or provided free of charge to any other entity or person.  A breach of these terms will lead to Termination and legal action. </p>
                <h3>Jurisdiction</h3>
                <p>This Agreement is governed by and construed in accordance with the laws of the Federal Republic of Nigeria.. Any legal matter arising will commence and conclude within the jurisdiction of the Nigerian Courts. </p> 
                <p>Any advertisements acquired by you from JOBBERMAN must not be on-sold or supplied by you to third parties unless you are a media buyer (as approved by JOBBERMAN) whose primary business it is to acquire media on behalf of third parties, or unless you are a job recruiter and supply job recruitment services (as approved by JOBBERMAN) in conjunction with the advertisements.</p> */}

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
          
          h3{
            font-size: 25px;
            font-weight: 500 ;
            margin-bottom: 20px;
          }
          p{
            font-size : 16px ;
            line-height : 30px ;
            margin : 20px auto ;
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
