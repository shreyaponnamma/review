import React from "react";
import "./style.css";


export default class Existing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           revies: [
                {
                    name: "ABC",
                    email: "test@test.com",
                    rating: "1.5",
                    title: "Bad Product",
                    review: "Worst product. Not recommended"
                },
                {
                    name: "Test",
                    email: "test@test.com",
                    rating: "3",
                    title: "Average",
                    review: "Recommended product"
                },
                {
                    name: "XYZ",
                    email: "test@test.com",
                    rating: "3.5",
                    title: "Not bad",
                    review: "okay. Value for money"
                }
            ]
        }
    }

    renderreview (r, id) {
        return (

            <div className="r-cont">
                <div className="review">
                    <p className="r-title">{r.title}</p>
                    <p >{r.rating} stars</p>
                    <p className="r-review">{r.review}</p>
                    <p className="r-name">Rating by {r.name}</p>
                </div>
            
            </div>
   
        )
    }

    render ()  {
        return(
            <div className="btn-review">
                {this.state.revies.map(this.renderreview)}
            </div>
        );
    }

}
