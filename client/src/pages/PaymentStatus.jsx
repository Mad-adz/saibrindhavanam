import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../api/axios";
import { PanoramicBanner, PaymentLoader } from "../components";
import { lordGaneshBannerSvg } from "../assets/images";
import { formatTimestampToIST } from "../utils/helpers";

const PaymentStatus = () => {
  const { merchantOrderId } = useParams();
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkStatus = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get(
          `api/donation/payment-status/${merchantOrderId}`
        );

        if (response.data.success && response.data.status) {
          setPaymentDetails(response.data);

          // If still pending, check again after 5 seconds
          if (response.data.status === "PENDING") {
            setTimeout(checkStatus, 5000);
          }
        } else {
          setError(response.data.message || "Failed to payment check status!");
        }
      } catch (err) {
        setError(
          err.response?.data?.message || "Payment status check is failed!"
        );
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, [merchantOrderId]);

  const paymentTime = formatTimestampToIST(
    paymentDetails?.orderDetails.paymentDetails[0].timestamp
  );

  return (
    <>
      <div className="relative">
        <PanoramicBanner
          bgImg={lordGaneshBannerSvg}
          title={"Payment Status"}
          description={""}
          align={"center"}
          color={"orange"}
        />
      </div>
      <section className="bg-amber-50 mt-[5rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            Payment Status
          </h2>
          {loading ? (
            <PaymentLoader />
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <>
              <div className="relative flex flex-col w-full h-full overflow-scroll scrollbar-hidden text-zinc-800 shadow-orange-100 shadow-md rounded-lg bg-clip-border bg-orange-100/50">
                <table className="w-full text-left table-auto min-w-max">
                  <thead className="bg-orange-200/50">
                    <tr>
                      <th className="p-4 border-b border-orange-100">
                        <span className="block text-md font-semibold leading-none text-orange-500">
                          Order ID
                        </span>
                      </th>
                      <th className="p-4 border-b border-orange-100">
                        <span className="block text-md font-semibold leading-none text-orange-500">
                          Status
                        </span>
                      </th>
                      <th className="p-4 border-b border-orange-100">
                        <span className="block text-md font-semibold leading-none text-orange-500">
                          Amount (₹)
                        </span>
                      </th>
                      <th className="p-4 border-b border-orange-100">
                        <span className="block text-md font-semibold leading-none text-orange-500">
                          Transaction ID
                        </span>
                      </th>
                      <th className="p-4 border-b border-orange-100">
                        <span className="block text-md font-semibold leading-none text-orange-500">
                          Payment Mode
                        </span>
                      </th>
                      <th className="p-4 border-b border-orange-100">
                        <span className="block text-md font-semibold leading-none text-orange-500">
                          Time
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      // key={temple.id}
                      className="hover:bg-orange-50 cursor-pointer"
                    >
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {paymentDetails?.orderDetails.orderId}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {paymentDetails?.orderDetails.state}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {parseFloat(
                            paymentDetails?.orderDetails.amount / 100
                          ).toFixed(2)}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {
                            paymentDetails?.orderDetails.paymentDetails[0]
                              .transactionId
                          }
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {
                            paymentDetails?.orderDetails.paymentDetails[0]
                              .paymentMode
                          }
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {paymentTime}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PaymentStatus;
