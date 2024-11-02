export default function Postcard({ title, content }) {
  return (
    <div className="bg-slate-400 font-notosanskr p-3 rounded-lg">
      <div className="font-bold">{title}</div>
      <hr className="mt-2 mb-2 border-slate-500"></hr>
      <div>{content}</div>
    </div>
  );
}
