import { Card } from "../../components/Card";
import { useHomePage } from "./hooks";

export default function Home() {
  const { users } = useHomePage();

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="flex flex-col gap-4">
        {users.length > 0 &&
          users.map((user) => (
            <Card key={user.id} email={user.email} nome={user.name} />
          ))}
      </div>
    </div>
  );
}
