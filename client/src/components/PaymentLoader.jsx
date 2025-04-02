const PaymentLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-60">
      <div className="inline-block h-[35px] w-[35px] animate-[spin_2s_linear_infinite] relative">
        <div className="absolute h-full w-[30%] bottom-[5%] left-0 rotate-60 origin-[50%_85%]">
          <div className="absolute bottom-0 left-0 w-full pb-[100%] bg-orange-500 rounded-full animate-[wobble1_0.8s_infinite_ease-in-out] opacity-100"></div>
        </div>
        <div className="absolute h-full w-[30%] bottom-[5%] right-0 -rotate-60 origin-[50%_85%]">
          <div className="absolute bottom-0 left-0 w-full pb-[100%] bg-orange-500 rounded-full animate-[wobble1_0.8s_infinite_ease-in-out_-0.15s] opacity-100"></div>
        </div>
        <div className="absolute h-full w-[30%] bottom-[-5%] left-0 translate-x-[116.666%]">
          <div className="absolute top-0 left-0 w-full pb-[100%] bg-orange-500 rounded-full animate-[wobble2_0.8s_infinite_ease-in-out] opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLoader;
