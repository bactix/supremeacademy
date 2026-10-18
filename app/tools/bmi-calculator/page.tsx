import type { Metadata } from "next";
import Link from "next/link";
import ShopHeader from "../../components/shop/ShopHeader";
import ShopFooter from "../../components/shop/ShopFooter";
import BmiCalculator from "../../components/tools/BmiCalculator";
import { SITE_URL } from "../../lib/site-config";

const TITLE = "BMI Calculator | Supreme Academy";
const DESCRIPTION =
  "Free BMI calculator from Supreme Academy in Tripoli. Enter your height and weight in metric or imperial to see your body mass index and healthy weight range.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/tools/bmi-calculator` },
};

export default function BmiCalculatorPage() {
  return (
    <>
      <ShopHeader />
      <main style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 24px 96px" }}>
        <Link
          href="/tools"
          className="font-kanit"
          style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a746d" }}
        >
          ← All tools
        </Link>
        <h1
          className="font-kanit"
          style={{
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "clamp(38px,5vw,64px)",
            lineHeight: 0.95,
            margin: "20px 0 16px",
            textTransform: "uppercase",
          }}
        >
          BMI <span style={{ color: "#ee6a1f" }}>calculator</span>
        </h1>
        <p style={{ maxWidth: 560, margin: "0 0 40px", fontSize: 17, lineHeight: 1.55, color: "#55504a" }}>
          Body mass index compares your weight to your height. Enter your measurements below.
        </p>
        <BmiCalculator />
        <p style={{ maxWidth: 680, margin: "32px 0 0", fontSize: 14, lineHeight: 1.6, color: "#7a746d" }}>
          BMI is a general guide only. It doesn&apos;t account for muscle mass, age or body composition, so athletes
          and people with a lot of muscle can score as overweight while being very fit. Ask a coach or a health
          professional for advice that fits you.
        </p>
      </main>
      <ShopFooter />
    </>
  );
}
