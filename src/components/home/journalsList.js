"use client";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  MapPin,
  Sparkles,
  LibraryBig,
  Send,
  MessageCircle,
  Layers3,
  Globe2,
  CalendarDays,
  Clock3,
  Languages,
  UserRound,
  Building2,
  BookMarked,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

// export const journalCategories = [
//   {
//     slug: "environment-science-technology",
//     title: "Environment Science & Technology",
//   },
//   { slug: "management", title: "Management Journals" },
//   { slug: "medical", title: "Medical Journals" },
//   { slug: "nursing", title: "Nursing Journals" },
//   { slug: "pharmacy", title: "Pharmacy Journals" },
//   { slug: "science", title: "Science Journals" },
//   { slug: "social-science", title: "Social Science Journals" },
//   { slug: "technology", title: "Technology Journals" },
// ];

// export const journals = [
//   {
//     slug: "international-journal-agriculture-environment-sustainability",
//     title: "International Journal of Agriculture, Environment and Sustainability",
//     category: "environment-science-technology",
//     publisher: "Advanced Research Publications",
//     frequency: "Biannual",
//     publishingSince: "2019",
//     origin: "India",
//     language: "English",
//     website: "https://www.advancedresearchpublications.com",
//     address: "Unit No. 826, Tower A, Anthurium Sector 73, Noida, Pin Code - 201307, India.",
//     editor: "Dr. Bishnu Prasad Mishra",
//     affiliation: "Prof. and Director (R&D), Department of Mechanical Engineering (Dairy Engg, Food Engg, Production Engg), GITA Autonomous College, Bhubaneswar, Odisha, India.",
//     aim: "The journal aims at creating a platform for agricultural engineers, teachers, professionals, and organisations seeking innovative knowledge, developments, latest trends and solutions to current and upcoming challenges in agriculture keeping in view environmental issues and sustainability by sharing and discussing stimulating, latest and innovative articles focusing on high-quality research.",
//     scope: "The scope of the journal covers research articles, review articles, methodology articles, short communications, case study / case reports, research reports, monographs, special issues, editorials research articles, reviews, short communications and scientific commentaries in all the areas of agriculture science and technology.",
//     indexing: "ISA, DRJI, ESJI, Jour informatics, SIS, BASE, IFSJ, JSTOR, Infobase index, OAJI.",
//   },
//   {
//     slug: "journal-advanced-research-agriculture-science-technology",
//     title: "Journal of Advanced Research in Agriculture Science and Technology",
//     category: "environment-science-technology",
//     publisher: "Advanced Research Publications",
//     frequency: "Biannual",
//     publishingSince: "2020",
//     origin: "India",
//     language: "English",
//     website: "https://www.advancedresearchpublications.com",
//     address: "Noida, India.",
//     editor: "Editorial Board",
//     affiliation: "Advanced Research Publications.",
//     aim: "A platform for researchers and practitioners to share original work in agriculture science and technology.",
//     scope:
//       "Research articles, reviews, case studies and technical communications related to agriculture and allied sciences.",
//     indexing: "Directory and academic indexing services.",
//   },
// ];

// export function JournalSidebar({ activeCategory }) {
//   return (
//     <aside className="w-[295px] shrink-0 max-[900px]:w-full">
//       <div
//         className="
//           sticky top-24 overflow-hidden
//           rounded-[22px]
//           border border-[#012D68]/10
//           bg-white
//           shadow-[0_20px_60px_rgba(1,45,104,0.09)]
//           max-[900px]:static
//         "
//       >
//         {/* Sidebar heading */}
//         <div
//           className="
//             relative overflow-hidden
//             bg-[linear-gradient(135deg,#012D68_0%,#02204E_100%)]
//             px-5 py-6 text-white
//           "
//         >
//           {/* decorative gold glow */}
//           <div
//             className="
//               pointer-events-none
//               absolute -right-8 -top-8
//               h-28 w-28 rounded-full
//               bg-[#D69B23]/25 blur-2xl
//             "
//           />

