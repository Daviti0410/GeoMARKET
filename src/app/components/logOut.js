function logOut() {
  const handleLogOut = async () => {
    await fetch("/api/logOut", {
      method: "POST",
    });
    window.location.reload();
  };

  return <button onClick={handleLogOut}>Logout </button>;
}

export default logOut;
