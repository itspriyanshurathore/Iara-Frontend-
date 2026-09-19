"use client";

import Image from "next/image";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { BreadCrumbs, PageIntro, Text } from "../utils";
import { StarIcon, TicketX } from "lucide-react";

export function BooksComponent() {

    const [bookList, setBookList] = useState([]);
    const [paginationDetails, setPaginationDetails] = useState({
        next: null,
        previous: null
    });
    const [filters, setFilters] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = (await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/books/fetchallbooks`)).data;
                if (response.success) {
                    // toast.success(response.message)
                    setBookList(prevList => response.data.results)
                    setPaginationDetails(prev => ({
                        next: response.data.next,
                        previous: response.data.previous
                    }))
                }
                else toast(response.message)
            } catch (err) {
                toast("Failed to load books")
            }

        })()
    }, [])

    async function hanldePagination(link) {
        try {
            const response = (await axios.get(link)).data;
            if (response.success) {
                toast.success(response.message)
                setBookList(prevList => response.data.results)
                setPaginationDetails(prev => ({
                    next: response.data.next,
                    previous: response.data.previous
                }))
            }
            else toast(response.message)
        } catch (err) {
            toast("Failed to load books")
        }
    }

    return (<>
        <div className="px-[10%] py-[2.5%] my-[2.5%] flex gap-10 max-[850px]:px-4">
            {/* <BookFilters filters={filters} /> */}
            <BookList books={bookList} paginationDetails={paginationDetails} hanldePagination={hanldePagination} />
        </div>
    </>)
}

export function BookFilters({ filters }) {
    return (<>
        <aside className="pl-8 pr-16 py-10 shadow-xl">
            {filters.map((filter, index) => (
                <div key={index}>
                    <span className="text-2xl py-8">
                        {filter.title}
                    </span>
                    <ul className="mt-4 flex flex-col gap-4">
                        {filter.options.map((option, index) => (
                            <li key={index} className="transition-all text-md cursor-pointer hover:text-[var(--blue-color)] hover:translate-x-2">
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    </>)
}

export function BookList({ books, paginationDetails, hanldePagination }) {
    return (
        <div>
            <div className="bookList grid grid-cols-4 gap-5 max-[1100px]:grid-cols-3 max-[750px]:grid-cols-2 max-[500px]:grid-cols-2">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
            <div className="pagination mt-10">
                {paginationDetails ? <Pagination>
                    <PaginationContent>
                        {paginationDetails.previous ?
                            <PaginationItem>
                                <PaginationPrevious href={"#"} onClick={() => hanldePagination(paginationDetails.previous)} />
                            </PaginationItem> : null}
                        {
                            paginationDetails.next ?
                                <PaginationItem>
                                    <PaginationNext href={"#"} onClick={() => hanldePagination(paginationDetails.next)} />
                                </PaginationItem> : null
                        }
                    </PaginationContent>
                </Pagination> : null}
            </div>
        </div>
    )
}

export function BookCard({ book }) {

    return (
        <Link href={`/books/book/${book.id}`} className="bookCard p-2 shadow-md rounded-md flex flex-col gap-4 hover:shadow-xl">
            <Image src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN + book.cover} alt={book.title} width={0} height={0} sizes="100vw" className="w-full object-contain aspect-2/3" />
            <div className="details">
                <h3 className="text-xl font-bold capitalize truncate max-[500px]:text-base">
                    {book.title}
                </h3>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-md text-nowrap">
                    {book.mrp != book.sale_price ? <>
                        <div className="flex gap-2 items-center">
                            <span className="line-through text-sm text-gray-500 ">
                                {Number(book.mrp).toFixed(2)} Rs.
                            </span>
                            <span className="text-[var(--blue-color)]">
                                {Number(book.sale_price).toFixed(2)} Rs.
                            </span>
                        </div>
                        <span className="bg-red-700 text-white px-2 py-1 rounded-md">
                            {(((book.mrp - book.sale_price) / book.mrp) * 100).toFixed(2)}% Off
                        </span>
                    </>
                        :
                        <span className="text-[var(--blue-color)] ">
                            {Number(book.mrp).toFixed(2)} Rs.
                        </span>
                    }
                </div>
                {/* <button className="transition-all w-full mt-4 bg-[var(--blue-color)] text-white cursor-pointer px-4 py-2 rounded-md hover:bg-black">
                    Add To Cart
                </button> */}
            </div>
        </Link>
    )
}


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

export function BookPageTop({ bookId }) {
    const crumbs = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Books",
            link: "/books"
        },
    ]
    const [book, setBook] = useState();
    const [bookName, setBookName] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const response = (await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/books/book/fetchBook/${bookId}`)).data;
                if (response.success) {
                    // toast.success(response.message)
                    setBook(prevList => response.data)
                    setBookName(prevName => response.data.title)
                }
                else toast(response.message)
            } catch (err) {
                toast("Failed to load books")
            }

        })()
    }, [])
    return (<>
        {bookName ?
            <><PageIntro title={bookName} description={`Explore ${bookName}`} />
                <BreadCrumbs crumbs={crumbs} page={bookName} />
                <BookDetail book={book} />
            </> : null}
    </>)
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function BookDetail({ book }) {
    const [mainImage, setMainImage] = useState(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + book.cover)
    console.log(book)
    function handleImageChange(newSrc) {
        setMainImage(prevImage => newSrc)
    }

    return (<>
        <div className="bg-white">
            <div className="pt-6 px-[10%] max-[500px]:px-3">

                <div className="mx-auto mt-6 w-full sm:px-6 grid grid-cols-3 gap-8 max-[950px]:grid-cols-1 max-[950px]:justify-items-center">
                    <Image src={mainImage} alt={book.title} width={0} height={0} sizes="100vw" className="h-fit size-full rounded-lg object-contain max-[950px]:w-1/2 max-[950px]:min-w-[300px]" />
                    <div className="w-full flex flex-col gap-5 col-span-2">
                        <div className="gallery h-[200px] w-full flex gap-4 max-[500px]:h-fit">
                            <Image
                                width={0} height={0} sizes="100vw"
                                alt={book.title}
                                src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN + book.cover}
                                className="w-fit object-cover h-full border rounded-xl max-[500px]:w-[100px] max-[500px]:h-fit"
                                onClick={(e) => handleImageChange(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + book.cover)}
                            />
                            {book.gallery.map((image, index) => (
                                <Image
                                    key={index}
                                    width={0} height={0} sizes="100vw"
                                    alt={book.title + " Gallery " + index}
                                    src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN + image.image}
                                    className="w-fit object-cover h-full border rounded-xl max-[500px]:w-[100px] max-[500px]:h-fit"
                                    onClick={(e) => handleImageChange(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + image.image)}
                                />
                            ))}
                        </div>
                        <div className="h-fit">
                            <h1 className="text-xl  mb-5 tracking text-gray-900 sm:text-3xl max-[450px]:mb-1">{book.title}</h1>
                            <div className="mt-4 max-[450px]:mt-1">
                                <h2 className="sr-only">Book information</h2>
                                {book.mrp != book.sale_price?
                                <div className="flex items-center gap-4 ">
                                    <p className="text-3xl tracking-tight text-gray-900 max-[450px]:text-base">{Number(book.sale_price).toFixed(2)} Rs.</p>
                                    <p className="text-lg line-through tracking-tight text-gray-900 max-[450px]:text-xs">{Number(book.mrp).toFixed(2)} Rs.</p>
                                    <span className="bg-red-700 text-white px-2 py-1 rounded-md max-[450px]:text-sm">
                                        {(((book.mrp - book.sale_price) / book.mrp) * 100).toFixed(2)}% Off
                                    </span>
                                </div>
                                :
                                <div className="flex items-center gap-4 ">
                                    <p className="text-3xl tracking-tight text-gray-900 max-[450px]:text-base">{Number(book.sale_price).toFixed(2)} Rs.</p>
                                </div>
                                }

                                {/* Reviews */}
                                <div className="mt-6 max-[450px]:mt-1">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        book.rating > rating ? 'fill-yellow-500' : 'fill-gray-200',
                                                        'size-5 shrink-0 border-none text-white',
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="details text-lg mt-5 text-gray-700 tracking-wider leading-[200%] max-[450px]:mt-1">
                                    <table>
                                        <tbody >
                                            <tr className="">
                                                <td>
                                                    <Text text={"Format"} />
                                                </td>
                                                <td className="pl-5">
                                                    <Text text={": " + book.format} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Text text={"ISBN"} />
                                                </td>
                                                <td className="pl-5">
                                                    <Text text={": " + book.ISBN} />
                                                </td>
                                            </tr>
                                            {book.DOI && book.DOI?.trim() != "" && book.DOI != "nan" ?
                                                <tr>
                                                    <td>
                                                        <Text text={"DOI"} />
                                                    </td>
                                                    <td className="pl-5">
                                                        : <Link href={book.DOI} className="text-[var(--blue-color)] text-[clamp(13px,2vw,18px)]" >{book.DOI}</Link>
                                                    </td>
                                                </tr> : null}
                                            <tr>
                                                <td>
                                                    <Text text={"Pages"} />
                                                </td>
                                                <td className="pl-5">
                                                    <Text text={": " + book.pages} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link href={book.book_pdf ? process.env.NEXT_PUBLIC_BACKEND_DOMAIN + book.book_pdf : ""} target="_blank" className="block border rounded-md px-4 py-1 mt-4 bg-[var(--blue-color)] cursor-pointer text-white hover:bg-black max-[450px]:py-0 max-[450px]:align-middle">
                                                        <Text text={"Download PDF "} element={"span"} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24">
                    {book.about_book ?
                        <>
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Book Description</h3>
                            </div>

                            <div className="py-4 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200">
                                <div>
                                    <div className="">
                                        <p className="text-base text-gray-900" dangerouslySetInnerHTML={{ __html: book.about_book }} />
                                    </div>
                                </div>

                            </div></> : null}
                    {book.authors.length ?
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4 mt-5 sm:text-3xl">Authors</h3>
                            {book.authors.sort((a, b) => a.order - b.order).map((author, index) => (
                                <BookAuthorCard key={index} author={author} />
                            ))}
                        </div> : null}
                </div>
            </div>
        </div>

    </>)
}

export function BookAuthorCard({ author }) {
    return (
        <div className="flex gap-4 mb-5 max-[380px]:flex-col">
            <div className="w-[100px] min-w-[100px]" style={{ minWidth: "100px", width: "100px" }}>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN + author.author_image} width={100} height={0} sizes="100vw" alt={author.author_name} className="w-full min-w-[100px]" />
            </div>
            <div>
                <div className="font-bold mb-4">
                    {author.author_name}
                </div>
                <div dangerouslySetInnerHTML={{ __html: author.about_author }} />
            </div>
        </div>
    )
}