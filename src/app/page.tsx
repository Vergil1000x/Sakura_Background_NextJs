import Sakura_Background from "@/components/Sakura_Background";

export default function Home() {
  return (
    <div className="h-full w-full relative flex items-center justify-center font-[family-name:var(--font-poppins)] text-white text-5xl p-5">
      <Sakura_Background />
      <p className="z-10 xl:max-w-full max-w-sm">
        Ayo! What&apos;s with a blue thing in the top left?
      </p>
    </div>
  );
}
