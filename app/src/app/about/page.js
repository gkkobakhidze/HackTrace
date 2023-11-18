import { Stack, Typography, List, ListItem, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', maxWidth: 'lg', mx: 'auto', p: 4 }}>
      <Typography variant="h2" gutterBottom component="div">
        About Us
      </Typography>
      <Typography variant="h6" sx={{ my: 4 }}>
        Dedicated to enhancing the security of digital assets, our platform provides a comprehensive database for reporting and analyzing crypto-related hacks. By aggregating user-submitted cases, we facilitate the collection of crucial data, enabling third-party investigators to assess incidents and implement countermeasures.
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 2 }}>
        Project Overview:
      </Typography>
      <Typography paragraph>
        Our application serves as a pivotal resource for the crypto community, offering functionalities such as the submission of detailed hack reports, conditional blacklisting of malicious addresses, and real-time alerts to prevent further exploitation. Through pattern analysis and collaborative efforts, we empower victims by providing actionable intelligence and support mechanisms.
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        Our Team
      </Typography>
      <List>
        <ListItem>Georgy Kobakhidze</ListItem>
        <ListItem>David Kobakhidze</ListItem>
        <ListItem>Ilya Kobakhidze</ListItem>
        <ListItem>Cynthia Garcia</ListItem>
      </List>
      <Typography variant="h6">
        ETHGlobal Istanbul, 2023
      </Typography>
    </Box>
  );
};

export default About;
