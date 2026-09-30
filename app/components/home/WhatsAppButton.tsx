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
      className="font-kanit sa-whatsapp"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#25d366",
        color: "#0b2e17",
        padding: "14px 22px 14px 16px",
        borderRadius: 999,
        boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: "0.02em",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
        alt=""
        style={{ width: 24, height: 24, display: "block" }}
      />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
