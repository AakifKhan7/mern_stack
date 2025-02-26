import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';


function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div>
                <div className='flex justify-center items-center h-screen shadow-large'>
                    <div className="modal-box max-w-3xl w-96">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                       


                        <h3 className="font-bold text-lg">Signup!</h3>
                        <div className='mt-7 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type="text"
                                className="w-80 py-1 px-3 border outline-none rounded-md"
                                placeholder='Enter your email'
                                {...register("name", { required: true })}

                            />
                            {errors.name && <span className='text-red-700 text-sm'>This field is required</span>}
                        </div>
                        <div className='mt-7 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email"
                                className="w-80 py-1 px-3 border outline-none rounded-md"
                                placeholder='Enter your email'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-700 text-sm'>This field is required</span>}
                        </div>
                        <div className='mt-5 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="password"
                                className="w-80 py-1 px-3 border outline-none rounded-md"
                                placeholder='Enter your password'
                                {...register("password", { required: true })}

                            />
                            {errors.password && <span className='text-red-700 text-sm'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-6'>
                            <button className='bg-pink-500 text-white hover:bg-pink-700 duration-300 px-3 py-1 rounded-md'>
                                Signup
                            </button>
                            <p>Already registered? <button
                                onClick={() => document.getElementById('my_modal_4').showModal()}
                                className='text-blue-500 underline'>Login</button></p>

                            <Login />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup