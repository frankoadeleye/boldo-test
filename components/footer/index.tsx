import Logo from "common/logo";
import { FooterData } from "./data";
import { FooterBlock, ReturnLinksBlock } from "./styled";
import Link from "next/link";

type FooterProps = {
  header: string;
  Linksdata: Array<any>;
};

function FooterLinks({ header, Linksdata }: FooterProps) {
  return (
    <ReturnLinksBlock>
      <div className="header">{header}</div>
      {Linksdata.map((data, index) => {
        return (
          <Link href={data.link} key={index}>
            <a>{data.name}</a>
          </Link>
        );
      })}
    </ReturnLinksBlock>
  );
}

function Footer() {
  return (
    <FooterBlock>
      <div className="Logo-section">
        <div className="logo-wrap">
          <Logo />
        </div>
        <small>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </small>
        <small>All rights reserved.</small>
      </div>
      <FooterLinks header="Landings" Linksdata={FooterData.Landing} />
      <FooterLinks header="Company" Linksdata={FooterData.Company} />
      <FooterLinks header="Resources" Linksdata={FooterData.Resources} />
    </FooterBlock>
  );
}
export default Footer;
