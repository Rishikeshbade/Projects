import React from "react";
import './DescriptionBox.css'


const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Riviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An E-commerce website is an online platform that facilates the buying and selling of products or services over thr internet.It serve as a virtual marketplace where businesses and individuals can showcase their product,interact with
                    customers, and conduct transactions without the need for physical presence e-Commerce website have gained immense popularity due to their convenience accessibility, and the global reach they offer.
                </p>
                <p>
                E-Commerce website typically display products or services along with detailed description,images,prices, and any variation.Each product usually has its own dedicated page with relevant information
                </p>
            </div>
        </div>
    )
}
export default DescriptionBox