import { FormData } from '@/components/sections/contact/contactForm';
import toast from 'react-hot-toast';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  const loadingToastId = toast.loading('Wysyłanie...');

  fetch(apiEndpoint, {
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
      toast.dismiss(loadingToastId);
      toast.error(err);
    });
}

// Dodaj funkcję do wysyłania kopii do nadawcy
function sendAnswerToSender(data: FormData) {
  const senderEmail = data.email;
  const copyEndpoint = '/api/answer';

  fetch(copyEndpoint, {
    method: 'POST',
    body: JSON.stringify({ ...data, to: senderEmail }),
  })
    .then((res) => res.json())
    .then((response) => {
    })
    .catch((err) => {
      console.error(err);
    });
}