//           <div className="relative z-10">
//             <div
//               className="
//                 mb-3 inline-flex h-10 w-10
//                 items-center justify-center
//                 rounded-xl
//                 bg-white/10
//                 ring-1 ring-white/15
//               "
//             >
//               <LibraryBig className="size-5 text-[#F7C23F]" />
//             </div>

//             <h3 className="text-lg font-semibold">
//               Explore by Subject
//             </h3>

//             <p className="mt-1 text-xs leading-5 text-white/65">
//               Browse IARA journals across academic disciplines.
//             </p>
//           </div>
//         </div>

//         {/* Categories */}
//         <nav
//           aria-label="IARA journal categories"
//           className="flex flex-col gap-2 p-3"
//         >
//           <Link
//             href="/journals"
//             className={`
//               group flex items-center justify-between
//               rounded-xl border px-4 py-3
//               text-sm font-medium
//               transition-all duration-300
//               ${
//                 !activeCategory
//                   ? "border-[#D69B23]/35 bg-[#D69B23]/10 text-[#012D68]"
//                   : "border-transparent text-slate-600 hover:border-[#012D68]/10 hover:bg-[#012D68]/[0.04] hover:text-[#012D68]"
//               }
//             `}
//           >
//             <span className="flex items-center gap-3">
//               <Layers3
//                 className={`size-4 ${
//                   !activeCategory
//                     ? "text-[#D69B23]"
//                     : "text-slate-400 group-hover:text-[#D69B23]"
//                 }`}
//               />
//               All Journals
//             </span>

//             <ChevronRight
//               className="
//                 size-4 opacity-40
//                 transition-all duration-300
//                 group-hover:translate-x-1
//                 group-hover:text-[#D69B23]
//                 group-hover:opacity-100
//               "
//             />
//           </Link>

//           {journalCategories.map((category) => {
//             const active = activeCategory === category.slug;

//             return (
//               <Link
//                 key={category.slug}
//                 href={`/journals?category=${category.slug}`}
//                 className={`
//                   group relative flex items-center
//                   justify-between overflow-hidden
//                   rounded-xl border px-4 py-3
//                   text-sm font-medium
//                   transition-all duration-300
//                   hover:translate-x-1
//                   ${
//                     active
//                       ? "border-[#D69B23]/35 bg-[#D69B23]/10 text-[#012D68]"
//                       : "border-transparent text-slate-600 hover:border-[#012D68]/10 hover:bg-[#012D68]/[0.04] hover:text-[#012D68]"
//                   }
//                 `}
//               >
//                 {active && (
//                   <span
//                     className="
//                       absolute bottom-2 left-0 top-2
//                       w-[3px] rounded-r-full
//                       bg-[#D69B23]
//                     "
//                   />
//                 )}

//                 <span>{category.title}</span>

//                 <ArrowRight
//                   className={`
//                     size-4 transition-all duration-300
//                     ${
//                       active
//                         ? "text-[#D69B23]"
//                         : "translate-x-2 text-[#D69B23] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
//                     }
//                   `}
//                 />
//               </Link>
//             );
//           })}
//         </nav>
//       </div>
//     </aside>
//   );
// }

// export function JournalSlider() {
//   return (
//     <aside className="w-full max-w-[340px] animate-[journalEnter_700ms_ease-out] max-[900px]:max-w-[360px] max-[600px]:max-w-full">
//       <div className="overflow-hidden rounded-2xl border border-white/30 bg-slate-950/45 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-md">
//         <div className="border-b border-white/20 bg-[#F5A623]/95 px-5 py-5 text-center text-xl font-semibold text-white">
//           Explore Our Journals
//         </div>
//         <div className="flex flex-col gap-3 p-4">
//           {journalCategories.map((category, index) => (
//             <Link
//               key={category.slug}
//               href={`/journals?category=${category.slug}`}
//               className="group flex items-center justify-between rounded-lg border border-[#b5eafa] bg-[#f3fcff] px-4 py-3.5 text-base font-medium text-[#155e75] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00AFF0] hover:bg-[#e8f8fe] hover:text-[#00AFF0] hover:shadow-[0_8px_18px_rgba(0,175,240,0.16)]"
//               style={{ animationDelay: `${index * 70}ms` }}
//             >
//               <span>{category.title}</span>
//               <ArrowRight className="size-4 shrink-0 text-[#00AFF0] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// }

