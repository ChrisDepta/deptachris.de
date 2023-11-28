import { FormData } from '@/components/sections/contact/contactForm';
import toast from 'react-hot-toast';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  const loadingToastId = toast.loading('Sending email...');

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      // Dodaj krok wysyłki kopii do nadawcy
      sendCopyToSender(data);
      
      toast.dismiss(loadingToastId);
      toast.success(response.message);
    })
    .catch((err) => {
      toast.dismiss(loadingToastId);
      toast.error(err);
    });
}

// Dodaj funkcję do wysyłania kopii do nadawcy
function sendCopyToSender(data: FormData) {
  const senderEmail = data.email;
  const copyEndpoint = '/api/autoAnswer';

  fetch(copyEndpoint, {
    method: 'POST',
    body: JSON.stringify({ ...data, to: senderEmail }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message); // Możesz użyć toast, aby poinformować użytkownika
    })
    .catch((err) => {
      console.error(err);
    });
}
