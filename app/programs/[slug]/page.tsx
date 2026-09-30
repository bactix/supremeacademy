import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROGRAMS, getProgram } from "../../lib/programs-data";
import { SITE_URL, BUSINESS } from "../../lib/site-config";
import ProgramPage from "../../components/programs/ProgramPage";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};

  const url = `${SITE_URL}/programs/${program.slug}`;

  return {
    title: program.metaTitle,
    description: program.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: program.metaTitle,
      description: program.metaDescription,
      url,
      siteName: BUSINESS.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: program.metaTitle,
      description: program.metaDescription,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const url = `${SITE_URL}/programs/${program.slug}`;

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${program.name} Classes`,
    description: program.metaDescription,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.addressLocality,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    hasCourseInstance: program.schedule.map((entry) => ({
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseSchedule: {
        "@type": "Schedule",
        byDay: `https://schema.org/${entry.day}`,
        startTime: entry.time.split("–")[0],
      },
      instructor: {
        "@type": "Person",
        name: entry.coach,
      },
      location: {
        "@type": "Place",
        name: BUSINESS.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: BUSINESS.addressLocality,
          addressCountry: BUSINESS.addressCountry,
        },
      },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: program.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Programs", item: `${SITE_URL}/#programs` },
      { "@type": "ListItem", position: 3, name: `${program.name} Classes`, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProgramPage program={program} />
    </>
  );
}
