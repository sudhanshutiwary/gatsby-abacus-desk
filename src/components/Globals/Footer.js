import React from 'react'
import footer from '../../images/footer.jpg'


export default function Footer(){
    return(
        <footer style={{backgroundImage:`url(${footer})`}}>
            <article className="heading-area-footer">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="menu-contant">
                                <h2>How can we help?</h2>
                                <div className="contant-btn">
                                    <a href="https://abacusdesk.com/offices/">Let's talk <i class="fa fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </article>
        </footer>
    );
}
