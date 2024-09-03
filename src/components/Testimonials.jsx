import React from 'react'

const testimonials = [
    {
        name: "Emily Johnson",
        para: `"Working with Pixel Plus Creative was a great experience from start to finish. They took the time to understand our brand and created stunning social media graphics that greatly enhanced our online presence. The quality of their work is exceptional, and they were always open to feedback, ensuring we were completely satisfied with the final product. Their professionalism, creativity, and commitment to excellence is unmatched. I highly recommend Pixel Plus Creative for any of your graphic design needs"`,
        review: "⭐⭐⭐⭐⭐"
    },
    {
        name: "John Smith",
        para: `"Pixel Plus Creative Designs exceeded our expectations with their creative designs. From the initial consultation to the final deliverables, their team demonstrated professionalism, creativity, and attention to detail. The new logo and branding materials have given my company a fresh, professional look that my clients love. Communication was smooth, deadlines were met, and the creativity was top-notch. I highly recommend Pixel Plus Creative Designs for anyone looking to elevate their brand with stunning graphics!"`,
        review: "⭐⭐⭐⭐"
    },
]

const Testimonials = () => {
    return (
        <div id='testimonials' className='w-full py-10'>
            <h1 className='font-bold text-5xl font-montserrat text-center mb-8'>Testimonials</h1>
            <div className='flex flex-wrap justify-center gap-8 p-2 xs:p-4'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='max-w-md p-6 bg-white rounded-xl shadow-lg'>
                        <div className='text-2xl font-semibold mb-2'>{testimonial.name}</div>
                        <p className='italic mb-4 font-RaleWay max-sm:text-[13px] font-semibold'>{testimonial.para}</p>
                        <div className='text-yellow-500 text-lg'>{testimonial.review}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
