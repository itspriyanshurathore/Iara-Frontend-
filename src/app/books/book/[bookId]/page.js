import { BookPageTop } from "@/components/books";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default async function BookDetailPage({params}) {
    const {bookId} = await params;
    // console.log(bookId)
    return(<>
        <Header />
        <main>
            <BookPageTop bookId={bookId} />
        </main>
        <Footer />
    </>)
}