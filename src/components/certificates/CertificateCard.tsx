type Props = {
  title: string;
  issuer: string;
};

export default function CertificateCard({
  title,
  issuer,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

      <div className="mb-3 text-xs text-indigo-400">
        {issuer}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <button className="mt-4 rounded-xl border border-white/10 px-4 py-2 text-sm">
        View Certificate
      </button>

    </div>
  );
}