import GetInventory from "./getInventory";

export default async function CatalogPage() {
  const items = await GetInventory();
  return <>{items}</>;
}
