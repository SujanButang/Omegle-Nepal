'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type Props = {};

const LoginDialog = (props: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) setOpen(false);
  }, [session]);

  console.log(session);
  return (
    <Dialog open={open}>
      <DialogContent
        className="flex items-center min-w-[50rem] h-[37.5rem] overflow-hidden p-0 m-0"
        hideCloseButton
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex items-center w-full h-full overflow-hidden p-0 m-0 relative">
          <figure className="h-full w-full absolute inset-0 m-auto overflow-hidden z-0 opacity-50">
            <Image
              src={'/bg-pattern.jpg'}
              alt="bg-pattern"
              height={100}
              width={100}
              unoptimized
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="flex-1 z-10">
            <video autoPlay loop muted playsInline preload="auto" width={'100%'} className="!w-full">
              <source src="login-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex-1 flex flex-col w-full h-full p-10 justify-between relative">
            <div className="text-center flex-1 z-10">
              <h4 className="text-4xl font-extrabold text-primary">Become a member</h4>
              <span>Join Now</span>
            </div>
            <div className="flex-1 w-full flex items-center justify-center z-10">
              <figure className="w-36">
                <Image
                  src={'/logo.png'}
                  alt="logo"
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </figure>
            </div>
            <div className="flex-[2] flex flex-col w-full items-center justify-center gap-4 z-10">
              <Button className="h-16 w-full text-2xl font-semibold space-x-2" onClick={() => signIn('google')}>
                <Image src={'/google.png'} alt="google-login" height={25} width={25} unoptimized />{' '}
                <span>Continue with Google</span>
              </Button>
              <p className="text-sm font-normal text-center">
                I confirm that I am at least 18 years old. I accept
                <br />
                <span className="underline underline-offset-2 cursor-pointer text-blue-700">User Agreement.</span>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
