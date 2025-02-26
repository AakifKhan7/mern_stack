import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

export default function Freebook() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook   = async () => {
            try{
                const res =  await axios.get('http://localhost:4001/books');
                console.log(res.data.filter((data) => data.category === 'Free'));
                setBook(res.data.filter((data) => data.category === 'Free'));
            }
            catch(error){
                console.log(error)
            }
        }
        getBook();
    }, []);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        //gap
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 mb-20 px-4" >
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae autem debitis ad. Facere ex delectus a harum odio eligendi nesciunt sint quod debitis nobis reiciendis ipsum, molestiae praesentium maxime..</p>
                </div>

                <div className='mt-10 '>
                    <Slider {...settings} >
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
