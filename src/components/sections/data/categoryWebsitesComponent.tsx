import MapComponent from "@/components/sections/data/mapWebsitesComponent";

export default function CategoryComponent() {
  return (
    <div className="w-full flex flex-col justify-start items-center pt-48 min-h-screen">
      <div className="w-3/4 bg-black pl-8 border border-white/10">
        <h1>Kaffee und Getränkelieferant - NCOFFEE</h1>
      </div>
      <MapComponent category="ncoffee" />
    </div>
  );
}
