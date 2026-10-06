import { JournalDetail } from "@/components/home/journalsList";
import { JournalFilterSidebar } from "@/components/home/associatedJournals";

import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";
import { notFound } from "next/navigation";
import axios from "axios";

export default async function AssociatedJournalDetailPage({ params }) {
  const { journalId } = await params;

  let journal = null;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/journals/associated-journals/journal/${journalId}/`
    );

    journal = response.data;
  } catch (error) {
    console.error(
      `Error fetching journal ${journalId}:`,
      error?.response?.status || error.message
    );
  }

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
            w-full
            max-w-[1450px]
            grid-cols-[280px_minmax(0,1fr)]
            items-start
            gap-6
            px-[3%]
            pt-4
            pb-10
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