import MapComponent from "@/components/sections/data/mapWebsitesComponent";

export default function CategoryComponent() {
  return (
    <div className="w-full flex flex-col justify-start items-center pt-48 min-h-screen">
      <div className="w-full xl:w-3/4 bg-[rgb(var(--background-end-rgb))] text-[rgb(var(--foreground-rgb))] pl-8 border border-white/10">
        <h1 className="text-2xl md:text-3xl">
          Projekte mit vielseitigen Technologien umgesetzt
        </h1>
      </div>
      <MapComponent category="myProjects" />
    </div>
  );
}
