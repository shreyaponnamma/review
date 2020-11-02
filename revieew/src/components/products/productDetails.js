import React from "react";
import "./style.css";
import $ from "jquery";
import Forms from "../review/review"
import Existing from "../existingreview/existing"

class Button extends React.Component {
    render() {
        return (
            <button {...this.props} className="btn-r">
                Write a review
            </button>
        );
    }
}

class Product extends React.Component {
    jqueryMethod = () => {
        $('.color-choose input').on("click", (e) => {
            var headphonesColor = e.currentTarget.getAttribute('data-image');

            $('.active').removeClass('active');
            $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
            $(this).addClass('active');
        });
    }
    componentDidMount() {
        this.jqueryMethod();
    }

    constructor() {
        super();

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.setfalse = this.setfalse.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    setfalse() {
        this.setState({
            clicked:false
        })
    }
    render = () => {


        return (
            <main className="container">
                <div className="left-column">
                    <img data-image="black" src="https://th.bing.com/th/id/OIP.blCIYX3c3Tx6vPXC0xD46wHaGk?w=237&h=210&c=7&o=5&dpr=1.25&pid=1.7" alt="" />
                    <img data-image="blue" src="https://th.bing.com/th/id/OIP.JCQ73ceygFkNDy9aRJeCBgHaGk?pid=Api&rs=1" alt="" />
                    <img data-image="red" className="active" src="https://th.bing.com/th/id/OIP.7wwHwLPlnDPErPxFa236fAHaFu?pid=Api&rs=1" alt="" />

                    <div className="overall">
                        <p>Customer Rating</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <p className="r-num">based on 3 reviews</p>

                       </div>
                </div>
                <div className="right-column">
                    <div className="product-description">
                        <h1>BOSE HEADPHONES</h1>
                        <div className="product-price">
                            <span className="cost1">$450</span>
                            <span className="cost">$500</span>
                        </div>
                        <div className="star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable htmlFor live perhtmlFormance</p>
                    </div>

                    <div className="product-configuration">
                        <p><button className="btn1">ADD TO CART</button></p>
                        <p><button className="btn2">ADD TO WISHLIST</button></p>

                    </div>

                    <div className="product-color">
                        <span>Color</span>

                        <div className="color-choose">
                            <div>
                                <input data-image="red" type="radio" id="red" name="color" value="red" />
                                <label htmlFor="red"><span></span></label>
                            </div>
                            <div>
                                <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
                                <label htmlFor="blue"><span></span></label>
                            </div>
                            <div>
                                <input data-image="black" type="radio" id="black" name="color" value="black" />
                                <label htmlFor="black"><span></span></label>
                            </div>
                        </div>

                    </div>

                    <div className="tags">
                        <p>Collections : </p>
                        <p><a href="#">Laptops, </a></p>
                        <p><a href="#">Mobiles, </a></p>
                        <p><a href="#">Camera, </a></p>
                        <p><a href="#">Mouse, </a></p>
                        <p><a href="#">Fashion, </a></p>
                        <p><a href="#">Earphones, </a></p>
                        <p><a href="#">Shoe</a></p>
                    </div>
                    <div className="review">
                        <div className="title">
                            <div>
                                <Button onClick={this.handleClick} />
                                {this.state.clicked ? <Forms setfalsefunction={this.setfalse}/> : null}
                            </div>
                        </div>
                    </div>
                    <Existing />

                </div>





            </main>
        );
    };
}

export default Product