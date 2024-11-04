import profile from "../../../assets/images/profile.png";

export default function PostCardTitle({ post }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-2 mb-1">
          <img src={profile} alt="profile" className="w-7 h-7"></img>
          <div className="font-notosanskr text-lg opacity-90">촥촥한쵸코칩</div>
        </div>
        <div className="text-3xl font-bold font-notosanskr">{post.title}</div>
        <div className="flex gap-5 text-base opacity-40 font-notosanskr mt-5 mb-5">
          <div>{new Date(post.createdAt).toLocaleDateString()}</div>
          <div>조회수 1,416</div>
        </div>

        {/*<div className="text-sm opacity-80 font-notosanskr">
            수정됨: {new Date(post.updatedAt).toLocaleString()}
          </div>*/}
      </div>
    </div>
  );
}
