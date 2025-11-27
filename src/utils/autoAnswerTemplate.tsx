interface AutoAnswerTemplateArgs {
  name: string;
  email: string;
  message: string;
}

export const autoAnswerTemplate = ({
  name,
  email,
  message,
}: AutoAnswerTemplateArgs): string => `
  <!DOCTYPE html>
  <html lang="pl-PL">
  <head>
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
	  /* Ustawienia ogólne */
	  body, table, td, a {
		text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
	  }
	  table, td {
		mso-table-lspace: 0pt;
		mso-table-rspace: 0pt;
	  }
	  img {
		-ms-interpolation-mode: bicubic;
	  }
	  img, table {
		border: 0;
		outline: none;
		text-decoration: none;
	  }
	  .content-container {
		max-width: 90%;
		min-width: 70%;
		margin: 0 auto;
		background-color: rgba(37, 37, 38, 0.9);
		color: white;
		padding: 20px;
		border-radius: 8px;
	  }
	  .title-text {
		background-color: black;
		color: #00f7f7;
		padding: 1rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		border-radius: 8px;
	  }
	  .message-text {
		color: white;
		padding: 1rem;
		background-color: black;
		border-radius: 8px;
		font-size: 1rem;
	  }
	  .offer-section, .social-section {
		background-color: rgb(189, 237, 240);
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	  }
	  .link-button {
		display: inline-block;
		color: #00f7f7;
		background-color: black;
		font-weight: 700;
		padding: 10px 20px;
		text-decoration: none;
		border-radius: 20px;
		font-size: 1rem;
	  }
	  .link-button:hover {
		background-color: #00f7f7;
		color: black;
	  }
	</style>
  </head>
  <body style="margin: 0; padding: 0; background-image: url('https://deptachris.de/web1.webp'); background-size: cover; background-attachment: fixed; background-position: center;">
  
	<table class="content-container" cellpadding="0" cellspacing="0" border="0" align="center">
	  <tr>
		<td>
		  <h1 class="title-text">Hi ${name}!</h1>
		</td>
	  </tr>
	  <tr>
		<td class="message-text" style="padding-bottom: 1rem;">
		  <p>Du hast mir diese Nachricht geschrieben:</p>
		  <p>${message}</p>
		</td>
	  </tr>
  
	  <!-- Odstęp między sekcjami -->
	  <tr><td style="padding-top: 10px;"></td></tr>
  
	  <!-- Sekcja oferty -->
	  <tr>
		<td class="offer-section" style="padding-bottom: 1rem;">
		  <table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
			  <td align="center">
				<img src="https://deptachris.de/simpleLogo.png" alt="simple logo" width="40" style="display: block; margin: 0 auto;">
			  </td>
			</tr>
			<tr>
			  <td style="padding-top: 10px; color: black; font-size: 1.2rem; font-weight: bold;">
				In meinem Angebot finden Sie noch viele weitere Leistungen!
			  </td>
			</tr>
			<tr>
			  <td style="padding-top: 10px;">
				<a href="https://deptachris.de/services" class="link-button">siehe</a>
			  </td>
			</tr>
		  </table>
		</td>
	  </tr>
  
	  <!-- Odstęp między sekcjami -->
	  <tr><td style="padding-top: 10px;"></td></tr>
  
	  <!-- Sekcja społecznościowa -->
	  <tr>
		<td class="social-section" style="padding-bottom: 1rem;">
		  <table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
			  <td align="center" style="padding-bottom: 10px; color: black;">
				Du kannst mir folgen auf Instagram und Facebook:
			  </td>
			</tr>
			<tr>
			  <td align="center">
				<a href="https://facebook.com/deptachris"><img src="https://deptachris.de/fbIcon.webp" alt="Facebook" width="32" style="display: inline-block; margin: 0 5px;"></a>
				<a href="https://instagram.com/deptachris.de/"><img src="https://deptachris.de/instaIcon.webp" alt="Instagram" width="32" style="display: inline-block; margin: 0 5px;"></a>
			  </td>
			</tr>
		  </table>
		</td>
	  </tr>
  
	  <!-- Odstęp między sekcjami -->
	  <tr><td style="padding-top: 10px;"></td></tr>
  
	  <!-- Informacje o kontakcie -->
	  <tr>
		<td class="message-text" style="font-size: 0.9rem;">
		  <p>Wenn du diese Nachricht nicht von dieser <strong>${email}</strong> E-Mail-Adresse gesendet hast, ignoriere sie bitte oder schreibe mir an diese Adresse: <strong>${process.env.DC_EMAIL}</strong></p>
		</td>
	  </tr>
  
	  <tr>
		<td style="padding-top: 20px;">
		  <img src="https://deptachris.de/web2.webp" alt="web2" width="100%" style="border-radius: 8px;">
		</td>
	  </tr>
	</table>
  </body>
  </html>
  `;
