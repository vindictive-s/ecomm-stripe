import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  const navigate = useNavigate();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box>
          <Box
            onClick={() => navigate("/")}
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            Apple
          </Box>
          <ol>
            * New subscribers only. £10.99/month after trial. Offer available
            for a limited time to new subscribers who connect an eligible device
            to an Apple device with iOS 15 or later or iPadOS 15 or later. Offer
            valid for three months after eligible device pairing. No audio
            product purchase necessary for current owners of eligible devices.
            Plan automatically renews until cancelled. Restrictions and other
            terms apply.
            <li>
              Requires multiple HomePod devices or AirPlay-compatible speakers
              with the latest AirPlay software.
            </li>
            <li>
              Creating a HomePod stereo pair requires two of the same model
              HomePod speakers, such as two HomePod mini, two HomePod (2nd
              generation) or two HomePod (1st generation).
            </li>
            <li>Requires a U1‑equipped iPhone.</li>
            <li>
              Requires a U1‑equipped iPhone. A subscription may be required for
              music streaming services.
            </li>
            <li>A subscription is required for Apple Music.</li>
            <li>
              A subscription may be required for music streaming services.
            </li>
            <li>
              Requires a HomeKit‑ or Matter‑enabled accessory. Smart home
              accessories sold separately.
            </li>
            <li>
              Spatial Audio works with compatible content in supported apps on
              HomePod (1st and 2nd generation).
            </li>
            <li>
              Sound Recognition will be available in a software update later
              this Spring. Sound Recognition may detect smoke and carbon
              monoxide alarm sounds and send you notifications when recognised.
              Sound Recognition should not be relied upon in circumstances where
              you may be harmed or injured, or in high-risk or emergency
              situations. Sound Recognition requires the updated Home
              architecture, which will be available as a separate update in the
              Home app. It requires all Apple devices that access the home to be
              using the latest software.
            </li>
            <li>
              Temperature and humidity sensing is optimised for indoor domestic
              settings, when ambient temperatures are around 15° C to 30° C and
              relative humidity is around 30% to 70%. Accuracy may decrease in
              some situations where audio is playing for an extended period of
              time at high volume levels. HomePod requires some time to
              calibrate the sensors immediately after starting up before results
              are displayed.
            </li>
            Services are not available in all regions.
          </ol>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Apple
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Newsroom
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Career Opportunities
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Ethics & Compliance
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Contact Apple
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Apple Values
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Accessibility
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Education
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Privacy
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Supplier Responsibility
          </Typography>
        </Box>
        <Box width="clamp(20%, 30%, 40$)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Apple Store
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Find a Store
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Financing
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Order Status
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Shopping Help
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Account
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Manage Your Apple ID
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Apple Store Account
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            iCloud.com
          </Typography>
          <Typography mb="30px" sx={{ ":hover": { cursor: "pointer" } }}>
            Apple One
          </Typography>
        </Box>
      </Box>
      <Box width="80%" margin="auto">
        <Typography m="30px 0" color="gray">
          More ways to shop: find an Apple Store or other retailer near you. Or
          call 000-0000-000.
        </Typography>
        <Typography color="gray">
          Copyright © 2023 Apple Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
