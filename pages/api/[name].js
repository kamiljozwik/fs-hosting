/** Super simple API endpoint */
export default async function handler(req, res) {
  const { name } = req.query;
  const resp = await fetch(`https://api.nationalize.io/?name=${name}`);
  const data = await resp.json();
  res.status(200).json({ ...data });
}
