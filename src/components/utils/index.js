"use client";

import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";

export function Heading({ text, element, className, style }) {
    const Tag = element || 'p';
    return <Tag className={`font-bold text-[clamp(17px,4vw,40px)] leading-[170%] font-parkinsans ${className ? className : ''}`} style={style} >{text}</Tag>;
}
export function SubHeading({ text, element, className, style }) {
    const Tag = element || 'p';
    return <Tag className={`font-bold text-[clamp(17px,3vw,30px)] leading-[170%] font-parkinsans ${className ? className : ''}`} style={style} >{text}</Tag>;
}
export function Text({ text, element, className, style }) {
    const Tag = element || 'p';
    return <Tag className={`text-[clamp(13px,2vw,18px)] leading-[170%] font-parkinsans ${className ? className : ''}`} style={style} >{text}</Tag>;
}
export function Text2({ text, element, className, style }) {
    const Tag = element || 'p';
    return <Tag className={`text-[clamp(13px,2vw,15px)] leading-[170%] font-parkinsans ${className ? className : ''}`} style={style} >{text}</Tag>;
}
export function Text3({ text, element, className, style }) {
    const Tag = element || 'p';
    return <Tag className={`text-[clamp(13px,2vw,17px)] leading-[170%] font-parkinsans ${className ? className : ''}`} style={style} >{text}</Tag>;
}

export function BreadCrumbs({ crumbs, page }) {
    return (
        <div className="px-[10%] py-[1%] bg-gray-100">
            <Breadcrumb>
                <BreadcrumbList>
                    {crumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={crumb.link}>{crumb.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </React.Fragment>
                    ))}
                    <BreadcrumbItem>
                        <BreadcrumbPage>{page}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export function PageIntro({ title, description }) {
    return (
        <div className="pageIntro bg-[url(/images/pageIntroBook.jpg)] bg-cover bg-center mt-[80px]">
            <div className="heading py-10 flex flex-col gap-2 bg-[#00000082] text-white backdrop-blur-xs max-[1100px]:py-5 ">
                <Heading text={title} className={"font-medium text-center max-[1100px]:text-xl max-[600px]:text-base max-[600px]:text-xs"} />
                <Text text={description} className={"font-medium text-center max-[1100px]:text-base max-[600px]:hidden"} />
            </div>
        </div>
    )
}