export const siteConfig = {
  organisationName: "De Goede Hoop Koshuis",
  email: "bestuur@degoedehoop.co.za",
  whatsappDisplay: "+27 66 264 5433",
  whatsappNumber: "27662645433",
  address: "Burnettstraat, Hatfield, Pretoria",
  locationDescription:
    "Ongeveer 200m vanaf Tuks se sportgronde en ongeveer 1km vanaf die Hatfield-kampus",
  domain: "https://www.degoedehoop.co.za",
  defaultWhatsAppMessage:
    "Goeiedag, ek wil graag meer inligting ontvang oor De Goede Hoop-koshuis en die aansoekproses.",
};

export const whatsappLink = (message?: string): string => {
  const msg = message ?? siteConfig.defaultWhatsAppMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const mailtoLink = (subject?: string, body?: string): string => {
  let link = `mailto:${siteConfig.email}`;
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  if (params.length) link += `?${params.join("&")}`;
  return link;
};
