import Accordion from "@/components/shared/accordion";
import Client from "@/components/shared/client";
import Catalog from "@/components/shared/catalog";
import Cards from "@/components/shared/cards";
import Banner from "@/components/shared/banner";
import Main from "@/components/shared/main";
import Map from "@/components/shared/map";
import Brand from "@/components/shared/brand";
import Section from "@/components/shared/section";
import CompanyInfo from "@/components/shared/company-info";
import Inputs from "@/components/shared/inputs";

const Page = () => {
  return (
    <>
      <Banner />
      <Section />
      <Main />
      <Cards />
      <Catalog />
      <Client />
      <Brand />
      <CompanyInfo />
      <Accordion />
      <Map />
      <Inputs />
    </>
  );
};

export default Page;
