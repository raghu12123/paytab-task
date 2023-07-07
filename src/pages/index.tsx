import dynamic from "next/dynamic";

const CategorySlider = dynamic(
  () => import("../components/Home/CategorySlider"),
  {
    ssr: false,
  }
);
const BestSelling = dynamic(() => import("../components/Home/BestSelling"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <CategorySlider/>
      <BestSelling />
         </>
  );
}
