// Número único para orçamentos: el formulario, el botón flotante y los textos usan este.
export const WHATSAPP_NUMBER = "5553991338841";
export const WHATSAPP_DISPLAY = "+55 53 99133 8841";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
