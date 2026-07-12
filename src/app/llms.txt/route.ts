export const dynamic = "force-static";

export function GET() {
  return new Response("# Dan and Jun\n\nDan and Jun are simple YouTubers sharing what they make, learn, and love.\n\n## Routes\n\n- [Dan and Jun](/) - Dan and Jun are simple YouTubers sharing what they make, learn, and love.\n\n## Links\n\n- [YouTube](https://www.youtube.com/channel/UCAMNjgBMUdcuZ0n_GsUY5Eg)\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
