import content from "@/db/db.json";

export default function Impressum() {
  const data = content.impressum;

  return (
    <div className="h-screen w-full md:w-3/4 text-[rgb(var(--foreground-rgb))] bg-[rgb(var(--background-end-rgb))] py-24 px-8 md:p-24 text-sm flex flex-col justify-evenly items-start">
      <div className="">
        <h2>Eigentumer</h2>
        <p className="p-2">
          <strong className="text-[rgb(var(--accent-rgb))] font-extrabold mr-2">
            Name und Vorname:
          </strong>
          {data.name}
        </p>
        <p className="p-2">
          <strong className="text-[rgb(var(--accent-rgb))] font-extrabold mr-2">
            Beruf:{" "}
          </strong>
          {data.beruf}
        </p>
      </div>
      <div className="">
        <h2>Anschrift</h2>
        <p className="p-2">
          <strong className="text-[rgb(var(--accent-rgb))] font-extrabold mr-2">
            Land:
          </strong>
          {data.land}
        </p>
        <p className="p-2">
          <strong className="text-[rgb(var(--accent-rgb))] font-extrabold mr-2">
            Stadt:{" "}
          </strong>
          {data.plz} - {data.stadt}
        </p>
        <p className="p-2">
          <strong className="text-[rgb(var(--accent-rgb))] font-extrabold mr-2">
            Strasse:
          </strong>
          {data.strasse} {data.strassenNr}
        </p>
      </div>
      <div className="">
        <h2>Kontakt möglichkeiten</h2>
        <p className="p-2">
          <strong className="text-[rgb(var(--accent-rgb))] font-extrabold mr-2">
            E-mail:
          </strong>
          {data.mail}
        </p>
        <p className="p-2">
          <strong className="text-[rgb(var(--accent-rgb))] font-extrabold mr-2">
            Mobile:{" "}
          </strong>
          {data.mobile}
        </p>
      </div>
      <div className="">
        <h2>Verantwortlicher</h2>
        <p className="p-2">{data.gesetz}</p>
      </div>
    </div>
  );
}
