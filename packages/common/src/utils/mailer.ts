import nodemailer, { Transporter } from 'nodemailer';

//##########################################################################################
// MAILER TYPES
//##########################################################################################
export type TMailOptions = {
  to: string;
  html: string;
  subject: string;
};

export type TMailFeedback = {
  message: string;
  status: 'success' | 'error';
};

//##########################################################################################
// MAILER CLASS
//##########################################################################################
export class Mailer {
  private sender: string;
  private transporter: Transporter;

  constructor(sender: string) {
    this.sender = sender;
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  private handleError(error: any): TMailFeedback {
    switch (error.code) {
      case 'ECONNECTION':
        return {
          status: 'error',
          message: 'Failed to connect to the email server',
        };
      case 'EAUTH':
        return {
          status: 'error',
          message: 'Failed to authenticate with the email server',
        };
      case 'EENVELOPE':
        return {
          status: 'error',
          message: 'Invalid email recipient address',
        };
      default:
        return {
          status: 'error',
          message: `Failed to send email: ${error.message}`,
        };
    }
  }

  public async sendMail({
    to,
    html,
    subject,
  }: TMailOptions): Promise<TMailFeedback> {
    try {
      const info = await this.transporter.sendMail({
        to,
        html,
        subject,
        from: this.sender,
      });

      return {
        status: 'success',
        message: info.messageId,
      };
    } catch (error: any) {
      return this.handleError(error);
    }
  }
}

export default Mailer;
