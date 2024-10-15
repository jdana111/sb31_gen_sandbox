// Test14 (MUI Tabs Component)
// Source: ChatGPT
import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

// Define a simple component to show the content for each tab
function TabPanel({ value, index, children }) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const SampleTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="sample tabs">
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" />
      </Tabs>

      {/* TabPanel components for each tab's content */}
      <TabPanel value={value} index={0}>
        Content for Tab One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab Three
      </TabPanel>
    </Box>
  );
};

export default SampleTabs;
