export const getWhatsappUrl = (phone: string, message: string) => {
  // Remove all non-numeric characters from phone number - +52 998 761 8595 => 529987618595
  const phoneNumber = phone.replace(/[^\d]/g, '');

  const text = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${text}`;
};
