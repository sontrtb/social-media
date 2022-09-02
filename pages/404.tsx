import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h2>That page cannot be found</h2>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default NotFound;
