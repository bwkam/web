import { themeState } from "@/atoms/theme";
import { useRecoilValue } from "recoil";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const theme = useRecoilValue(themeState);
  return (
    <div className={`${theme === true ? "mocha bg-base" : "latte bg-base"}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
