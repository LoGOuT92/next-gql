import { Inter } from "@next/font/google";
import Layout from "@/Components/Layout";
import NavLink from "@/Components/NavLinks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <NavLink name="Countries" href="countries " as="countries" />
        <NavLink name="Profile" href="profile" as="profile" />
      </div>
    </Layout>
  );
}
