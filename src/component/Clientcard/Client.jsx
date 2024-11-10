import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Client.css';

const PartnerCarousel = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className='clientcontainer mt-2'>

    <div className="container ">
      <div className='heading'>Our Clients</div>
      <section className="customer-logos">
        <Slider {...settings}>
          <div className="slide"><img src="https://www.logotypes101.com/logos/826/81E721CF7D1ADFD40EA78BCE2668F911/cri_logo.png" alt="Logo 1" /></div>
          <div className="slide"><img src="https://th.bing.com/th/id/OIP.GB0A0v7sXHUM15bFa6DRpAAAAA?rs=1&pid=ImgDetMain" alt="Logo 2" /></div>
          <div className="slide"><img src="https://res.cloudinary.com/dsgdnskfj/image/upload/v1730736095/tagline_zublxb.png" alt="Logo 3" /></div>
          <div className="slide"><img src="https://res.cloudinary.com/dsgdnskfj/image/upload/v1730736307/2_wf4hf0.png" alt="Logo 4" /></div>
          <div className="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Logo 5" /></div>
          <div className="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Logo 6" /></div>
          <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Logo 7" /></div>
        </Slider>
      </section>
    </div>
    </div>
  );
};

export default PartnerCarousel;
