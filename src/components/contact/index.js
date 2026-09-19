"use client";

import { Loader, MailCheck, MapPinHouseIcon, PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import { Text2 } from "../utils";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export function ContactOptions() {
    return (
        <section className="px-[10%] py-[2.5%] my-[2.5%] flex flex-col items-center">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <Text2 text={`Get in Touch`} className="text-3xl font-bold leading-tight text-black uppercase font-medium sm:text-3xl lg:text-3xl" />

                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        We provide several ways to reach us out.
                    </p>
                </div>
                <div className="relative mt-8">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-full"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                            alt=""
                        />
                    </div>
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow transition-all bg-white text-[var(--blue-color)] hover:text-white hover:bg-[var(--blue-color)]">
                                <span className="text-xl font-semibold">
                                    <PhoneCallIcon />
                                </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                Call Us At
                            </h3>
                            <p className="mt-2 text-base text-gray-600">
                            +91 8588011090
                            </p>
                            <p className=" text-base text-gray-600">
                            9999817591 / 9313272573
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow transition-all bg-white text-[var(--blue-color)] hover:text-white hover:bg-[var(--blue-color)]">
                                <span className="text-xl font-semibold"> <MapPinHouseIcon /> </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                Find Us At
                            </h3>
                            <p className="mt-4 text-base text-gray-600">
                            1020, Pragya Kunj, Sector 4C, Vasundhara, Ghaziabad, Uttar Pradesh, 201012 
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow transition-all bg-white text-[var(--blue-color)] hover:text-white hover:bg-[var(--blue-color)]">
                                <span className="text-xl font-semibold"> <MailCheck /> </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                                Mail Us At
                            </h3>
                            <p className="mt-2 text-base text-gray-600">
                            info@iarapublication.com
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </section>)
}

// export function ContactForm() {
//     return(
//         <section className="px-[10%] py-[2.5%] my-[2.5%] flex flex-col items-center">
//             <ContactFormComponent />
//         </section>
//     )
// }

export function ContactForm() {
    const [formData, setFormData] = useState({
        message: "",
        name: "",
        email: "",
        phone_number: ""
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(prev => true)
        try {
            const response = (await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/forms/contact/addcontactquery`, formData)).data
            if (response.success) {
                toast.success(response.message)
            }
            else toast(response.message)
        } catch (err) {
            console.log(err);
            toast.error("Failed to submit query, please try again")
        }
        setLoading(prev => false)

    };

    return (
        <section className="px-[10%] py-[2.5%] my-[2.5%] flex flex-col items-center w-full">
            <Toaster />
            <div className="flex w-full flex-col items-center lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Contact Form */}
                <div className="w-full p-8">
                    <h2 className="text-2xl font-semibold max-[580px]:text-lg">
                        FEEL FREE TO <span className="text-[var(--blue-color)]">CONTACT US</span>
                    </h2>
                    <p className="text-gray-600 mt-2 max-[580px]:text-sm">
                        We are here to serve you with best of our services.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col mt-6 max-[580px]:text-sm">
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-4 w-full">
                            <input
                                type="tel"
                                name="phone_number"
                                placeholder="Phone Number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-2 w-full flex items-center">
                            <input
                                type="checkbox"
                                name="agree"
                                required
                                id="agree"
                                className="w-fit p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="agree" className="w-fit p-1 text-gray-600 max-[580px]:text-sm">I agree to receive promotional and marketing emails from IARA publications.</label>
                        </div>
                        {loading ?
                            <button type="button" disabled className="mt-4 bg-gray-400 flex gap-2 items-center justify-center cursor-progress text-white px-6 py-3 rounded-lg hover:bg-black">
                                <span className="animate-spin">
                                    <Loader />
                                </span> Submitting
                            </button>
                            :
                            <button type="submit" className="mt-4 bg-[var(--blue-color)] text-white px-6 py-3 rounded-lg hover:bg-black">
                                Send Now
                            </button>
                        }
                    </form>
                </div>

                {/* Google Map */}
                <div className="w-full h-full lg:h-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.735526909136!2d77.37403587567455!3d28.66763658248536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba43d7944f9%3A0x5f2e80f9dd6e161b!2sParab%20Publications!5e0!3m2!1sen!2sin!4v1740904646317!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full aspect-square h-fit"
                    />
                </div>
            </div>
        </section>
    );
};
