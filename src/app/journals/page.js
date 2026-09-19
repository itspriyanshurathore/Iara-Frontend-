import { JournalDirectory } from "@/components/home/journalsList";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default async function JournalsPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category;

  return (
    <>
      <Header />
      <main className="mt-[80px]">
        <JournalDirectory category={category} />
      </main>
      <Footer />
    </>
  );
}
