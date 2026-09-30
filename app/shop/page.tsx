import type { Metadata } from "next";
import ShopHeader from "../components/shop/ShopHeader";
import ShopCatalog from "../components/shop/ShopCatalog";
import ShopFooter from "../components/shop/ShopFooter";

export const metadata: Metadata = {
  title: "Shop — Supreme Academy",
  description:
    "Nutrition, BJJ/Judo and Boxing/Kickboxing gear from Supreme Academy — build an order and send it straight to us on WhatsApp.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHeader />
      <ShopCatalog />
      <ShopFooter />
    </>
  );
}
