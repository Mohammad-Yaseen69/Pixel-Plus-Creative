import React from 'react'

const CTA = () => {
    return (
        <div className='w-full flex items-center max-lg:flex-col  justify-between bg-[#227C9D] text-white p-6 py-16'>
            <div>
                <h1 className='font-RaleWay max-lg:text-center font-bold text-3xl sm:text-5xl'>Wanna Connect?</h1>
                <p className='font-montserrat max-lg:text-center font-bold text-gray-200 text-lg sm:text-xl py-3'>Hire me and let's embark on an incredible journey together!</p>
            </div>

            <div className='flex items-center'>
                <ul class="wrapper">
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100081124250836"><li class="icon facebook">

                        <svg
                            viewBox="0 0 320 512"
                            height="1.2em"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            ></path>
                        </svg>
                    </li></a>

                    <a target='_blank' href="https://www.linkedin.com/in/shahyan-ali-35a74024a/?trk=contact-info">
                        <li class="icon linkedin">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.2em"
                                fill="currentColor"
                                class="bi bi-linkedin"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.344-1.248-.824 0-1.357.539-1.357 1.248 0 .694.52 1.248 1.315 1.248h.028zm4.908 8.212V9.359c0-.214.015-.428.08-.583.174-.428.569-.872 1.232-.872.869 0 1.217.657 1.217 1.62v3.872h2.401V9.333c0-2.225-1.185-3.257-2.765-3.257-1.274 0-1.845.702-2.165 1.193v.026h-.028a5.72 5.72 0 0 1-.074-.026v-.026h-.001c-.01.016-.021.03-.032.046V6.169h-2.4c.032.682 0 7.225 0 7.225h2.4z"
                                />
                            </svg>
                        </li>

                    </a>

                </ul>

            </div>
        </div>
    )
}

export default CTA
