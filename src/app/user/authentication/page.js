import { LoginSignUpForm } from "@/components/user";
import { BreadCrumbs, Heading, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";


export default function UserAuthenticationPage() {
    const crumbs = [
        {
            title : "Home",
            link : "/"
        }
    ]
    return (<>
        <Header />
        <main className="mt-[80px]">
        <BreadCrumbs crumbs={crumbs} page={"Login/Sign-Up"} />
        <LoginSignUpForm />
        </main>
        <Footer />
    </>)
}