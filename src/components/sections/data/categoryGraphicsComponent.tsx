import MapComponent from "@/components/sections/data/mapGraphicsComponent";

export default function CategoryComponent() {
  return (
    <div className="w-full flex flex-col justify-start items-center pt-48 min-h-screen">
      <div className="w-full xl:w-3/4 bg-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))] pl-8 border border-white/10">
        <h1 className="text-2xl md:text-3xl">
          Kaffee und Getränkelieferant - NCOFFEE
        </h1>
      </div>
      <MapComponent category="ncoffee" />
      <div className="w-full xl:w-3/4 bg-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))] pl-8 border border-white/10">
        <h1 className="text-2xl md:text-3xl">
          Sachverständigenbüro - Blankenship
        </h1>
      </div>
      <MapComponent category="blankenship" />
      <div className="w-full xl:w-3/4 bg-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))] pl-8 border border-white/10">
        <h1 className="text-2xl md:text-3xl">Pizzeria - Damiano</h1>
      </div>
      <MapComponent category="damiano" />
      <div className="w-full xl:w-3/4 bg-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))] pl-8 border border-white/10">
        <h1 className="text-2xl md:text-3xl">Bauunternehmen - Paluch</h1>
      </div>
      <MapComponent category="paluch" />
      <div className="w-full xl:w-3/4 bg-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))] pl-8 border border-white/10">
        <h1 className="text-2xl md:text-3xl">Pizzeria - Pisa</h1>
      </div>
      <MapComponent category="pisa" />
    </div>
  );
}
