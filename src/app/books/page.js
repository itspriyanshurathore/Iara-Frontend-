import { BooksComponent } from "@/components/books";
import { BreadCrumbs, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default function BooksPage() {
    const crumbs = [
        {
            title: "Home",
            link: "/"
        }
    ]
    return (
        <>
            <Header />
            <main>
                <PageIntro title={"Our Books"} description={"Explore our range of books"} />
                <BreadCrumbs crumbs={crumbs} page={"Books"} />
                <BooksComponent />
            </main>
            <Footer />
        </>
    )
}