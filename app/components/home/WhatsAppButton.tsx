const WA_LINK =
  "https://wa.me/9613395854?text=" +
  encodeURIComponent("Hi Supreme Academy! I'd like to know more about your classes.");

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-20 flex items-center gap-2.5 rounded-full bg-whatsapp py-3.5 pl-4 pr-5.5 font-heading text-base font-semibold tracking-[0.02em] text-whatsapp-dark shadow-[0_8px_24px_rgba(0,0,0,0.28)] hover:bg-[#1ebe5a]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
        alt=""
        className="block h-6 w-6"
      />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
