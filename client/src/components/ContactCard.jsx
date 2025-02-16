import PropTypes from "prop-types";
const ContactCard = ({ value }) => {
  return (
    <>
      <address className="bg-gradient-to-r from-orange-300/50 to-orange-300/70 rounded-lg overflow-hidden shadow-orange-50 shadow-xl max-w-sm p-6 h-full">
        <h2 className="text-xl font-semibold text-orange-500 mb-2">
          {value.title}
        </h2>
        {value.address && (
          <div>
            <p className="text-lg font-semibold">{value.address.line1}</p>
            <p>{value.address.line2}</p>
            <p>
              {value.address.line3}, {value.address.city}
            </p>
            <p>
              {value.address.district} - {value.address.pin}
            </p>
            <p>
              {value.address.state}, {value.address.country}
            </p>
          </div>
        )}
        {value.contact && (
          <div>
            <p>
              <span className="font-semibold text-zinc-800">Mobile : </span>
              {value.contact.mobile}
            </p>
            <p>
              <span className="font-semibold text-zinc-800">Email : </span>
              {value.contact.email}
            </p>
          </div>
        )}
      </address>
    </>
  );
};

ContactCard.propTypes = {
  value: PropTypes.object,
};

export default ContactCard;
