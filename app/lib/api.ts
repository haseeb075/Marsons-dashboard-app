export const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};