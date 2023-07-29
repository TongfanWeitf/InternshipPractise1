import React , { Component } from 'react'
//import { MDCRipple } from '@material/ripple';
//import { MDCTextField } from '@material/textfield';
import './Card.scss';
import foodData from './FoodData.json';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Carousel from 'react-material-ui-carousel';

class Food extends Component {

    constructor(){
        super()
        this.state = {
            items: foodData,
        }
        console.log(foodData);
    };

    // SetPrice(){
    //     this.setState ({
    //         count: this.state.price
    //     },
    //     ()=>{
    //         console.log('Callback value', this.state.price)
    //     })
    //     console.log(this.state.price)
    // }

    // SetLikes(){
    //     this.setState ({
    //         count: this.state.likes + 1
    //     },
    //     ()=>{
    //         console.log('Callback value', this.state.likes)
    //     })
    //     console.log(this.state.likes)
    // }

  render(){
    const item = this.state.items[0];
    return (
        <div className="mdc-card">
            <div className="mdc-card__primary-action" style={{ display: 'flex', flexDirection: 'row' }}>
                <div style = {{width: 300}}>
                    <h2 className="mdc-typography mdc-typography--headline6">
                        {item.name}
                    </h2>
                    <p className="mdc-typography mdc-typography--body2">
                        {item.description}
                    </p>
                    <div className="my-card__price" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <p className="mdc-typography mdc-typography--headline6">$ 
                            {item.price}
                        </p>
                        <button className="mdc-button mdc-button--raised">
                            Like
                        </button>
                    </div>
                </div>

                {/* <div className="mdc-card__media my-card__media" 
                    style={{
                        
                        backgroundImage: `url(${item.imageUrl})`,
                        backgroundSize: 'cover',
                        height: '200px',
                        width: '200px',
                    }}>
                </div> */}

                <a href={item.videoUrl2} target="_blank" rel="noopener noreferrer">
                    <img src={item.imageUrl1} style={{width: '200px', height: '200px'}} alt={item.name} />
                </a>
            </div>
        </div>
    )
  }
}

export default Food;
