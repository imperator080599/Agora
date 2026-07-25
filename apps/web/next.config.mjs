/** @type {import('next').NextConfig} */
const nextConfig = {
  // Workspace packages ship TypeScript source; Next compiles them in place.
  transpilePackages: ["@agora/contracts", "@agora/domain"],
  // pg stays a server-side external (native/CJS driver; never bundled toward the client).
  serverExternalPackages: ["pg"],
};

export default nextConfig;
