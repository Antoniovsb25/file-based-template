import React from "react";
import Link from "next/link";

// import { Container } from './styles';

function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Maxmilian",
    },
    {
      id: "manuel",
      name: "Manuel",
    },
  ];
  return (
    <>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ClientsPage;
