import { JournalDetail } from "@/components/home/journalsList";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function JournalDetailPage({ params }) {
  const { journalId } = await params;
  // const journal = journals.find((item) => item.slug === journalId);
  let journal = null;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/journals/journal/${journalId}/`
    );

    journal = response.data;
  } catch (error) {
    console.error(`Error fetching journal ${journalId}:`, error?.response?.status || error.message);
  }

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
