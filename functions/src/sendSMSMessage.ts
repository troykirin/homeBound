import * as functions from 'firebase-functions';
import { Twilio } from 'twilio';

export const sendSMSMessage = functions.https.onCall(async (data) => {
  const { sid, token } = functions.config().twilio;
  const client = new Twilio(sid, token);

  const { from, to, body } = data;
  return client.messages
    .create({
      from,
      to,
      body,
    })
    .then(() => ({ success: true }))
    .catch((err: string) => {
      console.log(err);
      return { success: false };
    });
});
