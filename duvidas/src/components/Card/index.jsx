export function Card({ nome, email }) {
  return (
    <div className="shadow rounded-md bg-white flex p-3 flex-col gap-3">
      <div className="flex items-center gap-2 pb-3 border-b">
        <p>Nome:</p>
        <p>{nome}</p>
      </div>
      <div className="flex items-center gap-2 pb-3 border-b">
        <p>E-mail:</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
