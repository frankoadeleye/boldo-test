import Footer from "components/footer";
import Navbar from "components/navbar";
import { LayoutBlock } from "./styled";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <LayoutBlock>
      <Navbar />
      {children}
      <Footer />
    </LayoutBlock>
  );
}

export default Layout;
