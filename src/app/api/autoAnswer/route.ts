import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { autoAnswerTemplate } from '@/utils/autoAnswerTemplate';
import * as handlebars from 'handlebars';

export async function POST(request: NextRequest) {
  const { email, name, message, to } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Use your custom email template
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to,
    subject: `Copy of your message from ${name}`,
    html: compileTemplate(name,email,message),
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
    return NextResponse.json({ message: 'Automatyczna odpowiedź od NCOFFEE' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export function compileTemplate(name: string, email: string, message: string) {
  const template = handlebars.compile(autoAnswerTemplate);
  return template({
    name:name,
    email:email,
    message:message,
  })
}