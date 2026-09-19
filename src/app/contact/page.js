import { ContactForm, ContactOptions } from "@/components/contact";
import { BreadCrumbs, Heading, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";


export default function ContactPage() {
    const crumbs = [
        {
            title : "Home",
            link : "/"
        }
    ]
    return (<>
        <Header />
        <main>
        <PageIntro title={"Contact Us"} description={"We would be happy to serve you."} />
        <BreadCrumbs crumbs={crumbs} page={"Contact"} />
        <ContactOptions />
        <ContactForm />
        </main>
        <Footer />
    </>)
}