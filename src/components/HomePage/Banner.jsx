import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto text-white '>
            <div className="carousel w-full mt-12 relative">
                {banners.map((banner, index) => (
                    <div
                        style={{ 
                            backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`,
                        }}
                        key={index}
                        id={`slide${index+1}`}
                        className="carousel-item relative w-full bg-top bg-no-repeat h-[90vh] rounded-xl shadow-lg"
                    >
                        <div className="h-full w-full flex items-center pl-10 md:pl-36 bg-gradient-to-r from-black/60 via-transparent to-black/60">
                            <div className="space-y-6 text-left animate-fadeIn">
                                <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">{banner.title}</h1>
                                <p className="drop-shadow-md">{banner.description}</p>
                                <div className="flex space-x-4">
                                    <button className="btn btn-primary">Discover More</button>
                                    <button className="btn btn-outline btn-primary">Latest Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={banner.prev} className="btn btn-circle btn-primary">
                                ❮
                            </a>
                            <a href={banner.next} className="btn btn-circle btn-primary">
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const banners = [
    {
        title : 'Affordable Price For Car Servicing',
        description : 'There are many variations of passages available, but the majority have suffered alteration in some form',
        next: '#slide2',
        prev: '#slide4'
    },
    {
        title : 'Expert Technicians & Quality Service',
        description : 'Our team consists of highly trained and experienced professionals.',
        next: '#slide3',
        prev: '#slide1'
    },
    {
        title : 'Wide Range of Car Services',
        description : 'We offer a comprehensive range of services to keep your car in top condition.',
        next: '#slide4',
        prev: '#slide2'
    },
    {
        title : 'Customer Satisfaction Guaranteed',
        description : 'We prioritize our customers and ensure the highest level of satisfaction.',
        next: '#slide1',
        prev: '#slide3'
    },
];

export default Banner;
