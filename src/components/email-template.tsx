import { Roboto_Mono, Roboto } from 'next/font/google';
import * as React from 'react';

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface EmailTemplateProps {
  userName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,email,message
}) => (
  <div>
    <h1 className={`${roboto_mono.className} text-3xl text-red-900`}>{userName} sent you a message:</h1>
    <p className={`${roboto.className} text-stone-800 mb-3`}>{message}</p>
    <h3 className={`${roboto.className} text-stone-800`}>If you wish to contact them back, you can send an email to: {email}</h3>
  </div>
);