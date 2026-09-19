import { SubmissionForm } from "@/components/submission";
import { BreadCrumbs, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default function OnlineSubmissionPage() {
    const crumbs = [
        {
            title: "Home",
            link: "/"
        }
    ]
    return (<>
        <Header />
        <main>
            <PageIntro title={"Online Submission"} description={"Submit your book for further processing"} />
            <BreadCrumbs crumbs={crumbs} page={"Online Submission"} />
            <SubmissionForm />
        </main>
        <Footer />
    </>)
}