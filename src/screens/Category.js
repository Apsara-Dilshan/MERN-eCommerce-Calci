import React from 'react';
import Womens from '../images/cat-1.png';
import Mens from '../images/cat-2.png';
import custom from '../images/cat-3.png';
import Gifts from '../images/cat-4.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
// import '../home.css';

const Category = () => {
  return (
    <div>
      <section className="category">
        <h1 className="heading">
          {' '}
          shop by <span>category</span>{' '}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={Womens} alt="" />
            <div className="content">
              <h3>Women </h3>
              <h4>Collection By CALCI</h4>
              <Link to={`/product/Calci-Crop-Tshirt`}>
                <Button className="shopnow" type="submit">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={Mens} alt="" />
            <div className="content">
              <h3>Men </h3>
              <h4>Collection By CALCI</h4>
              <Button className="shopnow" type="submit">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="box">
            <img src={custom} alt="" />
            <div className="content">
              <h3>Print your</h3>
              <h4> own custom T-shirt</h4>
              <Button className="shopnow" type="submit">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="box">
            <img src={Gifts} alt="" />
            <div className="content">
              <h3>Gifts</h3>
              <h4>By CALCI</h4>
              <Button className="shopnow" type="submit">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
