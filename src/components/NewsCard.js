import React from 'react';

const NewsCard = (props) => {
    return (
        <div>
            <section id="news-card">
                <div className="card mx-15 mb-4 border">
                    <div className="card-header bg-white d-flex justify-content-center p-0 border-bottom">
                        <img src={props.src} alt=""/>
                    </div>
                    <div className="card-body">
                        <div className="card-icons">
                            <div className="calendar d-flex align-items-center mr-auto">
                                <span className="cursor-pointer icons icon-calendar mr-2"/>
                                <span className="color-grey">16:48 / 12.11.20</span>
                            </div>
                            <div className="view d-flex align-items-center">
                                <span className="cursor-pointer icons icon-views mr-2 m-top-3"/>
                                <span className="color-grey">321</span>
                            </div>
                            <div className="message d-flex align-items-center ml-auto">
                                <span className="cursor-pointer icons icon-message mr-2"/>
                                <span className="color-grey">100</span>
                            </div>

                        </div>
                        <h3 className="card-title-text">{props.title}</h3>
                        <p className="description">{props.description}</p>
                        <button type="button" className="btn shadow-none px-4 mb-2">Batafsil</button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NewsCard;