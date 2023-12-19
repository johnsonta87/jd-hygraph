import { PortfolioList } from '../../components/'

export default function PortfolioIndex({ ...props }) {

  return (
    <Tabs align="start" variant="line">
      <TabList borderColor="clay">
        {/* {tabs.map((tab, index) => (
          <Tab
            key={index}
            _selected={{ color: "clay" }}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab.title}
          </Tab>
        ))} */}
      </TabList>
      <TabIndicator mt="-3px" height="2px" bg="clay" borderRadius="1px" />

      <TabPanels mt={20}>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            <PortfolioList variant="secondary" category="Product design" />
          </TabPanel>
        ))}
      </TabPanels>
      </Tabs>
  )
}