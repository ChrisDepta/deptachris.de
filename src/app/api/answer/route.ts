import { autoAnswerTemplate } from '@/utils/autoAnswerTemplate';
import Handlebars from 'handlebars';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message, to } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.DC_EMAIL,
    to,
    subject: `Automatische Antwort von deptachris.de`,
    html: compileTemplate(name, email, message),
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Gesendet');
        } else {
          reject('Nicht gesendet');
          reject(err.message)
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Send' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

function compileTemplate(name: string, email: string, message: string): string {
  // Najpierw wywołujemy autoAnswerTemplate, aby uzyskać string
  const templateString = autoAnswerTemplate({ name, email, message });
  const template = Handlebars.compile(templateString); // Kompilacja szablonu z stringa
  return template({ name, email, message }); // Użycie skompilowanego szablonu
}

