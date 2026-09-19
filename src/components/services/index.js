"use client";

import Image from "next/image";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";

export function ServicesList() {
    const services = [
        {
            "image": "/images/service image.jpg",
            "heading": "Book Publishing Services",
            "description":
            {
                "Traditional Publishing": "Full-service book publishing with editing, printing, marketing, and distribution.",
                "Self-Publishing Assistance": "Support for authors to publish independently with design, formatting, and marketing.",
                "Hybrid Publishing": "A collaborative publishing model where both publisher and author share costs and profits."
            },
            "details": <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">📚 Book Publishing Services</h1>

                {/* Introduction */}
                <p className="text-gray-700 mb-6">
                    Publishing a book is a **transformative journey** that brings your words to life and shares them with the world.
                    Whether you are looking for **traditional publishing, self-publishing support, or a hybrid approach**,
                    we provide **comprehensive solutions** to help you publish with confidence.
                </p>

                {/* Section 1: Traditional Publishing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Traditional Publishing</h2>
                <p className="text-gray-700 mb-4">
                    Traditional publishing is a **full-service approach** where the publisher **handles everything**—editing,
                    design, printing, distribution, and marketing. If your manuscript is selected, we take care of the entire
                    process, ensuring that your book meets **industry standards and reaches a wide audience**.
                </p>
                <p className="text-gray-700 mb-6">
                    Our publishing house works with **experienced editors, designers, and distributors** to provide
                    high-quality books that stand out in bookstores and online markets.
                    **Authors receive royalties** while we manage printing, promotions, and sales.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Choose Traditional Publishing?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📌 **Professional Editing & Design** – Your book undergoes multiple editorial stages for perfection.</li>
                    <li>📌 **Marketing & Promotions** – Get featured in bookstores, online retailers, and media.</li>
                    <li>📌 **No Upfront Costs for Authors** – We invest in your book and handle expenses.</li>
                    <li>📌 **Wide Distribution** – Your book will be available through **global channels**.</li>
                </ul>

                {/* Section 2: Self-Publishing Assistance */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">✍️ Self-Publishing Assistance</h2>
                <p className="text-gray-700 mb-4">
                    Self-publishing allows you to have **full control** over your book, from design to pricing.
                    Our self-publishing assistance provides **expert guidance** in key areas such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🖊️ **Manuscript Editing** – Professional proofreading and content refinement.</li>
                    <li>📖 **Book Formatting & Layout** – Print-ready designs for paperbacks and eBooks.</li>
                    <li>🎨 **Cover Design** – Eye-catching visuals that attract readers.</li>
                    <li>📢 **Marketing Strategies** – Social media, press releases, and book launch support.</li>
                    <li>🛍️ **Distribution Assistance** – Publishing on **Amazon, Kindle, Google Books, and more**.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                    Unlike traditional publishing, self-publishing allows **100% ownership** and **higher royalty earnings**.
                    We provide **customized packages** to help authors bring their books to market **without compromise**.
                </p>

                {/* Section 3: Hybrid Publishing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🤝 Hybrid Publishing</h2>
                <p className="text-gray-700 mb-4">
                    Hybrid publishing is a **collaborative model** where both **the author and the publisher share the costs and profits**.
                    It offers the **benefits of traditional publishing** while allowing authors to retain **more creative and financial control**.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">How Hybrid Publishing Works:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>💡 **Co-Investment** – Authors and publishers share production costs.</li>
                    <li>📘 **Quality Publishing** – Professional editing, formatting, and marketing services.</li>
                    <li>📣 **Promotional Support** – Collaborative marketing strategies to maximize book exposure.</li>
                    <li>📈 **Higher Royalties** – Authors earn a greater share of book sales.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                    If you want the **credibility of traditional publishing** while **keeping a say in marketing and sales**,
                    hybrid publishing might be the perfect choice for you.
                </p>

                {/* Who Can Benefit? */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Who Can Benefit from Our Publishing Services?</h2>
                <p className="text-gray-700 mb-4">
                    Our publishing services are designed for **authors at all levels**, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📚 **First-time authors** looking for step-by-step guidance.</li>
                    <li>🏆 **Experienced writers** who want a professional publishing experience.</li>
                    <li>📖 **Academic & business professionals** needing specialized publishing support.</li>
                    <li>📢 **Influencers & entrepreneurs** who want to turn their knowledge into a book.</li>
                </ul>
                <div className="mt-6 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Start Your Publishing Journey 🚀
                    </a>
                </div>
            </div>

        },
        {
            "image": "/images/service image.jpg",
            "heading": "Manuscript Services",
            "description":
            {
                "Manuscript Evaluation": "Professional assessment of a manuscript’s quality, readability, and market potential.",
                "Ghostwriting": "Writing books for clients who have ideas but need help with execution.",
                "Developmental Editing": "Structuring and improving content, plot, and pacing for a compelling narrative.",
                // "Copy Editing": "Refining grammar, style, and consistency for polished writing.",
                // "Proofreading": "Final error-checking for typos, grammar, and formatting issues before publishing."
            },
            "details": <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">📜 Manuscript Services</h1>
                <p className="text-gray-700 mb-4">
                    Preparing a manuscript for publication is the most crucial step in the journey of a book.
                    Our professional manuscript services ensure that your work is **well-structured, polished, and ready** for publishing.
                    We offer expert assistance in **editing, proofreading, and refining** your content to meet high publishing standards.
                </p>
                <p className="text-gray-700 mb-4">
                    Our team of experienced editors carefully examines every aspect of your manuscript, including **grammar, punctuation, clarity, and coherence**.
                    We provide constructive feedback and make necessary improvements to enhance the readability and impact of your book.
                    Whether you need a light edit or a complete overhaul, we tailor our services to meet your specific needs.
                </p>

                {/* Additional Sections */}
                <h2 className="text-2xl font-semibold text-gray-800 mt-6">Our Manuscript Services Include:</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                    <li>✅ **Developmental Editing** – Structural improvements and content refinement.</li>
                    <li>✅ **Copy Editing** – Grammar, punctuation, and language correction.</li>
                    <li>✅ **Proofreading** – Final check before publishing.</li>
                    <li>✅ **Manuscript Evaluation** – Professional assessment and feedback.</li>
                </ul>

                {/* Call to Action */}
                <div className="mt-6">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Get Started
                    </a>
                </div>
            </div>

        },
        {
            "image": "/images/service image.jpg",
            "heading": "Design & Formatting Services",
            "description":
            {
                "Cover Design": "Professionally designed book covers that attract readers and fit the genre.",
                "Interior Layout & Typesetting": "Formatting books for a clean and professional reading experience.",
                "Illustrations & Graphics": "Custom visuals for children’s books, comics, and technical publications."
            },
            "details": <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">🎨 Design & Formatting Services</h1>

                {/* Introduction */}
                <p className="text-gray-700 mb-6">
                    A well-designed book creates a **lasting impression** and enhances readability.
                    Our **Design & Formatting Services** ensure that your book is visually appealing,
                    professionally structured, and **market-ready**. Whether you need a stunning cover,
                    well-formatted text, or custom illustrations, we bring your vision to life.
                </p>

                {/* Section 1: Cover Design */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Cover Design</h2>
                <p className="text-gray-700 mb-4">
                    A book cover is the **first thing readers notice**. Our professional designers craft **eye-catching covers**
                    that align with your book’s genre, ensuring it **stands out on bookshelves and online stores**.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Cover Design Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🎨 **Custom Cover Designs** – Unique and engaging visuals tailored to your book.</li>
                    <li>🖼️ **Genre-Specific Aesthetics** – Ensuring your cover matches industry trends.</li>
                    <li>📘 **Paperback & eBook Covers** – Optimized for both print and digital formats.</li>
                    <li>💡 **Typography & Color Scheme Selection** – Enhancing readability and appeal.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                    A well-designed cover **boosts sales and reader interest**. Whether you want a minimalist,
                    artistic, or high-impact commercial look, we create covers that **tell your story at a glance**.
                </p>

                {/* Section 2: Interior Layout & Typesetting */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📄 Interior Layout & Typesetting</h2>
                <p className="text-gray-700 mb-4">
                    Interior formatting ensures your book is **organized, readable, and professional**.
                    Our typesetting and layout design create a **seamless reading experience**,
                    whether in **print or digital format**.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">What We Offer:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📖 **Print & eBook Formatting** – Optimized for Kindle, PDF, and paperback.</li>
                    <li>📚 **Page Layout & Alignment** – Structured for readability and aesthetics.</li>
                    <li>📝 **Font & Spacing Optimization** – Ensuring a balanced and smooth text flow.</li>
                    <li>📏 **Table of Contents & Indexing** – Making navigation effortless for readers.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                    Whether you&apos;re publishing a **novel, academic paper, or business guide**,
                    we ensure **every page looks polished and professional**.
                </p>

                {/* Section 3: Illustrations & Graphics */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎨 Illustrations & Graphics</h2>
                <p className="text-gray-700 mb-4">
                    Custom illustrations **bring your book to life**. From **children’s books and comics**
                    to **technical publications**, we provide visually engaging artwork that enhances storytelling.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Illustration Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🖌️ **Custom Artwork** – Hand-drawn and digital illustrations tailored to your book.</li>
                    <li>📊 **Infographics & Charts** – Enhancing data visualization for business or academic books.</li>
                    <li>🧸 **Children’s Book Illustrations** – Fun, colorful, and engaging visuals for young readers.</li>
                    <li>📖 **Comic & Graphic Novel Art** – Professional illustrations in different artistic styles.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                    Whether you need **detailed sketches, vibrant illustrations, or technical graphics**,
                    our team delivers high-quality artwork that **captures the essence of your book**.
                </p>

                {/* Who Can Benefit? */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Who Can Benefit from Our Services?</h2>
                <p className="text-gray-700 mb-4">
                    Our design and formatting services are ideal for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📚 **Self-Published Authors** – Ensuring a professional look for independent books.</li>
                    <li>📖 **Traditional Publishers** – High-quality design for print and digital editions.</li>
                    <li>📝 **Academics & Researchers** – Well-structured formatting for scholarly publications.</li>
                    <li>🎨 **Illustrated Book Creators** – Artists, children’s authors, and graphic novelists.</li>
                </ul>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Enhance Your Book’s Design 🚀
                    </a>
                </div>
            </div>

        },
        {
            "image": "/images/service image.jpg",
            "heading": "Printing & Distribution",
            "description":
            {
                "Print-on-Demand (POD)": "Printing books only when ordered, reducing waste and costs.",
                "Bulk Printing": "Large-scale book printing for wide distribution and cost efficiency.",
                // "E-Book & Audiobook Publishing": "Converting books into digital and audio formats for wider reach.",
                "Global Distribution": "Selling books on platforms like Amazon, Google Books, and local bookstores."
            },
            "details": <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">📦 Printing & Distribution Services</h1>

                {/* Introduction */}
                <p className="text-gray-700 mb-6">
                    Bringing your book to readers **requires high-quality printing and a strong distribution network**.
                    Our **Printing & Distribution Services** ensure that your book is available in multiple formats,
                    reaches a global audience, and is produced cost-effectively.
                </p>

                {/* Section 1: Print-on-Demand */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🖨️ Print-on-Demand (POD)</h2>
                <p className="text-gray-700 mb-4">
                    Print-on-Demand (POD) is a **cost-effective and eco-friendly** way to publish your book.
                    Instead of printing in bulk, books are **printed only when ordered**, reducing storage costs and waste.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Benefits of POD:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📉 **Lower Costs** – No need to print large batches upfront.</li>
                    <li>🌍 **Eco-Friendly** – Reduces paper waste and storage requirements.</li>
                    <li>📦 **No Inventory Needed** – Books are printed and shipped as orders come in.</li>
                    <li>🚀 **Global Availability** – Print and ship books worldwide effortlessly.</li>
                </ul>

                {/* Section 2: Bulk Printing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📚 Bulk Printing</h2>
                <p className="text-gray-700 mb-4">
                    Bulk printing is ideal for authors and publishers who need **large quantities** of books
                    for wide distribution, bookstores, or promotional events.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Choose Bulk Printing?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>💰 **Cost Efficiency** – Lower printing costs per unit.</li>
                    <li>🏬 **Retail & Bookstore Distribution** – Ideal for large-scale sales.</li>
                    <li>🚛 **Faster Turnaround** – Quick delivery for author events and launches.</li>
                    <li>📖 **High-Quality Printing** – Multiple paper types, bindings, and finishes available.</li>
                </ul>

                {/* Section 3: E-Book & Audiobook Publishing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📱 E-Book & Audiobook Publishing</h2>
                <p className="text-gray-700 mb-4">
                    In the digital age, making your book available in **eBook and audiobook formats**
                    expands your audience and boosts sales across multiple platforms.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">We Offer:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📖 **E-Book Formatting** – Optimized for Kindle, Apple Books, and Google Play.</li>
                    <li>🎧 **Audiobook Production** – High-quality narration and distribution.</li>
                    <li>🖥️ **Multi-Format Compatibility** – ePub, PDF, and MOBI file conversions.</li>
                    <li>🌍 **Wide Platform Access** – Reach global readers with digital editions.</li>
                </ul>

                {/* Section 4: Global Distribution */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌎 Global Distribution</h2>
                <p className="text-gray-700 mb-4">
                    A book’s success depends on **how easily readers can find and buy it**.
                    Our global distribution services **ensure your book is available worldwide**
                    on leading **online and offline platforms**.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">We Distribute Your Book To:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📦 **Amazon Kindle & Print** – Sell your book on the world’s largest platform.</li>
                    <li>📖 **Google Books & Apple Books** – Reach millions of digital readers.</li>
                    <li>🏬 **Local Bookstores & Libraries** – Placement in retail and academic networks.</li>
                    <li>🛍️ **Wholesale & Direct Sales** – Options for bookstores, schools, and special events.</li>
                </ul>

                {/* Who Can Benefit? */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Who Can Benefit from Our Services?</h2>
                <p className="text-gray-700 mb-4">
                    Our Printing & Distribution Services are perfect for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📚 **Self-Published Authors** – Making their books available worldwide.</li>
                    <li>🏢 **Publishing Houses** – Large-scale printing and distribution.</li>
                    <li>📖 **Academics & Educators** – Distributing research books and textbooks.</li>
                    <li>🎧 **Audio & Digital Authors** – Expanding into eBook and audiobook markets.</li>
                </ul>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Get Your Book in Print & Online 🚀
                    </a>
                </div>
            </div>

        },
        {
            "image": "/images/service image.jpg",
            "heading": "Marketing & Promotion",
            "description":
            {
                "Book Launch & Events": "Organizing launch events, book signings, and virtual promotions.",
                "Author Branding & Social Media": "Building an author’s online presence for better book marketing.",
                // "Press Releases & Media Coverage": "Promoting books through media outreach and PR campaigns.",
                "Amazon & SEO Optimization": "Enhancing book visibility on online marketplaces."
            },
            "details": <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">📢 Marketing & Promotion Services</h1>

                {/* Introduction */}
                <p className="text-gray-700 mb-6">
                    Writing a book is just the beginning – **getting it into readers’ hands is what truly matters**.
                    Our **Marketing & Promotion Services** help authors **build their brand, increase visibility,
                    and boost book sales** through strategic marketing efforts.
                </p>

                {/* Section 1: Book Launch & Events */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📅 Book Launch & Events</h2>
                <p className="text-gray-700 mb-4">
                    A successful book launch creates **hype, excitement, and early sales**.
                    We **organize and manage** book release events, **both online and offline**,
                    to connect you with readers, critics, and industry professionals.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🎤 **Live Book Launch Events** – Physical and virtual book launch ceremonies.</li>
                    <li>🖊️ **Book Signings & Meetups** – Engaging with fans and signing copies.</li>
                    <li>📺 **Virtual Author Q&A Sessions** – Live-streamed discussions and interviews.</li>
                    <li>🎥 **Promotional Trailers** – Short video teasers to boost excitement.</li>
                </ul>

                {/* Section 2: Author Branding & Social Media */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📲 Author Branding & Social Media</h2>
                <p className="text-gray-700 mb-4">
                    **A strong personal brand** makes an author **more recognizable and influential**.
                    We help **build and maintain** your presence across **social media platforms**
                    to create a loyal readership.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">We Help You With:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📌 **Custom Author Website & Blog** – Establish an online identity.</li>
                    <li>📷 **Instagram & Facebook Marketing** – Grow an engaged audience.</li>
                    <li>📝 **Content Strategy & Post Scheduling** – Regular updates to stay relevant.</li>
                    <li>🎥 **YouTube & TikTok Book Promotions** – Engaging videos to showcase your book.</li>
                </ul>

                {/* Section 3: Press Releases & Media Coverage */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📰 Press Releases & Media Coverage</h2>
                <p className="text-gray-700 mb-4">
                    **Getting media attention** helps in reaching a wider audience and
                    establishing credibility. We craft **professional press releases**
                    and secure **media features** to boost your book’s recognition.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Media Outreach Includes:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📝 **Press Release Writing & Distribution** – Sent to journalists & bloggers.</li>
                    <li>🎙️ **Podcast & Radio Interviews** – Appearances on book-focused shows.</li>
                    <li>📻 **Newspaper & Magazine Features** – Coverage in print and digital media.</li>
                    <li>📢 **Influencer & Blogger Partnerships** – Book reviews & social media promotions.</li>
                </ul>

                {/* Section 4: Amazon & SEO Optimization */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📈 Amazon & SEO Optimization</h2>
                <p className="text-gray-700 mb-4">
                    **Ranking high on Amazon** and search engines ensures **better discoverability and sales**.
                    We use **SEO techniques and marketplace strategies** to boost your book’s visibility.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Optimization Services Cover:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🔍 **Amazon KDP Optimization** – Title, keywords, and description enhancement.</li>
                    <li>🌍 **Google & Bing SEO** – Improving search rankings for your book.</li>
                    <li>⭐ **Amazon Reviews & Ratings Boost** – Strategies to gain more reviews.</li>
                    <li>🎯 **Ad Campaign Management** – Running effective book ads on Amazon & Google.</li>
                </ul>

                {/* Who Can Benefit? */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Who Can Benefit from Our Services?</h2>
                <p className="text-gray-700 mb-4">
                    Our **Marketing & Promotion Services** are ideal for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📚 **Self-Published Authors** – Who need help reaching a larger audience.</li>
                    <li>🏆 **Bestselling & Emerging Authors** – To maintain book visibility.</li>
                    <li>🏛️ **Publishing Houses** – Looking for expert book marketing solutions.</li>
                    <li>📖 **Academics & Researchers** – To promote specialized books.</li>
                </ul>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Start Promoting Your Book 🚀
                    </a>
                </div>
            </div>

        },
        {
            "image": "/images/service image.jpg",
            "heading": "Legal & Rights Management",
            "description":
            {
                "ISBN & Copyright Registration": "Securing ISBNs and copyrights to protect intellectual property.",
                "Contract Drafting & Review": "Legal assistance for publishing agreements and rights management.",
                "Plagiarism Check": "Ensuring originality with professional plagiarism detection."
            },
            "details": <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">⚖️ Legal & Rights Management Services</h1>

                {/* Introduction */}
                <p className="text-gray-700 mb-6">
                    Protecting your book&apos;s intellectual property is **essential** in today’s publishing world.
                    Our **Legal & Rights Management Services** ensure that your work remains **safe, properly credited, and legally secured**.
                    From **ISBN registration** to **contract drafting and plagiarism checks**, we cover all legal aspects of publishing.
                </p>

                {/* Section 1: ISBN & Copyright Registration */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📑 ISBN & Copyright Registration</h2>
                <p className="text-gray-700 mb-4">
                    ISBN (International Standard Book Number) and copyright registration
                    provide **official recognition and protection** for your book.
                    We assist authors in obtaining **ISBNs for print and digital books**,
                    along with **copyright registration** to safeguard intellectual property.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🔖 **ISBN Registration** – Assigning unique ISBNs for print, e-books, and audiobooks.</li>
                    <li>🛡️ **Copyright Filing** – Legal protection against unauthorized use.</li>
                    <li>📂 **Legal Documentation** – Proper paperwork for proof of ownership.</li>
                    <li>🌍 **Global Recognition** – ISBN ensures worldwide cataloging in libraries and stores.</li>
                </ul>

                {/* Section 2: Contract Drafting & Review */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 Contract Drafting & Review</h2>
                <p className="text-gray-700 mb-4">
                    Publishing contracts can be **complex and overwhelming**.
                    We help authors **draft, review, and negotiate agreements**
                    to protect their rights and ensure fair publishing terms.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">We Assist With:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📜 **Publishing Agreements** – Contracts with publishers, ensuring transparency.</li>
                    <li>📖 **Rights & Licensing** – Managing book rights, including international editions.</li>
                    <li>⚖️ **Author-Publisher Negotiations** – Ensuring fair royalty and profit-sharing terms.</li>
                    <li>✅ **Self-Publishing Legal Guidance** – Helping indie authors secure their rights.</li>
                </ul>

                {/* Section 3: Plagiarism Check */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 Plagiarism Check</h2>
                <p className="text-gray-700 mb-4">
                    **Originality is key** in publishing. Plagiarism, whether intentional or accidental,
                    can **harm an author’s credibility** and lead to legal consequences.
                    Our **advanced plagiarism detection tools** ensure your manuscript is unique
                    and free from copied content.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Plagiarism Checking Process:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📊 **Deep-Scan Plagiarism Detection** – Using advanced tools to scan entire manuscripts.</li>
                    <li>🛑 **Duplicate Content Identification** – Highlighting similarities with published works.</li>
                    <li>📖 **Proper Citation Guidance** – Ensuring correct referencing and attribution.</li>
                    <li>✅ **Comprehensive Plagiarism Report** – Detailed feedback on originality.</li>
                </ul>

                {/* Who Can Benefit? */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Who Needs Legal & Rights Management Services?</h2>
                <p className="text-gray-700 mb-4">
                    Our **Legal & Rights Management Services** are beneficial for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📚 **Self-Published & Traditional Authors** – To secure ISBNs and copyright.</li>
                    <li>🏛️ **Publishing Houses** – To manage contracts and legal compliance.</li>
                    <li>📖 **Academic & Research Writers** – To ensure originality in scholarly work.</li>
                    <li>🖋️ **Ghostwriters & Content Creators** – To protect intellectual property.</li>
                </ul>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Secure Your Book Today ⚖️
                    </a>
                </div>
            </div>

        },
        {
            "image": "/images/service image.jpg",
            "heading": "E-Commerce & Direct Sales",
            "description":
            {
                "Own Online Bookstore": "Selling books directly through a dedicated e-commerce platform.",
                "E-Commerce Integration": "Listing books on major online marketplaces like Amazon and Flipkart."
            },
            "details": <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">🛒 E-Commerce & Direct Sales Services</h1>

                {/* Introduction */}
                <p className="text-gray-700 mb-6">
                    In today’s digital era, selling books online is the key to **maximizing reach and sales**.
                    Our **E-Commerce & Direct Sales Services** empower authors and publishers
                    to **sell books directly to readers** through personalized platforms
                    or major online marketplaces like **Amazon & Flipkart**.
                </p>

                {/* Section 1: Own Online Bookstore */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏬 Own Online Bookstore</h2>
                <p className="text-gray-700 mb-4">
                    Having a **dedicated online bookstore** gives you **full control over sales, pricing, and promotions**.
                    We help authors and publishers set up a professional **e-commerce website**
                    where they can sell books **directly to readers** without middlemen.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Benefits of Your Own Online Bookstore:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🌍 **Global Reach** – Sell your books worldwide, without restrictions.</li>
                    <li>💰 **Higher Profits** – Keep **100% of the sales revenue** without sharing with third-party platforms.</li>
                    <li>📦 **Inventory Control** – Manage stock, pre-orders, and special editions.</li>
                    <li>🎯 **Branding & Marketing** – Build your **personal brand** and create a loyal reader base.</li>
                </ul>

                {/* Section 2: E-Commerce Integration */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛍️ E-Commerce Integration</h2>
                <p className="text-gray-700 mb-4">
                    Listing books on popular **e-commerce platforms** like **Amazon, Flipkart, and Google Play Books**
                    increases visibility and allows authors to tap into a **larger customer base**.
                    Our service ensures **seamless integration** of your books on these platforms
                    with proper **metadata, descriptions, and pricing optimization**.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our E-Commerce Listing Services:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📦 **Amazon KDP & Flipkart Listings** – Uploading and managing book listings.</li>
                    <li>📊 **SEO Optimization** – Optimizing book titles, descriptions, and keywords for better ranking.</li>
                    <li>🛒 **Order Fulfillment Support** – Ensuring smooth shipping and customer satisfaction.</li>
                    <li>💳 **Payment Integration** – Setting up secure payment gateways for direct sales.</li>
                </ul>

                {/* Who Can Benefit? */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Who Needs E-Commerce & Direct Sales Services?</h2>
                <p className="text-gray-700 mb-4">
                    Our **E-Commerce & Direct Sales Services** are perfect for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📚 **Self-Published Authors** – Sell books directly & maximize profits.</li>
                    <li>🏢 **Publishing Houses** – Manage multiple book sales under one platform.</li>
                    <li>📖 **Independent Bookstores** – Expand reach with online sales.</li>
                    <li>🛍️ **Retailers & Distributors** – Integrate books with major online marketplaces.</li>
                </ul>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Start Selling Your Books Today 📚
                    </a>
                </div>
            </div>

        },
        {
            "image": "/images/service image.jpg",
            "heading": "Specialized Publishing",
            "description":
            {
                "Children’s Book Publishing": "Specialized publishing for illustrated and storybooks for kids.",
                "Academic & Research Publishing": "Publishing textbooks, research papers, and scholarly content.",
                // "Poetry & Short Story Collections": "Assisting in compiling and publishing poetry and short stories.",
                // "Translation & Multilingual Publishing": "Translating books to reach a global audience.",
                "Educational Publishing": "Producing school textbooks, guides, and academic materials.",
                // "Corporate Publishing": "Creating corporate reports, whitepapers, and company publications."
            },
            "details": <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">📖 Specialized Publishing Services</h1>

                {/* Introduction */}
                <p className="text-gray-700 mb-6">
                    Every book is unique, and some require **specialized publishing expertise**.
                    Whether it’s **children’s books, academic research, poetry, or multilingual publishing**,
                    our tailored solutions ensure **high-quality production and global reach**.
                    We help authors and organizations publish with precision, creativity, and professionalism.
                </p>

                {/* Section 1: Children's Book Publishing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🧸 Children’s Book Publishing</h2>
                <p className="text-gray-700 mb-4">
                    Writing for children requires a **unique storytelling approach** with engaging
                    visuals and age-appropriate content. Our team specializes in **illustrated books,
                    bedtime stories, and educational stories** that captivate young readers.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Choose Us for Children’s Books?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🎨 **Illustration & Artwork** – Custom, high-quality graphics for storytelling.</li>
                    <li>📚 **Kid-Friendly Formatting** – Easy-to-read layouts and font choices.</li>
                    <li>📖 **Print & Digital Options** – Hardcover, paperback, and eBook formats.</li>
                    <li>🌍 **Educational Alignment** – Content designed for early learning.</li>
                </ul>

                {/* Section 2: Academic & Research Publishing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📚 Academic & Research Publishing</h2>
                <p className="text-gray-700 mb-4">
                    We offer **professional publishing services** for researchers, universities,
                    and scholars looking to publish **textbooks, dissertations, and research papers**.
                    Our academic publishing ensures **credible, peer-reviewed, and globally recognized** work.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Academic Publishing Features:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📖 **ISBN & Citation Formatting** – Compliance with APA, MLA, IEEE, and other standards.</li>
                    <li>🏛️ **University & Journal Collaboration** – Publishing through recognized platforms.</li>
                    <li>🔬 **Peer-Reviewed Content** – Ensuring accuracy and credibility.</li>
                    <li>📢 **Global Accessibility** – Indexed for digital libraries and repositories.</li>
                </ul>

                {/* Section 3: Poetry & Short Story Collections */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">✍️ Poetry & Short Story Collections</h2>
                <p className="text-gray-700 mb-4">
                    Publishing poetry and short stories requires a **unique touch** to maintain
                    artistic integrity. We help authors **compile, format, and publish collections**
                    that highlight their creative voice while ensuring a **visually appealing** book.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Publish Poetry & Short Stories With Us?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📖 **Elegant Formatting** – Aesthetic layouts that complement poetry & prose.</li>
                    <li>🎭 **Creative Editing** – Preserving the author’s unique style & voice.</li>
                    <li>📦 **Print & Digital Formats** – Self-publishing options with royalty benefits.</li>
                    <li>🎨 **Artwork & Cover Design** – Custom covers that reflect your theme.</li>
                </ul>

                {/* Section 4: Translation & Multilingual Publishing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌍 Translation & Multilingual Publishing</h2>
                <p className="text-gray-700 mb-4">
                    Expand your book’s reach by **translating it into multiple languages**.
                    Our expert linguists ensure **accurate, culturally appropriate translations**
                    that maintain the essence of the original text.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Translation Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>🗣️ **Professional Translations** – Expert linguists for accuracy.</li>
                    <li>📚 **Multiple Languages** – French, Spanish, German, Hindi, and more.</li>
                    <li>📖 **Cultural Adaptation** – Ensuring relevance to target readers.</li>
                    <li>🌍 **Global Distribution** – Selling translated books worldwide.</li>
                </ul>

                {/* Section 5: Educational Publishing */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏫 Educational Publishing</h2>
                <p className="text-gray-700 mb-4">
                    We specialize in **school textbooks, study guides, and academic materials**
                    designed for **students, teachers, and institutions**. Our educational publishing
                    meets curriculum standards and provides **engaging, well-structured content**.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Educational Publishing Covers:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📘 **Textbooks & Workbooks** – Structured educational content.</li>
                    <li>📝 **Curriculum-Aligned Materials** – Compliant with educational boards.</li>
                    <li>🎨 **Interactive Design** – Engaging formats for better learning.</li>
                    <li>📡 **E-Learning Integration** – Digital versions for online education.</li>
                </ul>

                {/* Who Can Benefit? */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Who Needs Specialized Publishing?</h2>
                <p className="text-gray-700 mb-4">
                    Our **Specialized Publishing Services** are ideal for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>📖 **Children’s Book Authors** – Those creating illustrated storybooks.</li>
                    <li>🎓 **Researchers & Academics** – Publishing educational and scholarly content.</li>
                    <li>📝 **Poets & Short Story Writers** – Writers looking to compile collections.</li>
                    <li>🌍 **International Authors** – Translating books for a global audience.</li>
                    <li>🏫 **Educational Institutions** – Schools and universities publishing study material.</li>
                </ul>

                {/* Call to Action */}
                <div className="mt-6 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Publish Your Specialized Book 📚
                    </a>
                </div>
            </div>

        }
    ]

    return (
        <section className="px-[10%] py-[2.5%] my-[2.5%] max-[650px]:px-3">
            <div className="grid grid-cols-3 gap-x-8 gap-y-10 max-[1000px]:grid-cols-2 max-[500px]:grid-cols-1">
                {services.map((service, index) => (
                    <ServiceCard key={index} serivce={service} />
                ))}
            </div>
        </section>
    )
}

export function ServiceCard({ serivce }) {
    return (
        <div className="border rounded-md px-4 py-6 flex flex-col justify-between hover:shadow-xl">
            <div>
                <Image src={serivce.image} alt={serivce.heading} width={0} height={0} sizes="100vw" className="w-full aspect-3/2 object-cover" />
                <div className="heading mt-4 text-lg font-medium leading-[170%] text-[var(--blue-color)]">
                    {serivce.heading}
                </div>
                <div className="mt-2 text-base text-[#333] font-medium leading-[170%] flex flex-col justify-between">
                    {/* {serivce.description} */}
                    <div>
                        {Object.keys(serivce.description).map((value, index) => (
                            <div key={index} className="my-1 flex flex-col">
                                <span className="font-bold text-gray-700">{value}:</span>
                                <p className="mt-1 text-gray-500">{serivce.description[value]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Drawer>
                <DrawerTrigger className="w-full cursor-pointer transition-all mt-4 border border-[var(--blue-color)] rounded-md flex items-center justify-center py-2 text-[var(--blue-color)] hover:bg-[var(--blue-color)] hover:text-white" >View Details</DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{serivce.title}</DrawerTitle>
                        {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                    </DrawerHeader>
                    {/* <DrawerDescription> */}
                        <main className={"w-full h-[80vh] overflow-y-scroll"} style={{ willChange: "transform" }} >
                        {serivce.details}
                        </main>
                    {/* </DrawerDescription> */}
                    <DrawerFooter>
                        <DrawerClose>
                            <div className="cursor-pointer border rounded-md py-1 px-2 hover:bg-gray-100">
                                Close
                            </div>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}