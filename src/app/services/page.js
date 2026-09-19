import { ServicesList } from "@/components/services";
import { BreadCrumbs, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default function ServicesPage() {
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
                <PageIntro title={"Our Services"} description={"Services we provide"} />
                <BreadCrumbs crumbs={crumbs} page={"Services"} />
                <ServicesList />
            </main>
            <Footer />
        </>
    )
}