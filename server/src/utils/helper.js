export const capitalize = (str) => {
  return str.replace(/^./, str[0].toUpperCase());
};

export const formatTimestampToIST = (timestamp) => {
  const date = new Date(timestamp);

  const options = {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-IN", options);
};