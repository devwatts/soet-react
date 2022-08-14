import ImageGallery from 'react-image-gallery';
const images = [
    {
      original: 'https://www.reviewadda.com/assets/uploads/article_images/drone.jpg',
      originalClass:'landing-highlight' 
      
    },
    {
      original: 'https://i.ytimg.com/vi/je9Rr7VrPSk/maxresdefault.jpg',
      originalClass:'landing-highlight' 
      
    },
    {
      original: 'https://res.cloudinary.com/practicaldev/image/fetch/s--GuYsE3jw--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/v468zo7rtz3vcrr4jjdt.jpeg',
      originalClass:'landing-highlight'  
      
    },
  ];
export default function Highlights() {
  return (
    <div className="flex md:flex-row flex-col-reverse md:justify-around justify-center mt-[50px] mb-[10px] items-center">
      <div className="md:w-[40%] w-[90%] flex flex-col">
        <span className="text-[26px] text-[#006cb5] font-bold text-">
          Achieve the ultimate career growth with us
        </span>
        <span className="text-[18px]">
          Founded in 2013, K.R. Mangalam University is establishing itself as an
          innovative and unique educational institution and is counted amongst
          the premier engineering colleges in Delhi NCR, offering Engineering
          and Technology courses. SOET is founded to bring outstanding
          academicians and industry professionals under one roof to create a
          world-class teaching hub for aspiring engineers around the globe.
        </span>
      </div>
      <div className="md:w-[40%] mb-[40px] md:mb-[0px] w-[90%]">
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          infinite={true}
          showBullets={true}
          items={images}
        />
      </div>
    </div>
  );
}
