import content from "@/db/db.json";

export default function atenschutzComponent() {
  const data = content.impressum;

  return (
    <div className="min-h-screen w-3/4 bg-black p-24 text-sm flex flex-col justify-evenly items-start">
      <div>
        <h2>Datenschutzerklärung</h2>
        <p className="p-2">
          Wir freuen uns über Ihr Interesse an unserem Webauftritt. Der Schutz
          Ihrer persönlichen Daten ist uns wichtig.
        </p>
        <p className="p-2">
          Nachfolgend informieren wir Sie darüber, wie wir Ihre
          personenbezogenen Daten im Zusammenhang mit dem Kontaktformular
          verarbeiten.
        </p>
      </div>
      <div>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2 text-xl">
            1.
          </strong>
          Verantwortlicher Verantwortlich für die Datenverarbeitung im
          Zusammenhang mit dem Kontaktformular ist:
        </p>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2">Herr: </strong>
          {data.name}
        </p>
        <p className="p-2">
          {data.land}
          <br />
          {data.plz} - {data.stadt}
          <br />
          {data.strasse} {data.strassenNr}
        </p>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2">E-mail:</strong>
          {data.mail}
        </p>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2">
            Mobile:{" "}
          </strong>
          {data.mobile}
        </p>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2 text-xl">
            2.
          </strong>
          Erhebung und Verarbeitung personenbezogener Daten Wenn Sie das
          Kontaktformular auf unserer Website verwenden, erfassen wir nur die
          personenbezogenen Daten, die Sie uns zur Verfügung stellen. In der
          Regel sind dies Ihr Name und Ihre E-Mail-Adresse. Diese Daten dienen
          ausschließlich der Bearbeitung Ihrer Anfrage und werden nicht in einer
          Datenbank gespeichert.
        </p>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2 text-xl">
            3.
          </strong>
          Zweck der Datenverarbeitung Die von Ihnen im Kontaktformular
          angegebenen personenbezogenen Daten werden ausschließlich für die
          Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe Ihrer Daten an
          Dritte erfolgt nicht.
        </p>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2 text-xl">
            4.
          </strong>
          Speicherdauer Die über das Kontaktformular erhaltenen Daten werden nur
          so lange aufbewahrt, wie es für die Bearbeitung Ihrer Anfrage
          erforderlich ist. Nach Abschluss der Kommunikation werden Ihre Daten
          gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen
          entgegenstehen.
        </p>
        <p className="p-2">
          <strong className="text-dcturkis font-extrabold mr-2 text-xl">
            5.
          </strong>
          Ihre Rechte Sie haben das Recht, jederzeit Auskunft über die bei uns
          gespeicherten personenbezogenen Daten zu erhalten sowie das Recht auf
          Berichtigung, Löschung und Einschränkung der Verarbeitung dieser
          Daten. Sie können Ihre Einwilligung zur Verarbeitung der Daten
          jederzeit widerrufen. Wenden Sie sich dazu bitte an die oben
          angegebene Kontaktadresse. --- Bitte beachten Sie, dass diese
          Datenschutzerklärung als allgemeiner Hinweis dient. Es empfiehlt sich,
          die Erklärung ggf. durch einen Anwalt prüfen zu lassen, um
          sicherzustellen, dass sie den aktuellen rechtlichen Anforderungen
          entspricht.
        </p>
      </div>
    </div>
  );
}
