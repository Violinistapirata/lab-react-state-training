import "./Carousel.css";
import { useState } from "react";

function Carousel(props) {
  const images = props.images;
  const [count, setCount] = useState(0);
  const currentImage = images[count % images.length];
  return (
    <>
      <img src={currentImage} alt="user image" />
      <div className="button-wrapper">
        <button
          onClick={() => {
            setCount(count<=0? count + images.length : count - 1);
            console.log(count);
          }}
        >
          ⬅️
        </button>

        <button
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        >
          ➡️
        </button>
      </div>
    </>
  );
}

export default Carousel;
