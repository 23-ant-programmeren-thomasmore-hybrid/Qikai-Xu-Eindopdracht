import { EmailTemplate } from "../../../components/email-template";
import { Resend } from 'resend';

export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const {data} = await resend.emails.send({
      from: 'Portfolio <noreply@qikai.be>',
      to: ['r0953902@student.thomasmore.be'],
      subject: 'Hello world',
      html: "",
      react: EmailTemplate({ userName: "" , email: "", message: ""}),
    });

    return Response.json({data});
  } catch (error) {
    return Response.json({ error });
  }
};
