const routes = ["", "/services", "/resume", "/work", "/work/schoolai", "/work/hollow-way", "/contact"];

export const dynamic = "force-static";

export default function sitemap() {
  return ["en", "ja"].flatMap((locale) =>
    routes.map((route) => ({
      url: `https://dmytrolamashevskyi.github.io/${locale}${route}`,
      lastModified: new Date("2026-09-13"),
      changeFrequency: route === "" ? "monthly" : "yearly",
      priority: route === "" ? 1 : 0.7,
    })),
  );
}
