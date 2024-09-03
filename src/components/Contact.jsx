import React, { useRef, useState } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { sendForm } from "@emailjs/browser"

const Contact = () => {
    const ref = useRef()
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [disableButton, setDisableButton] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault()
        setDisableButton(true)

        sendForm('service_xapwcof', 'template_rnsceve', ref.current, {
            publicKey: '35-CDbzocxSmC1z0n',
        }).then(() => {
            ref.current.reset()
            setSent(true)

            setTimeout(() => {
                setSent(false);
                setDisableButton(false)
            }, 800);
        }).catch(() => {
            setError(true)

            setTimeout(() => {
                setError(false);
                setDisableButton(false)
            }, 800);
        })
    }

    return (
        <div id='contact' className='w-full py-10 flex justify-center'>
            <div className='flex flex-wrap max-w-6xl w-full'>
                {/* Left Side - Contact Info */}
                <div className='w-full md:w-1/2 p-2 xs:p-4 flex flex-col justify- items-start'>
                    <h2 className='text-4xl font-bold mb-4 font-RaleWay'>Contact Me</h2>
                    <div className='flex items-center mb-4'>
                        <FaEnvelope className='text-2xl mr-2' />
                        <a href="mailto:alishahyan210@gmail.com" className='text-2xl font-bold font-RaleWay'>alishahyan210@gmail.com</a>
                    </div>
                    <div className='flex items-center'>
                        <FaPhone className='text-2xl mr-2' />
                        <a href="tel:+1234567890" className='text-2xl font-bold font-montserrat'>+92 329 2379417</a>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className='w-full md:w-1/2 p-2 xs:p-4'>
                    <form ref={ref} style={{
                        backgroundImage: `url('https://cdn.pixabay.com/photo/2020/04/16/11/10/background-5050200_1280.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className=' p-6 rounded-lg shadow-lg'>
                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2' htmlFor='name'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                className='w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:shadow-outline'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                className='w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:shadow-outline'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-white text-sm font-bold mb-2' htmlFor='message'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                className='w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:shadow-outline h-32'
                            ></textarea>
                        </div>

                        <div className='flex items-center justify-between'>
                            <button
                                onClick={sendEmail}
                                disabled={disableButton}
                                type='submit'
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {sent && <p className='text-[green] font-montserrat text-center font-bold pt-4'>Email Sent Successfully!</p>}
                    {error && <p className='text-[red] font-montserrat text-center font-bold pt-4'>Error Sending Email!</p>}
                </div>
            </div>
        </div>
    )
}

export default Contact
