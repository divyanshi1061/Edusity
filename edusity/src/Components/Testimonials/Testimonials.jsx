import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
    const slider=useRef();
    let tx=0;

   const slideForward = () => {
    if(tx > -50){
        tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
   }
    const sideBackward = () => {
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={sideBackward}/>
      <div className="slider">
       <ul ref={slider}>
        <li><div className="slide">
          <div className="user-info">
            <img src={user_1} alt="" />
            <div>
              <h3>William Jackson</h3>
              <span>Edusity, USA</span>
            </div>
          </div>

          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div></li> 
       
       <li><div className="slide">
          <div className="user-info">
            <img src={user_4} alt="" />
            <div>
              <h3>Sophia Martinez</h3>
              <span>Edusity, Canada</span>
            </div>
          </div>

          <p>
              My experience at Edusity has been truly inspiring. The faculty members are
    knowledgeable and always supportive, and the practical learning approach
    helped me build real-world skills with confidence.
          </p>
        </div></li> 
        <li><div className="slide">
          <div className="user-info">
            <img src={user_2} alt="" />
            <div>
              <h3>Daniel Thompson</h3>
              <span>Edusity, UK</span>
            </div>
          </div>

          <p>
           Edusity provided me with an excellent academic environment. The modern
    infrastructure, interactive classes, and career guidance played a key role
    in shaping my professional journey.
          </p>
        </div></li>
        <li><div className="slide">
          <div className="user-info">
            <img src={user_3} alt="" />
            <div>
              <h3>Aisha Khan</h3>
              <span>Edusity, India</span>
            </div>
          </div>

          <p>
             Studying at Edusity was a life-changing experience for me. The diverse
    student community, hands-on projects, and mentorship programs helped me
    grow both academically and personally.
          </p>
        </div></li>

    </ul>
      </div>
    </div>
  );
};

export default Testimonials;
