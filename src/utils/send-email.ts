import { FormData } from '@/components/sections/contact/contactForm';
import { NextResponse } from 'next/server';
import toast from 'react-hot-toast';

export function sendEmail(data: FormData): Promise<void> {
  const apiEndpoint = '/api/email';

  const loadingToastId = toast.loading('sending...');

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      // Dodaj krok wysyłki kopii do nadawcy
      sendAnswerToSender(data);
      
      toast.dismiss(loadingToastId);
      toast.success(response.message);
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      toast.dismiss(loadingToastId);
      toast.error('Błąd podczas wysyłania wiadomości');
      throw err; // Rzuć błąd dalej, żeby async/await w formularzu mógł go złapać
    });
    
}

// Dodaj funkcję do wysyłania kopii do nadawcy
function sendAnswerToSender(data: FormData) {
  const senderEmail = data.email;
  const copyEndpoint = '/api/answer';

  fetch(copyEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Ustaw nagłówek Content-Type
    },
    body: JSON.stringify({ ...data, to: senderEmail }),
  })
  .then((res) => res.json())
  .then((response) => {
    // Obsługa odpowiedzi, jeśli to konieczne
  })
  .catch((err) => {
    console.error(err);
  });
}

