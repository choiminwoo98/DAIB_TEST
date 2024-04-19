export const formatTime = (timestamp: string): string => {
  const messageTime = new Date(timestamp);
  const currentTime = new Date();

  const timeDifference = Math.floor(
    (currentTime.getTime() - messageTime.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (timeDifference === 0) {
    const hours = messageTime.getHours().toString().padStart(2, "0");
    const minutes = messageTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  } else if (timeDifference === 1) {
    return "1일전";
  } else {
    return `${timeDifference}일전`;
  }
};
