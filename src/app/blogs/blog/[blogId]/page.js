import { BlogPageTop } from "@/components/blogs";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default async function BlogDetailPage({params}) {
    const {blogId} = await params;
    // console.log(bookId)
    return(<>
        <Header />
        <main>
            <BlogPageTop blogId={blogId} />
        </main>
        <Footer />
    </>)
}