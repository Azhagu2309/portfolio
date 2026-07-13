import emailjs from "@emailjs/browser";

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};

export const isEmailConfigured = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey
);

export async function sendContactEmail(form: HTMLFormElement) {
  if (!isEmailConfigured) {
    throw new Error("EmailJS is not configured");
  }
  return emailjs.sendForm(
    emailConfig.serviceId as string,
    emailConfig.templateId as string,
    form,
    { publicKey: emailConfig.publicKey as string }
  );
}
