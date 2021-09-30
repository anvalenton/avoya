import React, {useState, useRef} from "react";
import photo1 from "./img/slideshow/1.jpg"
import photo2 from "./img/slideshow/2.jpg"
import photo3 from "./img/slideshow/3.jpg"
import "./Carousel.css";



const Carousel = () => {

    const [photoArr, setPhotoArr] = useState([photo1, photo2, photo3])
    const [currPhoto, setCurrPhoto] = useState(photo3);
    const [photoTransition, setPhotoTransition] = useState('fade-in')

    const carouselRef = useRef(null);


    function changePhoto() {

        setCurrPhoto(photoArr[0]);
        setPhotoArr(() => {

                let copyPhotoArr = [...photoArr];
                let firstElem = copyPhotoArr.shift();
                copyPhotoArr.push(firstElem);

                return copyPhotoArr;

            })
    }


    function fadePhoto(evt) {
        if (evt.animationName === 'fade-in') {
            setPhotoTransition('fade-out')
        }
        else if (evt.animationName === 'fade-out') {
           
            changePhoto()
            setPhotoTransition('fade-in')
        }
    }

 
    return (
        <>
            <div>

            <img id="carousel" ref={carouselRef} className={photoTransition} src={currPhoto} onAnimationEnd={fadePhoto}></img>

            </div>
        </>
    )
}

export default Carousel;