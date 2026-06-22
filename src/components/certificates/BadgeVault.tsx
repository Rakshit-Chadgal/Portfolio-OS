import BadgeRing from "./BadgeRing";
import CertificateCenter from "./CertificateCenter";

export default function BadgeVault() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-6xl">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Badge Vault
        </h2>

        <div className="relative flex items-center justify-center">

          <BadgeRing />

          <CertificateCenter />

        </div>

      </div>

    </section>
  );
}