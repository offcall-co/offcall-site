const youtubeUrl = "https://www.youtube.com/channel/UCAMNjgBMUdcuZ0n_GsUY5Eg";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-6 py-16 text-primary">
      <div className="flex max-w-2xl flex-col items-start gap-6">
        <h1 className="text-4xl font-light leading-tight tracking-[-0.03em] max-md:text-3xl">
	Hey, we're Dan & Jun.
        </h1>
        <p className="text-lg font-normal leading-7 text-primary/80">
	We're software engineers in big tech making videos on what we've learned in the industry.
        </p>
      </div>
    </main>
  );
}
