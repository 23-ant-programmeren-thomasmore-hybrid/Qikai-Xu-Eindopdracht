import * as React from 'react';

interface EmailTemplateProps {
  userName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,email,message
}) => (
  <div>
    <h1>Welcome, {userName}!</h1>
    <h2>{email}!</h2>
    <p>{message}!</p>
  </div>
);