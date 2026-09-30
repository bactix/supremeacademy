export default function Footer() {
  return (
    <footer className="bg-darker text-muted">
      <div className="mx-auto grid max-w-310 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-9 px-6 pb-10 pt-14">
        <div className="text-[15px] leading-[1.7]">
          <div className="mb-2 font-heading font-semibold uppercase tracking-[0.08em] text-white">
            Visit
          </div>
          Tripoli, Lebanon
        </div>
        <div className="text-[15px] leading-[1.7]">
          <div className="mb-2 font-heading font-semibold uppercase tracking-[0.08em] text-white">
            Contact
          </div>
          <a href="tel:+9613395854" className="text-inherit">
            +961 3 395 854
          </a>
        </div>
        <div className="text-[15px] leading-[1.7]">
          <div className="mb-2 font-heading font-semibold uppercase tracking-[0.08em] text-white">
            Hours
          </div>
          Mon–Fri 6:00–21:30
          <br />
          Sat 9:00–14:00
        </div>
      </div>
    </footer>
  );
}
