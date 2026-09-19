"use client";

import Link from "next/link";
import { BreadCrumbs, PageIntro, Text } from "../utils";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

export default function BlogList() {

    const [blogs,setBlogs] = useState([])
    const [paginationDetails, setPaginationDetails] = useState({
        next: null,
        previous: null
    });
    const [filters, setFilters] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = (await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/blogs/fetchallblogs`)).data;
                if (response.success) {
                    // toast.success(response.message)
                    setBlogs(prevList => response.data.results)
                    setPaginationDetails(prev => ({
                        next: response.data.next,
                        previous: response.data.previous
                    }))
                }
                else toast(response.message)
            } catch (err) {
                toast("Failed to load blogs")
            }

        })()
    }, [])

    async function hanldePagination(link) {
        try {
            const response = (await axios.get(link)).data;
            if (response.success) {
                toast.success(response.message)
                setBlogs(prevList => response.data.results)
                setPaginationDetails(prev => ({
                    next: response.data.next,
                    previous: response.data.previous
                }))
            }
            else toast(response.message)
        } catch (err) {
            toast("Failed to load blogs")
        }
    }
    return (
        <section className="px-[10%] flex flex-col items-center max-[500px]:px-4">
            <Toaster/>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-8 lg:max-w-7xl">
                    <h2 className="sr-only">Blogs</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {blogs.map((blog, index) => (
                            <HomeBlogCard key={index} blog={blog} />
                        ))}
                    </div>
                </div>
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
        </section>
    )
}

export function HomeBlogCard({ blog }) {
    return (
        <>
            <Link href={`blogs/blog/${blog?.id}`} className="group px-4 py-8 shadow-md rounded-md hover:shadow-xl">
                <Image
                    alt={blog?.title}
                    height={0}
                    width={0}
                    sizes="50vw"
                    src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN+ blog?.cover}
                    className="aspect-3/2 w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 "
                />
                <div className="flex justify-between">
                    <p className="mt-4 text-sm text-[var(--blue-color)]">{blog?.category}</p>
                    <p className="mt-4 text-sm text-[var(--blue-color)]">{new Date(blog?.created_at).toDateString()}</p>
                </div>
                <h3 className="mt-4 text-lg text-gray-700 capitalize">{blog?.title}</h3>
                <p className="mt-3 text-sm font-medium text-gray-900 truncate">{blog?.description}</p>

                <button className="mt-4 text-[var(--blue-color)] hover:text-red-500 cursor-pointer">
                    Read More {">>"}
                </button>
            </Link>
        </>
    )
}


export function BlogPageTop({blogId}) {
    const crumbs = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Blogs",
            link: "/blogs"
        },
    ]
    const [blog, setBlog] = useState();
    const [blogName, setBlogName] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const response = (await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/blogs/blog/fetchBlog/${blogId}`)).data;
                if (response.success) {
                    // toast.success(response.message)
                    setBlog(prevList => response.data)
                    setBlogName(prevName => response.data.title)
                }
                else toast(response.message)
            } catch (err) {
                toast("Failed to load blogs")
            }

        })()
    }, [])
    return (<>
        {blogName ?
            <><PageIntro title={blogName} description={`Explore ${blogName}`} />
                <BreadCrumbs crumbs={crumbs} page={blogName} />
                <BlogDetail blog={blog} />
            </> : null}
    </>)
}

export function BlogDetail({blog}) {
    return(
        <div className="px-[10%] py-[2%]">
            <h2 className="pb-5 mb-4 text-[clamp(17px,4vw,40px)] font-bold text-center text-[#333] border-b border-[var(--blue-color)] max-[650px]:pb-2">
                {blog.title}
            </h2>
            <Image src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN + blog.cover} width={0} height={0} sizes="100vw" alt={blog.title} className="w-full aspect-5/2 object-cover object-center" />
            <div className="mt-10" dangerouslySetInnerHTML={{__html:blog.content}} />
        </div>
    )
}