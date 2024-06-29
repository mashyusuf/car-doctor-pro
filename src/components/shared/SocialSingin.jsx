
"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import React from "react";
const SocialSingin = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
  
    const path = searchParams.get('redirect')
    const session = useSession()
      const handleSocialLogin = (provider) => {
          const resp = signIn(provider, {
            redirect : true,
            callbackUrl : path ? path : '/'
          })
      }
    return (
        <div className='flex justify-center space-x-4'>
                            <button onClick={() => handleSocialLogin('google')} className='flex items-center space-x-2 px-4 py-2 rounded-md border border-sky-400 bg-white hover:bg-gray-100 transition-all duration-300'>
                                <FcGoogle className={`text-2xl`} />
                                <span className={`text-gray-700 font-semibold`}>Google</span>
                            </button>
                            <button onClick={() => handleSocialLogin('github')} className='flex items-center space-x-2 px-4 py-2 rounded-md border border-sky-400 bg-white hover:bg-gray-100 transition-all duration-300'>
                                <FaGithub className={`text-2xl text-gray-800`} />
                                <span className={`text-gray-700 font-semibold`}>GitHub</span>
                            </button>
                            <button onClick={() => handleSocialLogin('facebook')} className='flex items-center space-x-2 px-4 py-2 rounded-md border border-sky-400 bg-white hover:bg-gray-100 transition-all duration-300'>
                                <FaFacebook className={`text-2xl text-blue-700`} />
                                <span className={`text-gray-700 font-semibold`}>Facebook</span>
                            </button>
                        </div>
    );
};

export default SocialSingin;