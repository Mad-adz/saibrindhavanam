import { donateBanner } from "../assets/images";
import { PanoramicBanner } from "../components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { apiClient } from "../api/axios";
import { useNavigate } from "react-router-dom";

// import { TbDeviceMobileDollar, TbCreditCard } from "react-icons/tb";

const Donate = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState(null);
  console.log(paymentDetails);
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
    mobile: z
      .string()
      .min(1, { message: "Mobile number is required!" })
      .length(10, { message: "Mobile number must be exactly 10 digits!" })
      .regex(/^\d+$/, { message: "Mobile number must contain only digits!" }),
    amount: z
      .string()
      .min(1, "Amount is required!")
      .transform((val) => (val.trim() === "" ? NaN : Number(val)))
      .refine((val) => !isNaN(val), {
        message: "Amount must be a valid number!",
      })
      .refine((val) => val > 0, { message: "Amount must be greater than 0!" }),
    comments: z.string().min(1, "Comments is required!"),
  });

  const form = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      amount: "",
      comments: "",
    },
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (
      errors.fname ||
      errors.lname ||
      errors.email ||
      errors.mobile ||
      errors.amount ||
      errors.comments
    ) {
      toast.dismiss();
    }
    if (errors.fname) {
      toast.error(errors.fname.message);
    } else if (errors.lname) {
      toast.error(errors.lname.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.mobile) {
      toast.error(errors.mobile.message);
    } else if (errors.amount) {
      toast.error(errors.amount.message);
    } else if (errors.comments) {
      toast.error(errors.comments.message);
    }
  }, [errors]);

  useEffect(() => {
    if (paymentDetails) {
      if (paymentDetails.checkoutPageUrl) {
        window.location.href = paymentDetails.checkoutPageUrl;
        // window.open(
        //   paymentDetails.checkoutPageUrl,
        //   "_blank",
        //   "noopener,noreferrer"
        // );
      }
      reset();
    }
  }, [navigate, paymentDetails, reset]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await apiClient.post("api/donation/pay", data);
      setPaymentDetails(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative">
        <PanoramicBanner
          bgImg={donateBanner}
          title={"Donate"}
          description={""}
        />
      </div>
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">Donations</h2>
          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            <span className="text-zinc-500 font-semibold">
              SHRI SAI BRINDHAVANAM FOUNDATION{" "}
            </span>
            is the authorized body to control and manage the day to day
            activities for the temple. It also provide various other services
            like food donation, Feed to needy peoples, elderly care services &
            educational support for below poverty kids.
          </p>
          <p className="mb-4 font-normal !text-lg !text-zinc-500">
            You can contribute or donate via Bank Transfer using the following
            information.
          </p>
          <div className="text-zinc-600">
            <p>
              <span className="text-zinc-700 font-semibold">Name : </span>SHRI
              SAI BRINDHAVANAM FOUNDATION
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">Acc No : </span>
              269705001079
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">Bank : </span>
              ICICI Bank
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">Branch : </span>
              Ramapuram
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">IFSC Code : </span>
              ICIC0002697
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">MICR Code : </span>
              600229105
            </p>
          </div>
        </div>
      </section>
      <section className="bg-amber-50 py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="w-full max-w-xl gap-4 mx-auto bg-amber-100/30 rounded-md shadow-md px-4 py-6 md:px-8 md:py-10">
            <h2 className="text-2xl text-center font-bold mb-8 text-orange-500">
              Donation Form
            </h2>
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
                    className="block w-full px-4 py-2 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                    className="block w-full px-4 py-2 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    placeholder="name@example.com"
                    name="email"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Mobile Number
                  </label>
                  <input
                    {...register("mobile")}
                    placeholder="000-000-0000"
                    name="mobile"
                    className="block w-full px-4 py-2 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 text-left font-medium !text-zinc-900">
                  Donation Amount (₹)
                </label>
                <input
                  {...register("amount")}
                  placeholder="0"
                  name="amount"
                  className="block w-full px-4 py-2 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              {/* <div>
                <p className="mb-2 text-left font-medium !text-zinc-900">
                  Payment Method
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="Debit or Credit Card"
                      className="accent-orange-400 h-4 w-4"
                    />
                    <label
                      htmlFor="card"
                      className="flex items-center space-x-2"
                    >
                      <TbCreditCard className="text-xl font-medium text-orange-500" />
                      <span>Debit or Credit Card</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="UPI or Wallet"
                      className="accent-orange-400 h-4 w-4"
                    />
                    <label
                      htmlFor="upi"
                      className="flex items-center space-x-2"
                    >
                      <TbDeviceMobileDollar className="text-xl font-medium text-orange-500" />
                      <span>UPI or Wallet</span>
                    </label>
                  </div>
                </div>
              </div> */}

              <div>
                <label className="mb-2 text-left font-medium !text-zinc-900">
                  Comments
                </label>
                <textarea
                  {...register("comments")}
                  className="block w-full h-24 px-4 py-2 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg md:h-36 focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Type your comments here..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-2/3 lg:w-1/2 mx-auto px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50 cursor-pointer"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
