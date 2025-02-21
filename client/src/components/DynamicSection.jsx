import PropTypes from "prop-types";
const DynamicSection = ({ pageContent }) => {
  return (
    <>
      <section className="mt-[30rem] bg-amber-50 py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          {pageContent.map((value, index) => {
            const isLastItem = index === pageContent.length - 1;
            return (
              <div key={value.id}>
                {value.hasImage ? (
                  <div className="flex justify-center items-center my-6">
                    <img
                      src={value.imgUrl}
                      alt=""
                      className="w-full md:w-1/2"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-2 text-orange-500">
                      {value.title}
                    </h2>
                    <p
                      className={`text-lg indent-8 text-zinc-600 leading-loose mb-4 ${
                        value.hasList && "font-semibold !indent-0"
                      }`}
                    >
                      {value.description}
                    </p>
                    {value.list && (
                      <ul
                        className={`${
                          isLastItem ? "list-none !ml-0" : "list-disc"
                        } ml-8 text-lg leading-loose mb-4`}
                      >
                        {value.list.map((item, index) => (
                          <li
                            key={index}
                            className={`${isLastItem ? "!mb-2" : "!mb-0"}`}
                          >
                            {item.label ? (
                              <p className="text-zinc-600">
                                <span className="text-orange-500 font-semibold">
                                  {item.label} :{" "}
                                </span>
                                {item.details}
                              </p>
                            ) : (
                              <p className="text-zinc-600">{item}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

DynamicSection.propTypes = {
  pageContent: PropTypes.array,
};

export default DynamicSection;
