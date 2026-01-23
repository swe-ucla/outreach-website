    import React from "react";
    import Header from "./components/Header";
    import "./ProjectScientist.css";
    import "./FallWorkshop.css";
    import Footer from "./components/Footer";

    function FallWorkshop() {
        return (
            <div>
                <Header />
                <div className="projsci-top">
                    <div className="text">
                        <h1 className="title">Fall College Workshop Series</h1>
                        <p className="description">
                            Every year in the fall, our committee puts on a series of two
                            online workshops catered to high school students about the UC
                            college application process and how to choose an engineering
                            major. Attendees will hear from UCLA students about their
                            experiences in engineering and offer tips for how to maximize
                            their applications.
                        </p>
                    </div>

                    <div className="fall_workshop_content">
                        <h2 className="workshop_subtitle">Previous Recordings</h2>
                        <div className="workshop_cards">
                            <div className="workshop_card">
                                <img
                                    className="workshop_card_image"
                                    src="/images/fcws_1.png"
                                    alt="Meet the Majors recording"
                                />
                                <a
                                    className="workshop_card_link"
                                    href="https://drive.google.com/file/d/1RL3aJ8gyOtQMF13HL6oqiffNq32FDxwc/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    learn more
                                </a>
                            </div>
                            <div className="workshop_card">
                                <img
                                    className="workshop_card_image"
                                    src="/images/fcws_2.png"
                                    alt="Applying to Engineering recording"
                                />
                                <a
                                    className="workshop_card_link"
                                    href="https://drive.google.com/file/d/11FC9wxpi1KcuntLHMAYcNM7kdhqHML4p/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    export default FallWorkshop;
