import React from 'react';


export default function PartyBox({ title, time, icon, iconf, icont, iconi, icony }) {
    return (
        <>
            <div className="party_item">
                <div className="party_item_icon">
                    <span>{icon} </span>
                </div>
                <div className="party_item_content">
                    <h6>{title}</h6>
                    <div className="text">
                        <p>{time}</p>
                        <div className="party_item_box_icons">
                            <ul>
                                <li>
                                    <a href="/"><i>{iconf}</i></a>
                                </li>
                                <li>
                                    <a href="/"> <i> {icont}</i></a>
                                </li>
                                <li>
                                    <a href="/"><i>{iconi}</i></a>
                                </li>
                                <li>
                                    <a href="/"> <i>{icony}</i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

<div className="party_item_button">
    <a href="/" className="party_item_btn btn">SUBMIT</a>
</div>

// .party_item_button .party_btn {
//     background-color: #fb0;
//     font-size: 12px;
//     font-weight: 500;
//     padding: 12px 30px;
//     color: #fff !important;
//     width: 90%;
//     border-radius: 5px;
//     outline: none;
//     transition: all 0.5s ease;
// }
// .party_item_button .party_item_btn:hover {
//     border: 1px solid #fb0;
//     background: transparent;
//     color: #fb0 !important;
// }