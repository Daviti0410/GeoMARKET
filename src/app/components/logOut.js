import { useRouter } from "next/navigation";

function logOut() {
  const router = useRouter();

  const handleLogOut = async () => {
    await fetch("/api/logOut", {
      method: "POST",
    });
    window.location.reload();
    router.push("/");
  };

  return <button onClick={handleLogOut}>Logout </button>;
}

export default logOut;
