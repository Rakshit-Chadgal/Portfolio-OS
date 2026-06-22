import Image from "next/image";

type Props = {
  title: string;
  image?: string;
};

export default function BadgeCard({
  title,
  image,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:scale-105">

      {image ? (
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
      ) : (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20 mx-auto">
          🏅
        </div>
      )}

      <h3 className="text-center">
        {title}
      </h3>

    </div>
  );
}