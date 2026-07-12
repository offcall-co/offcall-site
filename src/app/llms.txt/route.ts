export const dynamic = "force-static";

const content = `# Dan & Jun

Dan and Jun are software engineers sharing practical lessons from building software in big tech.

## Routes

- [Dan & Jun](/) - Dan and Jun are software engineers sharing practical lessons from building software in big tech.

## Links

- [YouTube](https://www.youtube.com/channel/UCAMNjgBMUdcuZ0n_GsUY5Eg)
- [Instagram](https://www.instagram.com/danjuntech/)
`;

export function GET() {
  return new Response(content, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
