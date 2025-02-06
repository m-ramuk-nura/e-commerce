import { useEffect, useState } from "react";
import "./imageslider.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from 'gsap';


const image1 = "src/images/1.jpg";
const image2 = "src/images/2.jpg";
const image3 = "src/images/3.jpg";
const image4 = "src/images/4.jpg";
const image5 = "src/images/5.jpg";

const imageArray = [image1,image2,image3,image4,image5]

function ImageSlider(){
    
    const[midImage,setMidImage] = useState(0);
    const[rightImage,setRightImage] = useState(1);
    const[leftImage,setLeftImage] = useState(imageArray.length-1);

    useEffect(() => {
        if(midImage ===0){
            setLeftImage(imageArray.length-1);
            setRightImage(1);
        }
        else if(midImage === imageArray.length-1)
        {
            setRightImage(0);
            setLeftImage(midImage-1);
        }
        else{
            setRightImage(midImage+1);
            setLeftImage(midImage-1);
        }
    },[midImage]);

    const increment=()=>{
        if(midImage == imageArray.length-1){
            setMidImage(0)
        }
        else{
            setMidImage(midImage+1);
        }


        gsap.fromTo('.middleImage',
            {x:-200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );

        gsap.fromTo('.rightImage',
            {x:600,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );

        gsap.fromTo('.leftImage',
            {x:-200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        
    }

    const decrement=()=>{
        if(midImage == 0){
            setMidImage(imageArray.length-1)
        }
        else{
            setMidImage(midImage-1);
        }
    }
       
    

    return(
        <div className='ImageSlider'>
            <div className="ImageSliderContainer">
                <div className="Images">
                {/* <img src={imageArray[leftImage]} className="leftImage" />
                <img src={imageArray[midImage]} className="middleImage" />
                <img src={imageArray[rightImage]} className="rightImage" /> */}
                    <img src={imageArray[rightImage]} className="rightImage" />
                    <img src={imageArray[midImage]} className="middleImage" />
                    <img src={imageArray[leftImage]} className="leftImage" />
                </div>

            </div>
            <div className="buttons">
                <button className="leftButton" onClick={decrement}><FaArrowLeft /></button>
                <button className="rightButton" onClick={increment}><FaArrowRight /></button>
            </div>

        </div>
    )
}

export default ImageSlider