export function JournalShell({ children }) {
  return (
   <section
  className="
    relative overflow-hidden
    bg-[#F7F9FC]
    px-[6%] pt-6 pb-6
    max-[1200px]:px-[4%]
    max-[900px]:px-5
    max-[600px]:px-4
    max-[600px]:pb-10
   gap-3 px-4 py-2.5
max-[400px]:px-3
  "
>
  {/* Background decoration */}
  <div
    className="
      pointer-events-none absolute
      -right-40 -top-40
      h-[420px] w-[420px]
      rounded-full
      bg-[#012D68]/[0.05]
      blur-3xl
    "
  />

  <div
    className="
      pointer-events-none absolute
      -bottom-44 -left-32
      h-[380px] w-[380px]
      rounded-full
      bg-[#D69B23]/[0.08]
      blur-3xl
    "
  />

  <div className="relative z-10 mx-auto max-w-7xl">
    {children}
  </div>
</section>
  );
}

export function JournalDirectory({ category }) {
  const [journalCategories, setJournalCategories] = useState([]);
  const [journals, setJournals] = useState([]);

  const fetchJournalCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/journals/categories`,
      );
      if (response) {
        setJournalCategories(response.data);
      } else toast(response.message);
    } catch (err) {
      console.log(err);
      toast("Failed to load categories");
    }
  };

  const fetchJournals = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/journals/`,
      );
      if (response) {
        setJournals(response.data);
      } else toast(response.message);
    } catch (err) {
      console.log(err);
      toast("Failed to load journals");
    }
  };

  useEffect(() => {
    fetchJournalCategories();
    fetchJournals();
  }, []);

  const selectedCategory = journalCategories.find((item) => item === category);

  const visibleJournals =
    category ?
      journals.filter((journal) => journal.category === category)
    : journals;

  return (
    <JournalShell activeCategory={category}>
    {/* Hero heading */}
<div
  className="
    journal-enter relative
    mb-9 overflow-hidden
    rounded-[26px]
    border border-[#012D68]/10
    bg-white
    px-8 py-9
    shadow-[0_20px_60px_rgba(1,45,104,0.07)]
    max-[900px]:px-6
    max-[900px]:py-8
    max-[600px]:px-5
    max-[600px]:py-7
    max-[400px]:px-4
    max-[400px]:py-6
  "
>
  {/* decorative circle */}
  <div
    className="
      pointer-events-none
      absolute -right-16 -top-16
      h-48 w-48 rounded-full
      bg-[#D69B23]/10
      blur-2xl
      max-[480px]:-right-20
      max-[480px]:-top-20
    "
  />

  <div
    className="
      pointer-events-none
      absolute bottom-0 right-8
      h-[2px] w-32
      bg-gradient-to-r
      from-transparent via-[#D69B23] to-transparent
      max-[480px]:right-5
      max-[480px]:w-24
    "
  />

  <div className="relative z-10 min-w-0">
    <div
      className="
        mb-4 inline-flex items-center gap-2
        rounded-full
        border border-[#D69B23]/25
        bg-[#D69B23]/10
        px-3 py-1.5
        text-xs font-semibold uppercase
        tracking-[0.18em]
        text-[#B57A12]
        max-[480px]:text-[10px]
        max-[480px]:tracking-[0.14em]
      "
    >
      <Sparkles className="size-3.5 shrink-0" />
      IARA Publications
    </div>

    <h1
      className="
        max-w-3xl
        font-[Fraunces]
        text-[clamp(2.3rem,4vw,3.8rem)]
        font-semibold
        leading-[1.05]
        tracking-[-0.025em]
        text-[#012D68]
        max-[600px]:text-[clamp(2rem,9vw,3rem)]
        max-[400px]:text-[clamp(1.8rem,9vw,2.5rem)]
      "
    >
      {selectedCategory ?
        selectedCategory.title
      : <>
          Explore Our{" "}
          <span
            className="
              relative inline-block
              italic text-[#D69B23]
            "
          >
            Journals
            <span
              className="
                absolute -bottom-1 left-[5%]
                h-[3px] w-[90%]
                rounded-full
                bg-[#D69B23]/55
              "
            />
          </span>
        </>
      }
    </h1>

    <p
      className="
        mt-5 max-w-2xl
        text-[0.98rem]
        leading-7 text-slate-500
        max-[600px]:text-sm
        max-[600px]:leading-6
      "
    >
      Discover quality academic journals, explore research disciplines,
      and find the right publication platform for your scholarly work.
    </p>

    {/* mini stats */}
    <div
      className="
        mt-6 flex flex-wrap items-center gap-3
        max-[480px]:gap-2
      "
    >
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-[#012D68]/[0.05]
          px-3.5 py-2
          text-xs font-medium text-[#012D68]
          max-[480px]:px-3
          max-[480px]:text-[11px]
        "
      >
        <BookOpen className="size-4 shrink-0 text-[#D69B23]" />
        {visibleJournals.length} Journals
      </div>

      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-[#012D68]/[0.05]
          px-3.5 py-2
          text-xs font-medium text-[#012D68]
          max-[480px]:px-3
          max-[480px]:text-[11px]
        "
      >
        <Layers3 className="size-4 shrink-0 text-[#D69B23]" />
        {journalCategories.length} Disciplines
      </div>

      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-[#012D68]/[0.05]
          px-3.5 py-2
          text-xs font-medium text-[#012D68]
          max-[480px]:px-3
          max-[480px]:text-[11px]
        "
      >
        <Globe2 className="size-4 shrink-0 text-[#D69B23]" />
        Global Research
      </div>
    </div>
  </div>
</div>

{/* Journals */}
<div className="grid gap-5">
  {visibleJournals.map((journal, index) => (
    <JournalCard key={journal.slug} journal={journal} index={index} />
  ))}

  {visibleJournals.length === 0 && (
    <div
      className="
        rounded-2xl border
        border-dashed border-[#012D68]/20
        bg-white px-6 py-12
        text-center
        max-[480px]:px-4
        max-[480px]:py-10
      "
    >
      <BookOpen className="mx-auto size-8 text-[#D69B23]" />

      <h3 className="mt-4 text-lg font-semibold text-[#012D68]">
        Journals coming soon
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Journals for this discipline will appear here.
      </p>
    </div>
  )}
</div>
    </JournalShell>
  );
}

function JournalCard({ journal, index }) {
  return (
   <Link
  href={`/journals/${journal.slug}`}
  className="
    journal-card journal-enter
    group relative block
    overflow-hidden
    rounded-[20px]
    border border-[#012D68]/10
    bg-white
    p-6
    shadow-[0_12px_35px_rgba(1,45,104,0.06)]
    transition-all
    duration-500
    hover:-translate-y-1.5
    hover:border-[#D69B23]/45
    hover:shadow-[0_24px_55px_rgba(1,45,104,0.13)]

    max-[900px]:p-5
    max-[600px]:p-5
    max-[480px]:p-4
  "
  style={{
    animationDelay: `${index * 90}ms`,
  }}
>
  {/* Gold top line */}
  <span
    className="
      absolute left-0 top-0
      h-[3px] w-0
      bg-gradient-to-r
      from-[#D69B23] to-[#F7C23F]
      transition-all duration-500
      group-hover:w-full
    "
  />

  {/* Background hover glow */}
  <div
    className="
      pointer-events-none
      absolute -right-16 -top-16
      h-36 w-36
      rounded-full
      bg-[#D69B23]/0
      blur-2xl
      transition-all duration-500
      group-hover:bg-[#D69B23]/10
    "
  />

  <div
    className="
      relative z-10
      flex items-start
      justify-between gap-6
      max-[600px]:gap-4
      max-[480px]:gap-3
    "
  >
    <div className="min-w-0 flex-1">
      {/* Category tag */}
      <div
        className="
          mb-4 inline-flex
          items-center gap-2
          rounded-full
          bg-[#012D68]/[0.055]
          px-3 py-1.5
          text-[0.68rem]
          font-semibold uppercase
          tracking-[0.14em]
          text-[#012D68]
          transition-all duration-300
          group-hover:bg-[#D69B23]/10
          max-[480px]:px-2.5
          max-[480px]:py-1
          max-[480px]:text-[0.6rem]
        "
      >
        <BookMarked className="size-3.5 shrink-0 text-[#D69B23]" />
        Journal Publication
      </div>

      {/* Title */}
      <h2
        className="
          max-w-3xl
          text-xl font-semibold
          leading-[1.45]
          text-[#012D68]
          transition-colors
          duration-300
          group-hover:text-[#D69B23]
          max-[600px]:text-lg
          max-[480px]:text-base
        "
      >
        {journal.title}
      </h2>

      {/* Details */}
      <div
        className="
          mt-5 flex flex-wrap
          items-center gap-x-5
          gap-y-2
          text-xs text-slate-500
          max-[480px]:mt-4
          max-[480px]:gap-x-3
          max-[480px]:gap-y-1.5
          max-[480px]:text-[11px]
        "
      >
        <span className="flex items-center gap-1.5">
          <Building2 className="size-3.5 shrink-0 text-[#D69B23]" />
          {journal.publisher}
        </span>

        <span className="flex items-center gap-1.5">
          <Clock3 className="size-3.5 shrink-0 text-[#D69B23]" />
          {journal.frequency}
        </span>

        <span className="flex items-center gap-1.5">
          <MapPin className="size-3.5 shrink-0 text-[#D69B23]" />
          {journal.origin}
        </span>
      </div>
    </div>

    {/* Arrow */}
    <div
      className="
        flex h-11 w-11 shrink-0
        items-center justify-center
        rounded-full
        border border-[#012D68]/10
        bg-[#012D68]/[0.04]
        text-[#012D68]
        transition-all duration-300
        group-hover:rotate-[-8deg]
        group-hover:border-[#D69B23]
        group-hover:bg-[#D69B23]
        group-hover:text-white
        max-[480px]:h-10
        max-[480px]:w-10
      "
    >
      <ArrowRight
        className="
          size-[18px]
          transition-transform duration-300
          group-hover:translate-x-0.5
          max-[480px]:size-4
        "
      />
    </div>
  </div>
</Link>
  );
}

export function JournalDetail({ journal }) {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  return (
    <article
      className="
      journal-enter overflow-hidden
    rounded-[24px]
    border border-[#012D68]/10
    bg-white
    shadow-[0_22px_65px_rgba(1,45,104,0.08)]
    max-[600px]:rounded-[20px]
        "
    >
      {/* Main heading */}
      <div
        className="
             relative overflow-hidden
    border-b border-[#012D68]/10
    px-7 py-6
    max-[600px]:px-5
    max-[600px]:py-5
          "
      >
        <div
          className="
              pointer-events-none
              absolute -right-16 -top-20
              h-52 w-52 rounded-full
              bg-[#D69B23]/10
              blur-3xl
            "
        />

        <div
          className="
               relative z-10
  grid
  grid-cols-[minmax(0,1fr)_240px]
  items-start
  gap-7
  max-[900px]:grid-cols-1
  max-[900px]:gap-5
            "
        >
          {/* LEFT COLUMN */}
          <div className="min-w-0 pt-0">
            {/* Label */}
            <p
              className="
                  mb-3 flex items-center
                  gap-2 text-xs font-semibold
                  uppercase tracking-[0.17em]
                  text-[#D69B23]
                "
            >
              <BookOpen className="size-4" />
              Journal Details
            </p>

            {/* Journal Title */}
            <h4
              className="
                   max-w-4xl
  font-[Fraunces]
  text-4xl font-semibold
  leading-[1.18]
  tracking-[-0.02em]
  text-[#012D68]
  max-[900px]:text-3xl
  max-[600px]:text-3xl
  max-[400px]:text-2xl
                "
            >
              {journal.title}
            </h4>

            {/* Basic Journal Information */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {/* JOURNAL STATUS */}
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                  journal.active ? "text-[#168A45]" : "text-red-600"
                }`}
              >
                <span
                  className={`size-2 rounded-full ${
                    journal.active ? "bg-[#31B461]" : "bg-red-500"
                  }`}
                />

                {journal.active ? "Active" : "Discontinued"}
              </span>

              {/* LANGUAGE */}
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <Languages className="size-4 text-[#D69B23]" />
                {journal.language}
              </span>

              {/* PUBLISHING SINCE */}
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays className="size-4 text-[#D69B23]" />
                Since {journal.publishing_since}
              </span>
            </div>

            {/* INDEXING LOGOS */}
            {journal.indexings?.length > 0 && (
              <div className="mt-5">
                <p
                  className="
                      mb-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#D69B23]
                    "
                >
                  Indexed In
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {journal.indexings.map((indexing) => (
                    <div
                      key={indexing.id}
                      title={indexing.name}
                      className="flex items-center justify-center"
                    >
                      {indexing.cover ?
                        <Image
                          src={indexing.cover}
                          alt={indexing.name}
                          width={100}
                          height={50}
                          className="h-12 w-auto object-contain"
                        />
                      : <span className="text-[11px] font-semibold text-[#012D68]">
                          {indexing.name}
                        </span>
                      }
                    </div>
                  ))}
                </div>
                {/* ACTION BUTTONS */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(true)}
                    className="
    inline-flex items-center gap-2
    rounded-lg
    bg-[#012D68]
    px-4 py-2.5
    text-sm font-semibold
    text-white
    shadow-sm
    transition-all duration-200
    hover:bg-[#011F49]
    hover:shadow-md
  "
                  >
                    <Send className="size-4" />
                    Submit Manuscript
                  </button>

                  {/* Talk With Us */}
                  <a
                    href="https://wa.me/918588011090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    inline-flex items-center gap-2
    rounded-lg
    bg-[#31b461]
    px-4 py-2.5
    text-sm font-semibold
    text-white
    shadow-sm
    transition-all duration-200
    hover:bg-[#1cdd66]
    hover:shadow-md
  "
                  >
                    <MessageCircle className="size-5" />
                    Talk With Us
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN — JOURNAL IMAGE */}
          {journal.image && (
            <div
              className="
                  relative
    mx-auto
    h-[330px]
    w-[240px]
    overflow-hidden
    rounded-2xl
    border border-[#012D68]/10
    bg-[#F7F9FC]
    max-[750px]:h-[300px]
    max-[750px]:w-[215px]
                "
            >
              <Image
                src={journal.image}
                alt={`${journal.title} cover`}
                fill
                sizes="230px"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-6 max-[600px]:p-4">
        {/* Bibliographic Information */}
        <section>
          <div
            className="
        overflow-hidden rounded-2xl
        border border-[#012D68]/10
      "
          >
            <dl>
              {/* ISSN */}
              <div
                className="
            grid grid-cols-[140px_1fr]
            gap-3 px-4 py-2.5
            text-sm
            bg-[#012D68]/[0.025]
            max-[650px]:grid-cols-1
            max-[650px]:gap-1
          "
              >
                <dt className="font-semibold text-[#012D68]">ISSN / E-ISSN</dt>

                <dd className="leading-5 text-slate-600">{journal.issn}</dd>
              </div>

              {/* Publisher */}
              <div
                className="
            grid grid-cols-[140px_1fr]
            gap-3 px-4 py-2.5
            text-sm
            bg-white
            max-[650px]:grid-cols-1
            max-[650px]:gap-1
          "
              >
                <dt className="font-semibold text-[#012D68]">Publisher</dt>

                <dd className="leading-5 text-slate-600">
                  {journal.publisher}
                </dd>
              </div>

              {/* Active */}
              <div
                className="
    grid grid-cols-[140px_1fr]
    gap-3 px-4 py-2.5
    text-sm
    bg-[#012D68]/[0.025]
    max-[650px]:grid-cols-1
    max-[650px]:gap-1
  "
              >
                <dt className="font-semibold text-[#012D68]">Status</dt>

                <dd>
                  {journal.active ?
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#31B461]/10 px-3 py-1 text-xs font-semibold text-[#168A45]">
                      <span className="flex size-4 items-center justify-center rounded-full bg-[#31B461] text-[10px] text-white">
                        ✓
                      </span>
                      Currently Active
                    </span>
                  : <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                      <span className="flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        ×
                      </span>
                      Discontinued
                    </span>
                  }
                </dd>
              </div>

              {/* Language */}
              <div
                className="
            grid grid-cols-[140px_1fr]
            gap-3 px-4 py-2.5
            text-sm
            bg-white
            max-[650px]:grid-cols-1
            max-[650px]:gap-1
          "
              >
                <dt className="font-semibold text-[#012D68]">Language</dt>

                <dd className="leading-5 text-slate-600">{journal.language}</dd>
              </div>

              {/* Indexing Link */}
              {journal.indexing_link && (
                <div
                  className="
      grid grid-cols-[140px_1fr]
      gap-3 px-4 py-2.5
      text-sm
      bg-[#012D68]/[0.025]
      max-[650px]:grid-cols-1
      max-[650px]:gap-1
    "
                >
                  <dt className="font-semibold text-[#012D68]">
                    Indexing Link
                  </dt>

                  <dd>
                    <a
                      href={journal.indexing_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
          inline-flex items-center
          gap-1.5
          font-medium
          text-[#D69B23]
          transition-colors
          hover:text-[#012D68]
          hover:underline
        "
                    >
                      View Indexing Link
                      <ExternalLink className="size-3.5" />
                    </a>
                  </dd>
                </div>
              )}

              {/* Aim & Scope */}
              <div
                className="
            grid grid-cols-[140px_1fr]
            gap-3 px-4 py-3
            text-sm
            bg-white
            max-[650px]:grid-cols-1
            max-[650px]:gap-1.5
          "
              >
                <dt className="font-semibold text-[#012D68]">Aim & Scope</dt>

                <dd className="leading-6 text-slate-600">
                  <div className="space-y-2">
                    {/* Aim */}
                    <p className="text-justify">
                      <b className="font-semibold text-slate-700">Aim:</b>{" "}
                      {journal.aim}
                    </p>

                    {/* Scope */}
                    <p className="text-justify">
                      <b className="font-semibold text-slate-700">Scope:</b>{" "}
                      {journal.scope}
                    </p>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      {/* SUBMIT MANUSCRIPT MODAL */}

      {isSubmitModalOpen && (
        <div
          className="
     fixed inset-0 z-[9999]
flex items-center justify-center
bg-slate-950/55
px-4
backdrop-blur-[2px]
    "
          onClick={() => {
            setIsSubmitModalOpen(false);
            setIsSubmitted(false);
          }}
        >
          <div
            className="
         relative
  w-full max-w-xl
  rounded-2xl
  bg-white
  px-6 py-5
  shadow-[0_25px_70px_rgba(0,0,0,0.20)]
  max-[600px]:px-4
  max-[600px]:py-5
      "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => {
                setIsSubmitModalOpen(false);
                setIsSubmitted(false);
              }}
              aria-label="Close"
              className="
          absolute right-4 top-4
          flex size-8 items-center justify-center
          rounded-full
          text-slate-400
          transition
          hover:bg-slate-100
          hover:text-[#012D68]
        "
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {/* SUCCESS STATE */}
            {isSubmitted ?
              <div
                className="
            flex min-h-[270px]
            flex-col items-center justify-center
            text-center
          "
              >
                {/* SUCCESS ICON */}
                <div
                  className="
              mb-4
              flex size-16
              items-center justify-center
              rounded-full
              bg-[#31B461]/10
            "
                >
                  <div
                    className="
                flex size-11
                items-center justify-center
                rounded-full
                bg-[#31B461]
                text-white
                shadow-sm
              "
                  >
                    <span className="text-xl font-bold">✓</span>
                  </div>
                </div>

                {/* SUCCESS HEADING */}
                <h2 className="text-xl font-bold tracking-tight">
                  <span className="text-[#012D68]">Manuscript</span>{" "}
                  <span className="text-[#D69B23]">Submitted</span>
                </h2>

                {/* SUCCESS MESSAGE */}
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Thank you for your submission.
                </p>

                {/* SMALL STATUS */}
                <div className="mt-4 text-xs font-medium text-[#31B461]">
                  Submission received successfully
                </div>
              </div>
            : /* FORM STATE */
              <>
                {/* HEADER */}
                <div className="mb-5 text-center">
                  <h2 className="text-xl font-bold tracking-tight">
                    <span className="text-[#012D68]">Submit</span>{" "}
                    <span className="text-[#D69B23]">Manuscript</span>
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Submit your manuscript for consideration.
                  </p>
                </div>

                {/* FORM */}
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    setSubmitError("");

                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    const data = {
                      message: journal.title,
                      name: formData.get("name"),
                      email: formData.get("email"),
                      phone_number: formData.get("phone_number"),
                    };

                    try {
                      const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/forms/contact/addcontactquery`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(data),
                        },
                      );

                      const result = await response.json();

                      console.log("Backend response:", result);

                      if (!response.ok || !result.success) {
                        throw new Error(
                          result?.message || "Unable to submit the form.",
                        );
                      }

                      // Success
                      setIsSubmitted(true);

                      // Clear form
                      form.reset();
                    } catch (error) {
                      console.error("Submission error:", error);

                      setSubmitError(
                        error.message ||
                          "Something went wrong. Please try again.",
                      );
                    }
                  }}
                  className="  grid grid-cols-2 gap-x-3 gap-y-3.5
  max-[600px]:grid-cols-1"
                >
                  {/* JOURNAL → BACKEND MESSAGE */}
                  <input
                    type="hidden"
                    name="message"
                    value={journal.title}
                    readOnly
                  />

                  {/* NAME */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="
        h-10 w-full
        rounded-lg
        border border-slate-200
        bg-white
        px-3
        text-sm text-slate-700
        placeholder:text-slate-400
        outline-none
        transition
        focus:border-[#012D68]
        focus:ring-2
        focus:ring-[#012D68]/10
      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="
        h-10 w-full
        rounded-lg
        border border-slate-200
        bg-white
        px-3
        text-sm text-slate-700
        placeholder:text-slate-400
        outline-none
        transition
        focus:border-[#012D68]
        focus:ring-2
        focus:ring-[#012D68]/10
      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone_number"
                      required
                      placeholder="Enter phone number"
                      className="
        h-10 w-full
        rounded-lg
        border border-slate-200
        bg-white
        px-3
        text-sm text-slate-700
        placeholder:text-slate-400
        outline-none
        transition
        focus:border-[#012D68]
        focus:ring-2
        focus:ring-[#012D68]/10
      "
                    />
                  </div>

                  {/* MANUSCRIPT */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Manuscript
                      <span className="ml-1 font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>

                    <div
                      className="
        flex h-10
        items-center
        rounded-lg
        border border-slate-200
        bg-slate-50
        px-2
        transition
        hover:border-[#012D68]/30
      "
                    >
                      <input
                        type="file"
                        name="manuscript"
                        accept=".pdf,.doc,.docx"
                        className="
          w-full
          cursor-pointer
          text-xs
          text-slate-500
          file:mr-2
          file:rounded-md
          file:border-0
          file:bg-[#012D68]
          file:px-2.5
          file:py-1
          file:text-xs
          file:font-medium
          file:text-white
          hover:file:bg-[#011F49]
        "
                      />
                    </div>

                    <p className="mt-1 text-[10px] text-slate-400">
                      PDF, DOC or DOCX
                    </p>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="
        h-10 w-full
        rounded-lg
        bg-[#012D68]
        px-4
        text-sm font-semibold
        text-white
        shadow-sm
        transition-all duration-200
        hover:bg-[#011F49]
        hover:shadow-md
        active:scale-[0.98]
      "
                    >
                      Submit Manuscript
                    </button>
                  </div>
                </form>

                {submitError && (
                  <p className="mt-3 text-center text-xs font-medium text-red-500">
                    {submitError}
                  </p>
                )}
              </>
            }
          </div>
        </div>
      )}
    </article>
  );
}
