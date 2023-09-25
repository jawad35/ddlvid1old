const nodemailer = require('nodemailer');
const { google } = require('googleapis');



const EmailSender = (data, res) => {
// These id's and secrets should come from .env file.
const CLIENT_ID = '1095485489325-68noab5vtvit1o9fke0bkdrbta5n8mfg.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04fhzih_UPWKOCgYIARAAGAQSNwF-L9IrZYy4s5AEJhlcygsTPukOBd8eDfK_OnqnhRE1sMxvHGNB_oeAaMiu1NOzDRUg6Sqlbw0';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'ddlvid.com@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `${data?.name} <${data?.email}>`,
      to: "ddlvid.com@gmail.com",
      subject: data?.subject,
      text: data?.message,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sample HTML Email</title>
      </head>
      <body>
        <h1 style="color: #0078d4;">Hello DDLVID!</h1>
        <p>You got a new message from <strong>${data?.name}</strong>:</p>
        <strong>User message is here: </strong>
        <p style="font-size: 16px;">${data?.message}</p>
        <strong>User Email: </strong>
        <a href="mailto:${data?.email}">${data?.email}</a>
        <p style="font-weight: bold; color: #333;">Thanks.</p>
      </body>
      </html>
      `,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
sendMail()
  .then((result) => res.send(JSON.stringify({success: true, result})))
  .catch((error) => res.send(JSON.stringify({success: false, error: "Can't send the message."})));
}

module.exports = EmailSender;
  