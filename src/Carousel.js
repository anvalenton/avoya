import React, {useState, useEffect, useRef} from "react";
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


    function fadeOutPhoto() {
        setPhotoTransition('fade-out')
    }

    function fadeInPhoto() {
        changePhoto()
        //but also apply a fade in transition
        setPhotoTransition('fade-in')
    }
   

    return (
        <>
            <div>

            <img id="carousel" ref={carouselRef} className={photoTransition} src={currPhoto} onAnimationEnd={}></img>

            </div>
        </>
    )
}

export default Carousel;