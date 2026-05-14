export function WhatsAppButton() {
  const message = encodeURIComponent("Hello Sachin, I'd like to inquire about wedding planning.");
  return (
    <a
      href={`https://wa.me/919876543210?text=${message}`}
      target="_blank"
      rel="noopener"
      aria-label="Inquire on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-ink text-ivory ring-4 ring-ivory shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M19.11 17.27c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.04 5.33c-5.92 0-10.73 4.81-10.74 10.72 0 1.89.49 3.74 1.43 5.36L5 27l5.74-1.5a10.73 10.73 0 005.3 1.35h.01c5.92 0 10.74-4.81 10.74-10.72 0-2.86-1.12-5.55-3.14-7.57a10.66 10.66 0 00-7.61-3.23z" />
      </svg>
    </a>
  );
}
