import React from 'react';

const MailTo = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  return (
    <a href={`mailto:${email}`} target="_top">
      {children}
    </a>
  );
};

export default MailTo;
