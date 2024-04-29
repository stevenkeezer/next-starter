'use client';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const SignInButton = () => {
  return <Button onClick={() => signIn('github')} className='shadow px-8'>Contact us</Button>;
};
