'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, Suspense } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from 'next/navigation';
import SocialSingin from '@/components/shared/SocialSingin';

const LoginPage = () => {
    const router = useRouter();
    const session = useSession();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : "/",
        });
        console.log(resp);
        if (resp.status === 200) {
            router.push('/');
        }
    };

    if (session.status === "authenticated") {
        router.push('/');
    }

    return (
        <div className='container px-6 md:px-24 mx-auto py-24 bg-cyan-200'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className='flex justify-center'>
                    <Image
                        src="/assets/images/login/login.svg"
                        height="540"
                        width="540"
                        alt="login image"
                    />
                </div>
                <div className='border-2 border-gray-200 p-12 rounded-lg shadow-lg bg-white'>
                    <h1 className='text-5xl text-orange-600 font-bold text-center mb-6'>Login Here!</h1>
                    <form onSubmit={handleLogin} className='space-y-6'>
                        <div>
                            <label htmlFor='email' className='block text-lg font-semibold mb-2'>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full input input-bordered px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-lg font-semibold mb-2'>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                className="w-full input input-bordered px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <button className='w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md shadow-md transition-all duration-300 font-semibold'>
                            Sign In
                        </button>
                    </form>
                    <div className='mt-8 text-center'>
                        <h2 className='text-lg font-semibold mb-4'>Or Sign In With</h2>
                        <SocialSingin />
                        <div>
                            <h6 className="my-12 text-center">
                                You dont have an account?{" "}
                                <Link className="text-primary font-semibold no-underline hover:underline" href="/signup">
                                    Sign Up
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoginWrapper = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
    </Suspense>
);

export default LoginWrapper;
