
import React from 'react';
import { Button, Carousel, Card } from 'antd';

const {Meta} = Card;
const items = [
  {
    key: '1',
    title: 'Pasangan Calon 1',
    content: 'Bersahaja, Bekerja Keras, Cerdas',
  },
  {
    key: '2',
    title: 'Pasangan Calon 2',
    content: "Membentuk Berbudi Pekerti Luhur, Adaptif, Komunikatif, dan Responsif",
  },
]

const Banner=()=> {
  return (
    <div id="hero" className="heroBlock">
    <Carousel>
      {items.map(item => {
        return (
          <div key={item.key} className="container-fluid">
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <div className="btnHolder">
                <Button type="primary" size="large">Lihat Detail</Button>
                <Button size="large"><i className="fas fa-desktop"></i> Video Orasi</Button>
              </div>
            </div>
          </div>  
        );
      })}
    </Carousel>
    </div>
  );
}

export default Banner;