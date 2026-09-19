import BlogList from "@/components/blogs";
import { ContactForm, ContactOptions } from "@/components/contact";
import { BreadCrumbs, Heading, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";


export default function BlogPage() {
    const crumbs = [
        {
            title : "Home",
            link : "/"
        }
    ]
    return (<>
        <Header />
        <main>
        <PageIntro title={"Our Blogs"} description={"Expand the knowledge"} />
        <BreadCrumbs crumbs={crumbs} page={"Blogs"} />
        <BlogList />
        </main>
        <Footer />
    </>)
}