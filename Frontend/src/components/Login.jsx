import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            < div >
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box max-w-3xl w-96">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Login!</h3>



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
                                    login
                                </button>
                                <p>Not registered? <Link to="/signup" className='text-blue-500 underline'>Signup</Link></p>

                            </div>

                        </form>
                    </div>
                </dialog>
            </div >
        </>
    )
}

export default Login;