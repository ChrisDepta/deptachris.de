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
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="pl-PL">
  <head>
	<title></title>
	<style>
	  .link-button {
		display: inline-block;
		width: 10rem;
		height: 3rem;
		line-height: 3rem;
		border-radius: 2rem;
		color: #f48716; /* Pomarańczowy */
		background-color: white;
		font-weight: 900;
		letter-spacing: 2px;
		text-align: center;
		text-decoration: none;
		padding: 0 1rem;
	  }
  
	  .message-text {
		color: white;
		background-color: #373F43;
		padding: 1rem;
		border-radius: 1rem;
		margin: 1rem 0;
	  }
  
	  .content-overlay {
		position: relative;
		color: white;
		font-size: 2rem;
		padding: 2rem;
		text-align: center;
	  }
  
	  .background-image {
		width: 100%;
		object-fit: cover;
	  }
  
	  .link {
		color: #f48716;
		text-decoration: none;
	  }
	  
	  .link:hover,
	  .link:active,
	  .link:visited {
		color: #f48716;
		text-decoration: none;
	  }
	</style>
  </head>
  <body style="background-color: #000;  margin: 0; padding: 0; display: flex; flex-direction: column; justify-content: start; align-items: center;">
	<div style="width: 100%; padding: 2rem; background-image: url("https://deptachris.de/bgLogo.webp");">
	  <img src="https://deptachris.de/web1.jpeg" alt="web1" class="background-image">
	  <h1 style="color: #f48716; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; font-size: 3rem; font-weight: 700; text-align: center;">
		Hi ${name}!
	  </h1>
	  <div class="message-text">
		<p>Du hast mir diese Nachricht geschrieben:</p>
		<p style="font-size: 1.5rem;">${message}</p>
	  </div>
	  <p class="message-text">Wenn du diese Nachricht nicht von dieser <strong class="link">${email}</strong><br/> E-Mail-Adresse gesendet hast, ignoriere sie bitte oder schreibe mir an diese Adresse. <strong class="link">dev@deptachris.de</strong></p>
	  <div>
		<img src="https://deptachris.de/simpleLogo.png" alt="simple logo" style="width: 25%;">
		<div class="content-overlay">
		  In meinem Angebot finden Sie noch viele weitere Leistungen!
		  <a href="https://deptachris.de/services" class="link-button">siehe</a>
		</div>
		<img src="https://deptachris.de/web2.jpg" alt="web2" class="background-image" style="margin-top: -4rem;">
		<div>
		  <a href="https://facebook.com/deptachris" class="link-button"><img src="https://deptachris.de/fbIcon.webp" alt="fb logo" style="width: 20%;"></a>
		  <a href="https://instagram.com/deptachris.de/" class="link-button"><img src="https://deptachris.de/instaIcon.webp" alt="insta logo" style="width: 20%;"></a>
		</div>
	  </div>
	</div>
  </body>
  </html>
  `;
