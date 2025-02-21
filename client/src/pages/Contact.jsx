import { contactBanner } from "../assets/images";
import { ContactCard, PanoramicBanner } from "../components";
import { contactInformations } from "../utils/data/contact";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
const Contact = () => {
  const [mailData, setMailData] = useState(null);
  const formSchema = z.object({
    fname: z
      .string()
      .min(1, "First Name is required!")
      .min(3, { message: "First name must be at least 3 characters!" }),
    lname: z.string().min(1, "Last Name is required!"),
    email: z
      .string()
      .min(1, { message: "Email is required!" })
      .email({ message: "Email format is incorrect!" }),
    message: z.string().min(1, "Message is required!"),
  });

  const form = useForm({
    defaultValues: { fname: "", lname: "", email: "", message: "" },
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = form;

  // console.log(errors);

  useEffect(() => {
    if (errors.fname || errors.lname || errors.email || errors.message) {
      toast.dismiss();
    }
    if (errors.fname) {
      toast.error(errors.fname.message);
    } else if (errors.lname) {
      toast.error(errors.lname.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.message) {
      toast.error(errors.message.message);
    }
  }, [errors]);

  useEffect(() => {
    if (mailData) {
      reset();
    }
  }, [mailData, reset]);

  const onSubmit = async (data) => {
    // Show loading toast and get its ID
    const toastId = toast.loading("Sending your message...", {
      duration: 3000,
    }); // Loading toast stays for 3s

    try {
      const response = await fetch("http://localhost:5000/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok)
        throw new Error(result.message || "Something went wrong!");

      setMailData(result);

      // Remove loading toast & show success toast (visible for 2s)
      toast.success(result.message || "Message sent successfully!", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      // Remove loading toast & show error toast (visible for 2s)
      toast.error(error.message || "Error submitting form! Try again.", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={contactBanner}
        title={"Connect"}
        description={""}
      />

      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">
            Contact Us
          </h2>

          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            Whether you have questions about our mission, need assistance with
            temple services, or have suggestions for improvement, we welcome
            your inquiries with open hearts.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-16 h-full min-h-full">
            {contactInformations.map((value) => (
              <div key={value.id} className="h-full">
                <ContactCard value={value} />
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-orange-500">Direction</h2>
          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            This Temple can be reached by road & railway station at Nannilam
            (Between Mayliaduthurai to Thiruvarur) and Sannanallur Bus stop is
            near the station. Its 100 meters away from the Nannilam Railway
            station.
          </p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.9880529096085!2d79.65109025384741!3d10.884839994635295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUzJzA1LjQiTiA3OcKwMzknMTAuNSJF!5e1!3m2!1sen!2sin!4v1718012348060!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
            <div className="col-span-1 lg:col-span-5">
              <form
                className="flex flex-col gap-4 "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 text-left font-medium !text-zinc-900">
                      First Name
                    </label>
                    <input
                      {...register("fname")}
                      placeholder="First Name"
                      name="fname"
                      className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-left font-medium !text-zinc-900">
                      Last Name
                    </label>
                    <input
                      {...register("lname")}
                      placeholder="Last Name"
                      name="lname"
                      className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Your Email
                  </label>
                  <input
                    {...register("email")}
                    placeholder="name@email.com"
                    name="email"
                    className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    className="block w-full h-24 px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg md:h-36 focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-2/3 lg:w-1/2 mx-auto px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50 cursor-pointer"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
