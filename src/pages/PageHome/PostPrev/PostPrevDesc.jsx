export default function PostPrevDesc({ createdAt }) {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div className="flex gap-2">
      <div className="text-sm text-gray-500 font-notosanskr">댓글 [1]</div>
      <span className="text-sm text-gray-500 font-notosans">|</span>
      <div className="text-sm text-gray-500 font-notosans">
        {formatDate(createdAt)}
      </div>
    </div>
  );
}
