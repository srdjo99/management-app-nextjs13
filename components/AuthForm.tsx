'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { register, signin } from '@/lib/api';

import Input from './Input';
import Button from './Button';
import Card from './Card';

const registerContent = {
  linkUrl: '/signin',
  linkText: 'Already have an account?',
  header: 'Create a new Account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register',
};

const signinContent = {
  linkUrl: '/register',
  linkText: "Don't have an account?",
  header: 'Welcome Back',
  subheader: 'Enter your credentials to access your account',
  buttonText: 'Sign In',
};

const initial = { email: '', password: '', firstName: '', lastName: '' };

const AuthForm = ({ mode }) => {
  const [formState, setFormState] = useState({ ...initial });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === 'register') {
      await register(formState);
    } else {
      await signin(formState);
    }

    setFormState(initial);
    router.replace('/home');
  };

  const content = mode === 'register' ? registerContent : signinContent;

  return (
    <Card>
      <div className='w-full'>
        <div className='text-center'>
          <h2 className='mb-2 text-3xl'>{content.header}</h2>
          <p className='tex-lg text-black/25'>{content.subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className='w-full py-10'>
          {mode === 'register' && (
            <div className='flex justify-between mb-8'>
              <div className='pr-2'>
                <div className='mb-4 ml-2 text-lg text-black/50'>
                  First Name
                </div>
                <Input
                  required
                  placeholder='First Name'
                  value={formState.firstName}
                  className='w-full px-6 py-2 text-lg border-2 border-solid border-gray rounded-3xl'
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className='pl-2'>
                <div className='mb-4 ml-2 text-lg text-black/50'>Last Name</div>
                <Input
                  required
                  placeholder='Last Name'
                  value={formState.lastName}
                  className='w-full px-6 py-2 text-lg border-2 border-solid border-gray rounded-3xl'
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
            </div>
          )}
          <div className='mb-8'>
            <div className='mb-4 ml-2 text-lg text-black/50'>Email</div>
            <Input
              required
              type='email'
              placeholder='Email'
              value={formState.email}
              className='w-full px-6 py-2 text-lg border-2 border-solid border-gray rounded-3xl'
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className='mb-8'>
            <div className='mb-4 ml-2 text-lg text-black/50'>Password</div>
            <Input
              required
              value={formState.password}
              type='password'
              placeholder='Password'
              className='w-full px-6 py-2 text-lg border-2 border-solid border-gray rounded-3xl'
              onChange={(e) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <span>
                <Link
                  href={content.linkUrl}
                  className='font-bold text-blue-600'
                >
                  {content.linkText}
                </Link>
              </span>
            </div>
            <div>
              <Button type='submit' intent='secondary'>
                {content.buttonText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AuthForm;
