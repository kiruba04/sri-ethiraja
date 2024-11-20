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
          <div className="slide"><img src="https://res.cloudinary.com/dsgdnskfj/image/upload/v1732118488/1311_mn56mg.jpg" alt="Logo 2" /></div>
          <div className="slide"><img src="https://res.cloudinary.com/dsgdnskfj/image/upload/v1732118154/KK_WELL_CARE_dbmwdd.png" alt="Logo 3" /></div>
          <div className="slide"><img src="https://res.cloudinary.com/dsgdnskfj/image/upload/v1730736307/2_wf4hf0.png" alt="Logo 4" /></div>
          <div className="slide"><img src="https://res.cloudinary.com/dsgdnskfj/image/upload/v1732118182/Energy_it_s_Green_jb4bwe.png" alt="Logo 5" /></div>
          <div className="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Logo 6" /></div>
          <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Logo 7" /></div>
        </Slider>
      </section>
    </div>
    </div>
  );
};

export default PartnerCarousel;
