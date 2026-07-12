import { InstagramIcon } from "./icons/InstagramIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";

export default function Page() {
  const socials = [
    {
      label: "YouTube",
      handle: "Dan & Jun",
      href: "https://www.youtube.com/channel/UCAMNjgBMUdcuZ0n_GsUY5Eg",
      icon: <YouTubeIcon />,
    },
    {
      label: "Instagram",
      handle: "@danjuntech",
      href: "https://www.instagram.com/danjuntech/",
      icon: <InstagramIcon />,
    },
  ];

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-6 py-16 text-primary">
      <div className="flex max-w-4xl flex-col gap-10">
        <div className="flex items-center gap-10 max-md:flex-col-reverse max-md:items-start">
          <div className="flex max-w-2xl flex-col items-start gap-6">
            <h1 className="text-4xl font-light leading-tight tracking-[-0.03em] max-md:text-3xl">
              Hey, we're Dan & Jun.
            </h1>
            <p className="text-lg font-normal leading-7 text-primary/80">
              We're software engineers in big tech making videos on what we've learned in the industry.
            </p>
          </div>
          <img
            alt="Dan and Jun"
            className="h-64 w-64 shrink-0 rounded-3xl object-cover shadow-[var(--shadow-001)] max-md:h-auto max-md:w-full"
            src="/assets/images/profilepic2.png"
          />
        </div>
        <section className="flex flex-col gap-4 border-t border-border pt-8 text-lg leading-7">
          <h2 className="text-2xl font-light leading-8 tracking-[-0.03em]">
            Here's where you can find us:
          </h2>
          <ul className="flex gap-3">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  aria-label={`${social.label}: ${social.handle}`}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-001)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.icon}
                  <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-xl bg-clr-2 px-3 py-1 text-sm leading-5 text-background opacity-0 shadow-[var(--shadow-001)] transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    {social.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="border-t border-border pt-8 text-lg leading-7 text-primary/80">
          Interested in collaborating or just want to say hi?{" "}
          <a
            className="text-accent transition hover:text-clr-5"
            href="mailto:offcall.co@gmail.com"
          >
            Click here
          </a>{" "}
          or email us at <span className="italic">offcall.co@gmail.com</span>
        </section>
      </div>
    </main>
  );
}
