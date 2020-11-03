import React from "react";
import "./style.css";
import Forms from "../review/review"
import Existing from "../existingreview/existing"
import ReactImageZoom from 'react-image-zoom';
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

        const props = {width:530,height:430,zoomWidth:600,zoomPosition:"right",offset:{"vertical": 30, "horizontal": -55},scale:1.1,img: "https://brain-images-ssl.cdn.dixons.com/3/6/10152163/u_10152163.jpg" };
        return (
            <main className="container">
                <div className="left-column">
                <ReactImageZoom {...props} />
                   {/* <img  src="https://th.bing.com/th/id/OIP.7wwHwLPlnDPErPxFa236fAHaFu?pid=Api&rs=1" alt="" />*/}

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