import moment from "moment";

export function formatRelativeTime(dateString) {
  const now = moment();
  const inputDate = moment(dateString);

  const diffMinutes = now.diff(inputDate, "minutes");
  const diffHours = now.diff(inputDate, "hours");
  const diffDays = now.diff(inputDate, "days");

  if (diffMinutes < 1) {
    return "just now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  } else if (diffDays === 1) {
    return "yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  } else {
    return inputDate.format("YYYY-MM-DD HH:mm:ss");
  }
}
export function getTimeUntilDate(inputDate) {
  const currentDate = moment();
  const targetDate = moment(inputDate, ["DD-MM-YYYY", moment.ISO_8601]);

  if (targetDate.isValid()) {
    if (targetDate.isSameOrAfter(currentDate)) {
      const duration = moment.duration(targetDate.diff(currentDate));

      const years = duration.years();
      const months = duration.months();
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();

      let result = "";

      if (years > 0) result += `${years} year(s), `;
      if (months > 0) result += `${months} month(s), `;
      if (days > 0) result += `${days} day(s), `;
      if (hours > 0) result += `${hours} hour(s), `;
      if (minutes > 0) result += `${minutes} minute(s), `;

      return {
        inFuture: true,
        text: result.slice(0, -2),
      }; // Remove the trailing comma and space
    } else {
      return {
        inFuture: false,
        text: targetDate.format("DD-MM-YYYY"),
      };
    }
  } else {
    return {
      inFuture: false,
      text: inputDate,
    };
  }
}
