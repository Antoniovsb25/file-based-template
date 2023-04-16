import { useRouter } from "next/router";

// import { Container } from './styles';

function ClientsProjectsPage() {
  const router = useRouter();
  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };
  return (
    <>
      <h1>Products of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </>
  );
}

export default ClientsProjectsPage;
