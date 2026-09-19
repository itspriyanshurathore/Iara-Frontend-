import IaraPublication from "@/components/about";
import { BreadCrumbs, Heading, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default function AboutPage() {
    const crumbs = [
        {
            title: "Home",
            link: "/"
        }
    ]
    return (<>
        <Header />
        <main>
            <PageIntro title={"About Us"} description={"Something we would share."} />
            <BreadCrumbs crumbs={crumbs} page={"About"} />
            <IaraPublication />
        </main>
        <Footer />
    </>)
}