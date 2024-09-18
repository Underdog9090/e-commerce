export default function Grid({ blok }) {
  console.log("GRID", blok);
  return (
    <div className="grid grid-cols-3 gap-4">
      {blok.columns.map((column) => (
        <div key={column._uid} className="bg-gray-200 p-4">
          <h2>{column.title}</h2>
          <p>{column.content}</p>
        </div>
      ))}
    </div>
  );
}   