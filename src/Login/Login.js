import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Home/Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            // console.log(user || googleUser)
        }
    }, [user, googleUser, from, navigate])


    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (error || googleError) {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold ">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text"></span>

                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide your valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text"></span>

                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or Longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-x' type="submit" value="login" />
                    </form>
                    <p className='text-center'><small>New to doctors portal? <Link className='text-blue-500' to="/signup" >Create New Account</Link></small></p>
                    <div className="divider">OR</div>

                    <div className="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline ">Continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;