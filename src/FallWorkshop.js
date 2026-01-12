    import React from "react";
    import Header from "./components/Header";
    import './FallWorkshop.css';
    import Footer from "./components/Footer";

    function FallWorkshop() {
        return (
            <div>
                <Header />
                <div className="fall_workshop_title">
                    <h1 className="fall_workshop_title_line">Fall College Workshop</h1>
                    <h1 className="fall_workshop_title_line">Series</h1>
                </div>

                <div className="fall_workshop_content">
                    <p className="workshop_desc">
                        Every year in the fall, our committee<br />
                        puts on a series of two online<br /> 
                        workshops catered to high school<br />
                        students about the UC college<br />
                        application process and how to<br />
                        choose an engineering major.<br />
                        Attendees will hear from UCLA<br />
                        students about their experiences in<br /> 
                        engineering and offer tips for how to<br />
                        maximize their applications.<br />
                    </p>

                    <div className="workshop_image_container">
                        <img className="workshop_top_image" src="/images/fcws_1.png" />
                        <img className="workshop_bottom_image" src="/images/fcws_2.png" />
                        <div className="prev_rec_box">
                            <a href="https://drive.google.com/file/d/11FC9wxpi1KcuntLHMAYcNM7kdhqHML4p/view?usp=sharing" target="_blank">Applying to Engineering</a>
                            <a href="https://drive.google.com/file/d/1RL3aJ8gyOtQMF13HL6oqiffNq32FDxwc/view?usp=sharing" target="_blank">Meet the Majors</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    export default FallWorkshop;