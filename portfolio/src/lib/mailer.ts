import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';
import dotenv from 'dotenv';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
dotenv.config();

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

export async function sendMail(replyTo: string, subject: string, text: string): Promise<void> {
	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port: SMTP_PORT,
		auth: { user: SMTP_USER, pass: SMTP_PASSWORD }
	} as SMTPTransport.Options);

	const mailOptions: Mail.Options = {
		from: 'hi@inforbi.de',
		to: 'kstein@inforbi.de',
		subject,
		text,
		replyTo
	};

	await transporter.sendMail(mailOptions);
}
