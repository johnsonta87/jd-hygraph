"use client";
import { useGetAboutPageQuery as GetAboutPageQuery } from "@/__generated__/graphql";
import { ServicesList, ServicesListType } from "@/components";
import ContactLinks, {
  ContactLinksType,
} from "@/components/ContactLinks/ContactLinks";
import { PageHero } from "@/components/PageHero/PageHero";
import ProcessList, {
  MyProcessListType,
} from "@/components/ProcessList/ProcessList";
import { Container, Divider, Flex, Spinner } from "@chakra-ui/react";

type Props = {};

const AboutPage = (props: Props) => {
  const { loading, data } = GetAboutPageQuery();
  const { aboutPage } = data || {};
  const {
    pageHero,
    servicesList,
    processTitle,
    myProcessSection,
    contactSectionTitle,
    pageContactSection,
  } = aboutPage || {};

  if (loading)
    return (
      <Flex
        w="100%"
        h="calc(100vh - 335px)"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" mx="auto" />
      </Flex>
    );

  return (
    <Container maxW="1274px" color="black" mb="172px">
      <PageHero
        variant="primary"
        title={pageHero?.mainHeading || ""}
        subtitle={pageHero?.introSubheading?.html || ""}
        image={pageHero?.showcaseImage?.url || ""}
      />

      {servicesList && (
        <>
          <Divider my="40px" />
          <ServicesList
            heading="What I do"
            list={servicesList as ServicesListType[]}
          />
        </>
      )}

      <Divider my="40px" />

      {myProcessSection && (
        <>
          <ProcessList
            heading={processTitle || ""}
            list={myProcessSection as MyProcessListType[]}
          />

          <Divider my="40px" />
        </>
      )}

      {pageContactSection && (
        <ContactLinks
          sectionTitle={contactSectionTitle || ""}
          list={pageContactSection as ContactLinksType[]}
        />
      )}
    </Container>
  );
};

export default AboutPage;
