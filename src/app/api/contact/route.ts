// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailQer';

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, subject, message, recipient } = body;

//     // Validate required fields
//     if (!name || !email || !phone || !subject || !message) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Configure email transporter (you'll need to set up environment variables for this)
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST || 'smtp.gmail.com',
//       port: Number(process.env.EMAIL_PORT) || 587,
//       secure: Boolean(process.env.EMAIL_SECURE) || false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_FROM || 'website@diabeticfootcare.com',
//       to: recipient || 'dhshah15532@gmail.com',
//       subject: `New Contact Form Submission: ${subject}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message.replace(/\n/g, '<br>')}</p>
//         <hr>
//         <p>This email was sent from the Diabetic Foot Care Center website contact form.</p>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { success: true, message: 'Email sent successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }
export{};