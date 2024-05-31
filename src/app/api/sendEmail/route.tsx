import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: any, res: NextApiResponse) {
  const { name, email, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
          port: 465,
          host: "mail.privateemail.com", // Update the host to Namecheap's PrivateEmail SMTP server
          auth: {
            user: process.env.EMAIL_USER, // Use environment variable
            pass: process.env.EMAIL_PASS, // Use environment variable
          },
          secure: true,
        });
      
        await new Promise((resolve, reject) => {
          // verify connection configuration
          transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              console.log("Server is ready to take our messages");
              resolve(success);
            }
          });
        });
      
        const mailData = {
          from: process.env.EMAIL_USER, // Use environment variable
          replyTo: email,
          to: process.env.EMAIL_USER,
          subject: `New contact form submission from ${name}`,
          text: message,
          html: `
            <h1>New contact form submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><a href="mailto:${email}?subject=Re: Your inquiry about web services">Click here to reply</a></p>
          `,
        };        
      
        await new Promise((resolve, reject) => {
          // send mail
          transporter.sendMail(mailData, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log(info);
              resolve(info);
            }
          });
        });

    return Response.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    Response.json({ error: 'Internal Server Error' });
  }
}
