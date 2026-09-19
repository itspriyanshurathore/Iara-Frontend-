import { BreadCrumbs, PageIntro } from "@/components/utils";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";

export default function GuidelinesPage() {
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
            <BreadCrumbs crumbs={crumbs} page={"Submission Guidelines"} />

            <div className="px-[10%] py-[5%] max-w-full mx-auto bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Review Process</h1>
                <p className="text-gray-700 mb-4">
                    Each manuscript will be primarily examined by the editor, and those selected for inclusion are then forwarded for a double-blind peer review by members. On the basis of these reviews, the research paper shall be published subject to the recommendation of referees.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Accepts the paper for publication with no changes.</li>
                    <li>Accepts the paper for publication with only minor changes.</li>
                    <li>Accepts the paper for publication provided it is amended in line with the reviewer&apos;s comments.</li>
                    <li>Rejects the paper as unsuitable for publication.</li>
                </ul>

                <p className="text-gray-700 mt-4">
                    The authors shall be informed about the selection/rejection of the article/paper by e-mail only. The rejected papers shall not be returned. In case of acceptance of the article, the journal reserves the right of making amendments in the final draft of the research paper to suit the journal&apos;s requirement.
                </p>


                <h2 className="text-xl font-bold text-gray-800 mt-6">Plagiarism Policy</h2>
                <p className="text-gray-700 mt-2">
                    Whether intentional or not, plagiarism is a serious violation. Plagiarism is the copying of ideas, text, data, and other creative work (e.g., tables, figures, and graphs) and presenting it as original research without proper citation. We define plagiarism as a case in which a paper reproduces another work with similarity and without citation.
                </p>

                <p className="text-gray-700 mt-4">
                    If evidence of plagiarism is found before/after acceptance or after publication of the paper, the author will be offered a chance for rebuttal. If the arguments are not found to be satisfactory, the manuscript will be retracted and the author sanctioned from publishing papers for a period to be determined by the responsible Editor(s).
                </p>
            </div>
        </main>
        <Footer />
    </>)
}