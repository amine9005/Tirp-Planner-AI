"use server";
import ContactMeEmail from "@/emails/ContactMeEmail.email";
import EmailVerification from "@/emails/EmailVerification";
import PasswordResetEmail from "@/emails/PasswordResetEmail";
import resend from "@/lib/resend";

const FROM = process.env.EMAIL_FROM!;

export async function sendVerificationEmailAction(email: string, url: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      // TODO add email address
      to: process.env.MY_EMAIL_ADDRESS!,
      subject: "Verify your email address",
      react: EmailVerification({ url: url }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendResetPasswordEmailAction(
  name: string,
  email: string,
  url: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      // TODO add email address
      to: process.env.MY_EMAIL_ADDRESS!,
      subject: "Reset your password",
      react: PasswordResetEmail({ name, url: url }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendContactMeEmailAction(
  fullName: string,
  email: string,
  subject: string,
  description: string,
) {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: process.env.MY_EMAIL_ADDRESS!,
    subject: subject,
    react: ContactMeEmail({ fullName, email, subject, description }),
  });
  if (error) {
    throw new Error(`${error}`);
  }

  return data;
}
