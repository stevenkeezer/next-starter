import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email } = req.body;

//     // Create a transporter to send emails
//     const transporter = nodemailer.createTransport({
//       // Use your email service configuration here
//       // For example, for Gmail, you can use SMTP settings
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: 'stevengkeezer@gmail.com',
//         pass: 'qlvn mrst ifml qtab',
//       },
//     });

//     // Send an email
//     await transporter.sendMail({
//       from: 'your-email@gmail.com',
//       to: 'stevengkeezer@gmail.com',
//       subject: 'New contact form submission',
//       html: `<p>Name: ${name}</p><p>Email: ${email}</p>`,
//     }).then(
//       (info) => {
//         console.log('Message sent: %s', info.messageId);
//       },
//       (error) => {
//         console.error('Error sending email:', error);
//       }
//     );

//     res.status(200).json({ message: 'Email sent successfully' });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }



// export async function POST(req, res) {
  
//   console.log(req)

//   const { firstName, lastName, email, message } = JSON.parse(req.body);

//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: 'stevengkeezer@gmail.com',
//       pass: 'qlvn mrst ifml qtab',
//     },
//     secure: true,
//   });

//   await new Promise((resolve, reject) => {
//     // verify connection configuration
//     transporter.verify(function (error, success) {
//       if (error) {
//         console.log(error);
//         reject(error);
//       } else {
//         console.log("Server is ready to take our messages");
//         resolve(success);
//       }
//     });
//   });

//   const mailData = {
//     from: {
//       name: `${firstName} ${lastName}`,
//       address: "myEmail@gmail.com",
//     },
//     replyTo: email,
//     to: "recipient@gmail.com",
//     subject: `form message`,
//     text: message,
//     html: `${message}`,
//   };

//   await new Promise((resolve, reject) => {
//     // send mail
//     transporter.sendMail(mailData, (err, info) => {
//       if (err) {
//         console.error(err);
//         reject(err);
//       } else {
//         console.log(info);
//         resolve(info);
//       }
//     });
//   });

//   res.status(200).json({ status: "OK" });
// };

// Import the Next.js types for NextApiRequest and NextApiResponse


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
