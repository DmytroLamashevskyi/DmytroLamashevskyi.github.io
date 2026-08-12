export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://dmytrolamashevskyi.github.io/sitemap.xml",
  };
}
