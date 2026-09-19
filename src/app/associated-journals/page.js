import { JournalDirectory } from "@/components/home/associatedJournals";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default async function AssociatedJournalsPage({ searchParams }) {
  const params = await searchParams;

  return (
    <>
      <Header />

      <main className="mt-[80px]">
        <JournalDirectory
          category={params?.category || "all"}
          indexing={params?.indexing || "all"}
        />
      </main>

      <Footer />
    </>
  );
}
