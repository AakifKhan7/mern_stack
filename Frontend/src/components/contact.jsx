import React from 'react'
import { useForm } from 'react-hook-form';


function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='flex justify-center h-screen shadow-large flex-col'>

                <h1 className='text-center '>Contact Us</h1>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <div className='mt-7 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type="text"
                                className="w-80 py-1 px-3 border outline-none rounded-md"
                                placeholder='Enter your name'
                                {...register("name", { required: true })}

                            />
                            {errors.name && <span className='text-red-700 text-sm flex'>This field is required</span>}
                        </div>

                        <div className='mt-7 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email"
                                className="w-80 py-1 px-3 border outline-none rounded-md"
                                placeholder='Enter your Email'
                                {...register("email", { required: true })}

                            />
                            {errors.name && <span className='text-red-700 text-sm flex'>This field is required</span>}
                        </div>

                        <div className='mt-7 space-y-2'>
                            <span>Message</span>
                            <br />
                            <textarea type="text"
                                className="w-80 py-1 px-3 border outline-none rounded-md"
                                placeholder='Type your message here'
                                {...register("message", { required: true })}

                            />
                            {errors.name && <span className='text-red-700 text-sm flex'>This field is required</span>}
                        </div>

                        <button className='bg-pink-500 text-white hover:bg-pink-700 duration-300 px-3 mt-6 py-1 rounded-md'>
                            Submit
                        </button>
                    </form>
                </div>


            </div>
        </>
    )
}

export default Contact