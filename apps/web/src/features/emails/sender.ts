import { Mailer } from '@astg/common';

export const sender = async (to: string, subject: string, content: string) => {
  const sender = '"DavTech" <davtechcode@gmail.com>';
  const mailer = new Mailer(sender);

  await mailer.sendMail({
    to,
    subject,
    html: content,
  });
};
