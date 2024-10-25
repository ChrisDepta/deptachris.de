import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';



export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
  
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.DC_EMAIL,
 
    subject: `Nachricht von:  ${name}`,
    html: `<body><strong>Nachricht von:  ${name}</strong>,<br/><br/> <strong>Nachricht Inhalt: </strong><br/>${message}<br/><br/><strong>Zum antworten klicke hier: </strong> ${email} </body>`,
  };

 

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Gesendet' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

