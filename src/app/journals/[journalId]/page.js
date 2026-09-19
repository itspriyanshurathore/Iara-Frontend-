import { journals, JournalDetail } from "@/components/home/journalsList";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return journals.map((journal) => ({ journalId: journal.slug }));
}

export default async function JournalDetailPage({ params }) {
  const { journalId } = await params;
  const journal = journals.find((item) => item.slug === journalId);

  if (!journal) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="mt-[80px]">
        <JournalDetail journal={journal} />
      </main>
      <Footer />
    </>
  );
}
