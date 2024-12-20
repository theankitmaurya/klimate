import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center mt-2">
          <p>Klimate | Coded by Ankit</p>
          <p>Copyright © All Rights Reserved 2024-2025</p>
          <div className="flex items-center justify-center gap-2">
            <p>Follow Me At - </p>
            <a href="https://www.instagram.com/theankitmaurya_">
              <img src="/instagram.png" alt="" height={23} width={23} />
            </a>
            <a href="https://github.com/theankitmaurya">
              <img src="/github.png" alt="" height={23} width={23} />
            </a>
            <a href="https://www.linkedin.com/in/theankitmauryaa/">
              <img src="/linkedin.png" alt="" height={23} width={23} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
