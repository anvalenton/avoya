import React, {useState} from "react";
import photo1 from "./img/slideshow/1.jpg"
import photo2 from "./img/slideshow/2.jpg"
import photo3 from "./img/slideshow/3.jpg"
import "./Carousel.css";



const Carousel = () => {

    const [photoArr, setPhotoArr] = useState([{source: photo1, info: 'some photo description'}, {source:photo2, info: 'some photo description'}, {source:photo3, info: 'some photo description'}])
    const [currPhoto, setCurrPhoto] = useState({source:photo3, info:'some photo description'});
    const [photoTransition, setPhotoTransition] = useState('fade-in')

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
            <div className='carousel-container'>

            <img id="carouselimg" className={photoTransition} src={currPhoto.source} alt={currPhoto.info} onAnimationEnd={fadePhoto}></img>

            </div>
        </>
    )
}

export default Carousel;