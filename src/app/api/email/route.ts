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
    to: process.env.MY_EMAIL,
 
    subject: `Wiadomość od ${name}`,
    html: `<body><strong>Wiadomość od: ${name}</strong>,<br/><br/> <strong>Treść widomości:</strong><br/>${message}<br/><br/><strong>Aby odpowiedzieć kliknij w email:</strong> ${email} </body>`,
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
    return NextResponse.json({ message: 'Wysłana' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

