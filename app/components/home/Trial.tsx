import TrialForm from "./TrialForm";

export default function Trial() {
  return (
    <section id="trial" className="bg-orange text-ink">
      <div className="mx-auto grid max-w-310 grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12 px-6 py-22">
        <div>
          <h2 className="mb-4.5 font-heading text-[clamp(42px,6vw,76px)] font-extrabold uppercase italic leading-[0.92]">
            Your first class
            <br />
            is on us.
          </h2>
          <p className="max-w-110 text-lg leading-[1.55]">
            No experience needed. Bring water and comfortable clothes, we&apos;ll handle the rest.
          </p>
        </div>
        <TrialForm />
      </div>
    </section>
  );
}
