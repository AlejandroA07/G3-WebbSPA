import React from 'react';
import '/public/css/footerstyle.css';
import SignUp from '../SignUpNewsletter/signUp';



function Footer() {

    return (
        
            <div className="footer text-white ">



                <div className="align-top text-center">

                    <dl className="row m-0">
                        <dt className="col"><a className="footer-nav-headline" href="?topic=Halsa&sortBy=">Hälsa</a></dt>
                        <dt className="col"><a className="footer-nav-headline" href="?topic=SamhalleKonflikter&sortBy=">Samhälle & Konflikter</a></dt>
                        <dt className="col"><a className="footer-nav-headline" href="?topic=Miljo&sortBy=">Miljö</a></dt>
                        <dt className="col"><a className="footer-nav-headline" href="?topic=VetenskapTeknik&sortBy=">Vetenskap & Teknik</a></dt>
                        <dt className="col"><a className="footer-nav-headline" href="?topic=LivsstillFritt&sortBy=">Livsstil & Fritid</a></dt>
                        <dt className="col"><a className="footer-nav-headline" href="?topic=Ekonomi&sortBy=">Ekonomi</a></dt>
                        <dt className="col"><a className="footer-nav-headline" href="?topic=Religion&sortBy=">Religion</a></dt>
                        <dt className="col"><a className="footer-nav-headline" href="?topic=Idrott&sortBy=">Idrott</a></dt>

                    </dl>
                </div>

                <div className="elemento1"></div>

                <div className="row secondary-footer">

                    <div className="signup col">
                       
                                
                            <SignUp />
                        </div>


                        <div className="gridfooter col">

                            <div className="row">
                                <div className="footer-box col">
                                    <dl className="dl">
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Hjälp</a></dt>
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Klagomål</a></dt>
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Rättelse</a></dt>
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Kontakta oss</a></dt>
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Kakor</a></dt>


                                    </dl>
                                </div>

                                <div className="footer-box col">
                                    <dl className="dl">
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Alla teman</a></dt>
                                    <dt className="dt-el"><a href="#" className="footer-box-el smaller">Jobba hos oss</a></dt>
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Journalister</a></dt>
                                        <dt className="dt-el"><a href="#" className="footer-box-el smaller">Arkiv</a></dt>


                                    </dl>
                                </div>

                                <div className="footer-box col">
                                    <dt className="dt-el"><a href="https://www.facebook.com/" className="footer-box-el smaller">Facebook</a></dt>
                                    <dt className="dt-el"><a href="https://www.youtube.com/" className="footer-box-el smaller">YouTube</a></dt>
                                    <dt className="dt-el"><a href="https://www.instagram.com/" className="footer-box-el smaller">Instagram</a></dt>
                                    <dt className="dt-el"><a href="https://www.linkedin.com/" className="footer-box-el smaller">LinkedIn</a></dt>
                                    <dt className="dt-el"><a href="https://twitter.com/" className="footer-box-el smaller">Twitter</a></dt>
                                </div>

                                <div className="col">
                                    <h2 className="support-h2">Support us!</h2>
                                    <button id="supportbutton" className="btn-footer bf-2">Support us</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <p>&#169; 2023 Grupp3 WebbNews Mjaumjau. All rights reserved.</p>
                </div>
                //{/*<script src="~/lib/jquery/dist/jquery.min.js"></script>*/}
                //{/*<script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>*/}
                //{/*<script src="~/js/site.js" asp-append-version="true"></script>*/}
                //{/*@await RenderSectionAsync("Scripts", required: false)*/}



            
            );
}

export default Footer;