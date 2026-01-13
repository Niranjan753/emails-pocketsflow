import { Metadata } from "next";
import Header from "../landing/Header";
import Footer from "../layout/Footer";

export const metadata: Metadata = {
  title: "Flowcn",
  description:
    "Flowcn is a component library that provides a set of reusable components for building web applications.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>
        <Header />
        <main className="relative w-full pt-0 md:pt-0">
            {children}
        </main>
        <Footer />
        </>
  );
}
