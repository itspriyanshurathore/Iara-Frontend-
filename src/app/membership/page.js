import { BreadCrumbs, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default function MembershipPage() {
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
                <PageIntro title={"Membership"} description={"Here are our premium packages."} />
                <BreadCrumbs crumbs={crumbs} page={"Membership"} />
            </main>
            <Footer />
        </>
    )
}