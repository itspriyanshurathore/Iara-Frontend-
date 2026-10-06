"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import {
  ArrowRight,
  Hash,
  Building2,
  ChevronRight,
  Search,
  SlidersHorizontal,
  BookOpen,
  Database,
  X,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

// export const journals = associatedJournals;

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

export function JournalFilterSidebar({
  subjectFilter = "all",
  setSubjectFilter,
  indexFilter = "all",
  setIndexFilter,
  clearFilters,
  navigationMode = false,
}) {
  // const indexingOptions = [
  //   "Scopus",
  //   "Web of Science",
  //   "Embase",
  //   "ABDC",
  //   "Other",
  // ];

  const [indexingOptions, setIndexingOptions] = useState([]);
  const [journalCategories, setJournalCategories] = useState([]);

  const fetchJournalCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/journals/associated-journals/categories`,
      );
      if (response) {
        setJournalCategories(response.data);
      } else toast(response.message);
    } catch (err) {
      console.log(err);
      toast("Failed to load categories");
    }
  };

  const fetchIndexingOptions = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/journals/associated-journals/indexing`,
      );
      if (response) {
        setIndexingOptions(response.data);
      } else toast(response.message);
    } catch (err) {
      console.log(err);
      toast("Failed to load indexing");
    }
  };

  useEffect(() => {
    fetchJournalCategories();
    fetchIndexingOptions();
  }, []);

  return (
  <aside className="w-full min-w-0 lg:w-full">
  <div
    className="
      sticky top-24
      w-full min-w-0
      overflow-hidden
      rounded-[20px]
      border border-[#012D68]/10
      bg-white
      shadow-[0_16px_40px_rgba(1,45,104,0.06)]
      lg:sticky lg:top-24
    "
  >
    {/* HEADER */}
    <div
      className="
        flex items-center gap-3
        border-b border-[#012D68]/10
        px-5 py-4
        sm:px-5
        max-[480px]:px-4
      "
    >
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-xl
          bg-[#012D68]
        "
      >
        <SlidersHorizontal className="size-4 text-[#F7C23F]" />
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-bold text-[#012D68]">
          Filter Journals
        </h3>

        <p className="mt-0.5 text-[11px] text-slate-400">
          Refine your journal search
        </p>
      </div>
    </div>

    {/* DOMAIN */}
    <div className="border-b border-[#012D68]/10 p-4 max-[480px]:p-3.5">
      <p
        className="
          mb-3 px-2
          text-[10px] font-bold
          uppercase tracking-[0.18em]
          text-[#D69B23]
        "
      >
        Domain Based
      </p>

      {navigationMode ? (
        <Link
          href="/associated-journals"
          className={`
            mb-1 flex w-full min-w-0
            items-center justify-between gap-2
            rounded-xl px-3 py-2.5
            text-left text-sm
            transition-all
            ${
              subjectFilter === "all"
                ? "bg-[#012D68] text-white"
                : "text-slate-600 hover:bg-[#012D68]/[0.05] hover:text-[#012D68]"
            }
          `}
        >
          <span className="min-w-0 break-words">All Journals</span>
          <ChevronRight className="size-4 shrink-0" />
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => setSubjectFilter("all")}
          className={`
            mb-1 flex w-full min-w-0
            items-center justify-between gap-2
            rounded-xl px-3 py-2.5
            text-left text-sm
            transition-all
            ${
              subjectFilter === "all"
                ? "bg-[#012D68] text-white"
                : "text-slate-600 hover:bg-[#012D68]/[0.05] hover:text-[#012D68]"
            }
          `}
        >
          <span className="min-w-0 break-words">All Journals</span>
          <ChevronRight className="size-4 shrink-0" />
        </button>
      )}

      {journalCategories.map((subject) =>
        navigationMode ? (
          <Link
            key={subject.slug}
            href={`/associated-journals?category=${subject.slug}`}
            className={`
              capitalize
              mb-1 flex w-full min-w-0
              items-center justify-between gap-2
              rounded-xl px-3 py-2.5
              text-left text-[13px]
              transition-all
              ${
                subjectFilter === subject.slug
                  ? "bg-[#D69B23]/10 font-semibold text-[#012D68]"
                  : "text-slate-500 hover:bg-[#012D68]/[0.04] hover:text-[#012D68]"
              }
            `}
          >
            <span className="min-w-0 break-words">
              {subject.title}
            </span>

            <ChevronRight
              className={`
                size-3.5 shrink-0
                ${
                  subjectFilter === subject.slug
                    ? "text-[#D69B23]"
                    : "text-slate-300"
                }
              `}
            />
          </Link>
        ) : (
          <button
            key={subject.slug}
            type="button"
            onClick={() => setSubjectFilter(subject.slug)}
            className={`
              capitalize
              mb-1 flex w-full min-w-0
              items-center justify-between gap-2
              rounded-xl px-3 py-2.5
              text-left text-[13px]
              transition-all
              ${
                subjectFilter === subject.slug
                  ? "bg-[#D69B23]/10 font-semibold text-[#012D68]"
                  : "text-slate-500 hover:bg-[#012D68]/[0.04] hover:text-[#012D68]"
              }
            `}
          >
            <span className="min-w-0 break-words">
              {subject.title}
            </span>

            <ChevronRight
              className={`
                size-3.5 shrink-0
                ${
                  subjectFilter === subject.slug
                    ? "text-[#D69B23]"
                    : "text-slate-300"
                }
              `}
            />
          </button>
        )
      )}
    </div>

    {/* INDEXING */}
    <div className="p-4 max-[480px]:p-3.5">
      <p
        className="
          mb-3 px-2
          text-[10px] font-bold
          uppercase tracking-[0.18em]
          text-[#D69B23]
        "
      >
        Indexing Based
      </p>

      {navigationMode ? (
        <Link
          href="/associated-journals"
          className={`
            mb-1 flex w-full min-w-0
            items-center justify-between gap-2
            rounded-xl px-3 py-2.5
            text-sm
            ${
              indexFilter === "all"
                ? "bg-[#012D68] text-white"
                : "text-slate-500 hover:bg-[#012D68]/[0.05]"
            }
          `}
        >
          <span className="min-w-0 break-words">All Indexing</span>
          <Database className="size-4 shrink-0" />
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => setIndexFilter("all")}
          className={`
            mb-1 flex w-full min-w-0
            items-center justify-between gap-2
            rounded-xl px-3 py-2.5
            text-sm
            ${
              indexFilter === "all"
                ? "bg-[#012D68] text-white"
                : "text-slate-500 hover:bg-[#012D68]/[0.05]"
            }
          `}
        >
          <span className="min-w-0 break-words">All Indexing</span>
          <Database className="size-4 shrink-0" />
        </button>
      )}

      {indexingOptions.map((indexing) =>
        navigationMode ? (
          <Link
            key={indexing}
            href={`/associated-journals?indexing=${encodeURIComponent(indexing)}`}
            className={`
              mb-1 flex w-full min-w-0
              items-center justify-between gap-2
              rounded-xl px-3 py-2.5
              text-sm transition-all
              ${
                indexFilter === indexing
                  ? "bg-[#D69B23]/10 font-semibold text-[#012D68]"
                  : "text-slate-500 hover:bg-[#012D68]/[0.05]"
              }
            `}
          >
            <span className="min-w-0 break-words">
              {indexing}
            </span>

            <Database className="size-3.5 shrink-0 text-[#D69B23]" />
          </Link>
        ) : (
          <button
            key={indexing}
            type="button"
            onClick={() => setIndexFilter(indexing)}
            className={`
              mb-1 flex w-full min-w-0
              items-center justify-between gap-2
              rounded-xl px-3 py-2.5
              text-sm transition-all
              ${
                indexFilter === indexing
                  ? "bg-[#D69B23]/10 font-semibold text-[#012D68]"
                  : "text-slate-500 hover:bg-[#012D68]/[0.05]"
              }
            `}
          >
            <span className="min-w-0 break-words">
              {indexing}
            </span>

            <Database className="size-3.5 shrink-0 text-[#D69B23]" />
          </button>
        )
      )}
    </div>

    {/* CLEAR */}
    {!navigationMode && (
      <div className="border-t border-[#012D68]/10 p-4 max-[480px]:p-3.5">
        <button
          type="button"
          onClick={clearFilters}
          className="
            w-full rounded-xl
            border border-[#012D68]/10
            px-4 py-2.5
            text-xs font-semibold
            text-[#012D68]
            transition
            hover:border-[#D69B23]
            hover:text-[#D69B23]
          "
        >
          Clear all filters
        </button>
      </div>
    )}
  </div>
</aside>
  );
}

export function JournalShell({ children }) {
  return (
  <section
  className="
    relative overflow-hidden
    bg-[#F7F9FC]
    px-[3%] pt-0 pb-6
    max-[1200px]:px-[2.5%]
    max-[900px]:px-5
    max-[600px]:px-4
    max-[600px]:pb-10
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
      max-[600px]:h-[300px]
      max-[600px]:w-[300px]
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
      max-[600px]:h-[280px]
      max-[600px]:w-[280px]
    "
  />

  <div className="relative z-10 mx-auto w-full max-w-[1450px]">
    {children}
  </div>
</section>
  );
}

export function JournalDirectory({ category, indexing }) {
  const [search, setSearch] = useState("");
  const [journals, setJournals] = useState([]);

  const [subjectFilter, setSubjectFilter] = useState(category || "all");

  const [indexFilter, setIndexFilter] = useState(indexing || "all");

  const fetchJournals = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/journals/associated-journals/`,
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
    fetchJournals();
  }, []);

  const visibleJournals = useMemo(() => {
    const query = search.trim().toLowerCase();

    return journals
      .filter((journal) => {
        const subjectMatch =
          subjectFilter === "all" || journal.category?.slug === subjectFilter;

        const indexingMatch =
          indexFilter === "all" ||
          journal.indexings.filter((indexing) => indexing.name == indexFilter)
            .length;

        const searchMatch =
          !query ||
          journal.title?.toLowerCase().includes(query) ||
          journal.issn?.toLowerCase().includes(query) ||
          journal.publisher?.toLowerCase().includes(query) ||
          String(journal.publishing_since || "").includes(query) ||
          journal.indexings?.some((item) =>
            item.name?.toLowerCase().includes(query),
          );

        return subjectMatch && indexingMatch && searchMatch;
      })
      .sort(
        (a, b) =>
          Number(b.publishing_since || 0) - Number(a.publishing_since || 0),
      );
  }, [journals, search, subjectFilter, indexFilter]);

  function clearFilters() {
    setSearch("");
    setSubjectFilter("all");
    setIndexFilter("all");
  }

  return (
  <section
  className="
    relative bg-[#F7F9FC]
    px-[6%] py-16
    max-[1200px]:px-[4%]
    max-[900px]:px-5
    max-[600px]:px-4
    max-[600px]:py-12
    max-[400px]:px-3
  "
>
  <div className="mx-auto max-w-7xl">

    {/* =================================
        HEADER
    ================================= */}

    <div className="mb-7 text-center">
      <span
        className="
          mb-2 inline-block
          text-[11px] font-semibold
          uppercase
          tracking-[0.2em]
          text-[#D69B23]
        "
      >
        IARA PUBLICATION
      </span>

      <h1
        className="
          font-italic
          text-[clamp(2.2rem,5vw,4.8rem)]
          font-medium
          leading-none
          tracking-[-0.045em]
          text-[#012D68]
          max-[700px]:whitespace-normal
          max-[700px]:leading-[1.05]
          max-[480px]:text-[clamp(2rem,10vw,3rem)]
        "
      >
        Associated Journals{" "}
        <em className="font-normal text-[#D69B23]">with IARA.</em>
      </h1>

      <p
        className="
          mx-auto
          mt-3
          max-w-2xl
          text-[15px]
          leading-6
          text-slate-500
          max-[600px]:text-sm
          max-[600px]:leading-5
        "
      >
        Search and explore associated journals by subject area, ISSN,
        publisher and indexing database.
      </p>
    </div>

    {/* =================================
        SEARCH AREA
    ================================= */}

    <div
      className="
        mb-8
        rounded-[20px]
        border border-[#012D68]/10
        bg-white
        p-4
        shadow-[0_15px_40px_rgba(1,45,104,0.06)]
        max-[480px]:p-3
      "
    >
      <div
        className="
          flex items-center
          gap-3
          max-[700px]:flex-col
          max-[700px]:items-stretch
        "
      >
        <div
          className="
            flex h-13 min-w-0 flex-1
            items-center gap-3
            rounded-xl
            border border-[#012D68]/10
            bg-[#F7F9FC]
            px-4
            transition
            focus-within:border-[#D69B23]/50
            focus-within:bg-white
            max-[480px]:px-3
          "
        >
          <Search
            className="
              size-5 shrink-0
              text-[#D69B23]
            "
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by journal title, ISSN, subject area, publisher..."
            className="
              h-13 min-w-0 w-full
              bg-transparent
              text-sm
              text-[#012D68]
              outline-none
              placeholder:text-slate-400
              max-[480px]:text-[13px]
            "
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="shrink-0"
            >
              <X
                className="
                  size-4
                  text-slate-400
                  hover:text-[#012D68]
                "
              />
            </button>
          )}
        </div>

        <button
          type="button"
          className="
            inline-flex h-13 shrink-0
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#012D68]
            px-7
            text-sm
            font-semibold
            text-white
            transition-all
            hover:-translate-y-0.5
            hover:bg-[#D69B23]
            max-[700px]:w-full
          "
        >
          <Search className="size-4" />
          Search
        </button>
      </div>

      {/* quick search labels */}

      <div
        className="
          mt-4 flex
          flex-wrap
          items-center
          gap-2
          max-[480px]:gap-1.5
        "
      >
        <span
          className="
            mr-1 text-xs
            font-semibold
            text-slate-400
          "
        >
          Search by:
        </span>

        {[
          "Journal Name",
          "ISSN",
          "Year",
          "Subject Area",
          "Indexing",
          "Publisher",
        ].map((item) => (
          <span
            key={item}
            className="
              rounded-full
              bg-[#012D68]/[0.05]
              px-3 py-1.5
              text-[11px]
              font-medium
              text-[#012D68]
              max-[480px]:px-2.5
              max-[480px]:py-1
              max-[480px]:text-[10px]
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* =================================
        DIRECTORY LAYOUT
    ================================= */}

    <div
      className="
        grid
        grid-cols-[280px_minmax(0,1fr)]
        gap-7
        max-[1100px]:grid-cols-[250px_minmax(0,1fr)]
        max-[900px]:grid-cols-1
      "
    >
      {/* =================================
          LEFT FILTER
      ================================= */}

      <JournalFilterSidebar
        subjectFilter={subjectFilter}
        setSubjectFilter={setSubjectFilter}
        indexFilter={indexFilter}
        setIndexFilter={setIndexFilter}
        clearFilters={clearFilters}
      />

      {/* =================================
          RIGHT JOURNAL RESULTS
      ================================= */}

      <div className="min-w-0">

        {/* result top */}

        <div
          className="
            mb-4
            flex items-center
            justify-between
            gap-4
            max-[600px]:items-start
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-sm
                font-semibold
                text-[#012D68]
              "
            >
              {visibleJournals.length} Journals Found
            </p>

            <p
              className="
                mt-1
                text-xs
                text-slate-400
                max-[480px]:leading-5
              "
            >
              Select a journal to view complete publication details.
            </p>
          </div>
        </div>

        {/* journal cards */}

        <div className="grid gap-4">
          {visibleJournals.map((journal, index) => (
            <JournalCard
              key={journal.slug}
              journal={journal}
              index={index}
            />
          ))}

          {visibleJournals.length === 0 && (
            <div
              className="
                rounded-[20px]
                border
                border-dashed
                border-[#012D68]/20
                bg-white
                px-8 py-16
                text-center
                max-[600px]:px-5
                max-[600px]:py-12
              "
            >
              <BookOpen
                className="
                  mx-auto size-8
                  text-[#D69B23]
                "
              />

              <h3
                className="
                  mt-4
                  font-[Fraunces]
                  text-2xl
                  text-[#012D68]
                  max-[480px]:text-xl
                "
              >
                No journals found
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500
                  max-[480px]:leading-5
                "
              >
                Try another subject, ISSN or indexing filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export function JournalCard({ journal, index }) {
  return (
   <Link
  href={`/associated-journals/${journal.slug}`}
  className="
    group
    relative
    grid
    grid-cols-[135px_minmax(0,1fr)_auto]
    items-center
    gap-6
    overflow-hidden
    rounded-[20px]
    border
    border-[#012D68]/10
    bg-white
    p-4
    shadow-[0_10px_35px_rgba(1,45,104,0.05)]
    transition-all
    duration-400
    hover:-translate-y-1
    hover:border-[#D69B23]/40
    hover:shadow-[0_20px_50px_rgba(1,45,104,0.12)]

    max-[900px]:grid-cols-[120px_minmax(0,1fr)_auto]
    max-[900px]:gap-5

    max-[650px]:grid-cols-[95px_minmax(0,1fr)]
    max-[650px]:gap-4

    max-[480px]:grid-cols-[80px_minmax(0,1fr)]
    max-[480px]:gap-3
    max-[480px]:p-3

    max-[380px]:grid-cols-1
    max-[380px]:gap-4
  "
  style={{
    animationDelay: `${index * 70}ms`,
  }}
>
  {/* COVER */}

  <div
    className="
      relative
      h-[165px]
      overflow-hidden
      rounded-xl
      border
      border-[#012D68]/10
      bg-[#F7F9FC]

      max-[900px]:h-[150px]

      max-[650px]:h-[145px]

      max-[480px]:h-[125px]

      max-[380px]:h-[190px]
      max-[380px]:w-full
    "
  >
    <Image
      src={journal.image || "/images/journals/default-journal.jpg"}
      alt={journal.title}
      fill
      className="
        object-cover
        transition-transform
        duration-500
        group-hover:scale-[1.04]
      "
    />
  </div>

  {/* DETAILS */}

  <div className="min-w-0">
    <div
      className="
        mb-3 flex
        flex-wrap
        items-center
        gap-2

        max-[480px]:gap-1.5
      "
    >
      {/* SUBJECT */}
      <span
        className="
          rounded-full
          bg-[#D69B23]/10
          px-3 py-1
          text-[10px]
          font-semibold
          text-[#B57A12]

          max-[480px]:px-2.5
          max-[480px]:text-[9px]
        "
      >
        {journal.subject}
      </span>

      {/* INDEXINGS */}
      {journal.indexings?.map((indexing) => (
        <span
          key={indexing.id}
          className="
            rounded-full
            bg-[#012D68]/[0.06]
            px-3 py-1
            text-[10px]
            font-semibold
            text-[#012D68]

            max-[480px]:px-2.5
            max-[480px]:text-[9px]
          "
        >
          {indexing.name}
        </span>
      ))}

      {/* JOURNAL STATUS */}
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold ${
          journal.active ?
            "bg-[#31B461]/10 text-[#168A45]"
          : "bg-red-50 text-red-600"
        } max-[480px]:px-2.5 max-[480px]:text-[9px]`}
      >
        <span
          className={`size-1.5 shrink-0 rounded-full ${
            journal.active ? "bg-[#31B461]" : "bg-red-500"
          }`}
        />

        {journal.active ? "Currently Active" : "Discontinued"}
      </span>
    </div>

    <h2
      className="
        font-[Fraunces]
        text-[21px]
        font-semibold
        leading-[1.3]
        text-[#012D68]
        transition-colors
        group-hover:text-[#D69B23]

        max-[650px]:text-[19px]

        max-[480px]:text-[17px]

        max-[380px]:text-[20px]
      "
    >
      {journal.title}
    </h2>

    <div
      className="
        mt-4 flex
        flex-wrap
        gap-x-5
        gap-y-2
        text-xs
        text-slate-500

        max-[480px]:mt-3
        max-[480px]:gap-x-3
        max-[480px]:gap-y-1.5
        max-[480px]:text-[11px]
      "
    >
      <span
        className="
          flex
          items-center
          gap-1.5
        "
      >
        <Hash
          className="
            size-3.5
            shrink-0
            text-[#D69B23]
          "
        />
        ISSN: {journal.issn}
      </span>

      <span
        className="
          flex items-center
          gap-1.5
        "
      >
        <Building2
          className="
            size-3.5
            shrink-0
            text-[#D69B23]
          "
        />

        {journal.publisher}
      </span>
    </div>

    <p
      className="
        mt-4
        line-clamp-2
        max-w-3xl
        text-[12px]
        leading-6
        text-slate-500

        max-[480px]:mt-3
        max-[480px]:text-[11px]
        max-[480px]:leading-5
      "
    >
      {journal.aim}
    </p>
  </div>

  {/* BUTTON */}

  <div
    className="
      flex h-11 w-11
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-[#012D68]/10
      bg-[#F7F9FC]
      text-[#012D68]
      transition-all
      group-hover:border-[#D69B23]
      group-hover:bg-[#D69B23]
      group-hover:text-white

      max-[650px]:hidden
    "
  >
    <ArrowRight
      className="
        size-4
        transition-transform
        group-hover:translate-x-1
      "
    />
  </div>
</Link>
  );
}

export function JournalQuickInfo({ icon, label, value }) {
  return (
  <div
  className="
    rounded-xl
    border border-[#012D68]/10
    bg-white
    px-4
    py-3

    transition-all
    duration-300

    hover:-translate-y-0.5
    hover:border-[#D69B23]/30
    hover:shadow-[0_8px_25px_rgba(1,45,104,0.07)]

    max-[480px]:px-3
    max-[480px]:py-2.5
  "
>
  <div
    className="
      flex
      min-w-0
      items-center
      gap-2
      text-[#D69B23]
    "
  >
    {icon}

    <span
      className="
        min-w-0
        text-[9px]
        font-bold
        uppercase
        tracking-[0.14em]
        max-[480px]:text-[8px]
      "
    >
      {label}
    </span>
  </div>

  <p
    className="
      mt-1.5
      truncate
      text-sm
      font-semibold
      text-[#012D68]
      max-[480px]:text-[13px]
    "
  >
    {value || "—"}
  </p>
</div>
  );
}
