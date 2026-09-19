import { JournalDetail } from "@/components/home/journalsList";
import { JournalFilterSidebar } from "@/components/home/associatedJournals";
import { associatedJournals } from "@/lib/associatedJournalData";

import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return associatedJournals.map((journal) => ({
    journalId: journal.slug,
  }));
}

export default async function AssociatedJournalDetailPage({ params }) {
  const { journalId } = await params;

  const journal = associatedJournals.find(
    (item) => item.slug === journalId
  );

  if (!journal) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="mt-[80px] bg-[#F7F9FC]">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-[280px_1fr]
            gap-7
            px-[6%]
            py-16
            max-[900px]:grid-cols-1
          "
        >
          {/* FILTER SIDEBAR */}

          <JournalFilterSidebar
            subjectFilter={journal.category}
            indexFilter="all"
            navigationMode={true}
          />

          {/* JOURNAL DETAILS */}

          <div className="min-w-0">
            <JournalDetail journal={journal} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}