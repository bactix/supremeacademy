export default function Location() {
  return (
    <section id="location" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-310 grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-12 px-6 py-26">
        <div>
          <h2 className="mb-6 font-heading text-[clamp(38px,5vw,64px)] font-extrabold uppercase italic leading-[0.95]">
            Find <span className="text-orange">us</span>
          </h2>
          <div className="text-[17px] leading-[1.6] text-subtle">
            <div>Tripoli, Lebanon</div>
            <div className="mt-3">Open Mon–Sat, 8:30am – 9:00pm</div>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=34.4233446,35.8370708&destination_place_id=0x1521f749a16dc0f7:0x45b16d7b9cad902"
            target="_blank"
            rel="noopener"
            className="mt-7 inline-block bg-orange px-6.5 py-3.5 font-heading text-[15px] font-semibold uppercase tracking-[0.06em] text-ink hover:bg-[#ff8138]"
          >
            Get Directions
          </a>
        </div>
        <div className="aspect-4/3 overflow-hidden border border-border-dark">
          <iframe
            src="https://maps.google.com/maps?q=34.4233446,35.8370708&z=16&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            title="Supreme Academy location"
          />
        </div>
      </div>
    </section>
  );
}
