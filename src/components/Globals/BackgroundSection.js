import React from 'react'
import BackgroundImage from "gatsby-background-image";
export default function BackgroundSection({
img,
styleClass,
title,
children
}){
return(
    <BackgroundImage className={styleClass} fluid={img}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="menu-contant mx-auto text-center">
                        <h1 className="title-banner">
                        Business Process Automation <br /> with Cloud-Based CRM & ERP
                        </h1>
                        <p>
                        We develop customized CRM and ERP software to provide
                enterprise-grade automation<br />
                services for various industries. A technology company at
                heart, we are driven by systems<br />
                thinking and develop all our solutions keeping the
                complexity of running a modern enterprise<br />
                in mind. We also provide cloud management to augment our
                development offerings.
                        </p>
                        <div className="contant-btn">
                <a href="https://abacusdesk.com/capabilities/crm/"
                  >Our CRM Services
                  <img
                    src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/cta-arrow/Shape.png" alt="button arrow"
                /></a>
              </div>
                    </div>
                </div>
            </div>
        </div>
        {children}
    </BackgroundImage>
);
}

BackgroundSection.defaultProps = {
    title:"Business Process Automation <br> with Cloud-Based CRM & ERP",
    styleClass:"default-background"
}