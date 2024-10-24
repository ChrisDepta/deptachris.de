import MapComponent from "@/components/sections/data/mapComponent";

export default function CategoryComponent() {
  return (
    <div className="w-full flex flex-col justify-start items-center pt-48 ">
      <div className="w-3/4 bg-black pl-8 border border-white/10">
        <h1>Kaffee und Getränkelieferant - NCOFFEE</h1>
      </div>
      <MapComponent category="ncoffee" />
      <div className="w-3/4 bg-black pl-8 border border-white/10">
        <h1>Sachverständigenbüro - Blankenship</h1>
      </div>
      <MapComponent category="blankenship" />
      <div className="w-3/4 bg-black pl-8 border border-white/10">
        <h1>Pizzeria - Damiano</h1>
      </div>
      <MapComponent category="damiano" />
      <div className="w-3/4 bg-black pl-8 border border-white/10">
        <h1>Bauunternehmen - Paluch</h1>
      </div>
      <MapComponent category="paluch" />
      <div className="w-3/4 bg-black pl-8 border border-white/10">
        <h1>Pizzeria - Pisa</h1>
      </div>
      <MapComponent category="pisa" />
    </div>
  );
}
