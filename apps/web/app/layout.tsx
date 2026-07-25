import type { Metadata, Viewport } from "next";
import "./globals.css";

// D20: the deployment origin comes exclusively from PUBLIC_APP_URL — never hardcoded.
export const metadata: Metadata = {
  metadataBase: process.env.PUBLIC_APP_URL ? new URL(process.env.PUBLIC_APP_URL) : undefined,
  title: { default: "Agora — where do you stand?", template: "%s · Agora" },
  description: "One claim a day. Take a position before you see the split.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell header-row">
            <a href="/" className="wordmark">
              Agora
            </a>
            <span className="header-date">{today}</span>
          </div>
        </header>
        <main className="page">{children}</main>
        <footer className="site-footer">
          <div className="shell">
            <p>Private beta &middot; pseudonymous by design &middot; positions are yours to change, once a day.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
