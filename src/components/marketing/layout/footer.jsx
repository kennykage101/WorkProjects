import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import { DynamicLogo } from '@/components/core/logo';

export function Footer() {
  return (
    <footer>
      <Container>
        <Box sx={{ p: 3 }}>
          <Stack spacing={2} sx={{ maxWidth: 'sm' }}>
            <DynamicLogo colorDark="light" colorLight="dark" height={16} width={77} />
            <Typography level="body-sm">
            Unlock the power of safe travels, quick flights and experience divine-like comfort with Hayaan.
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack direction="row" spacing={3} sx={{ alignItems: 'center', p: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography level="body-xs">Copyright ©2023 devias.io</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Avatar component="a" target="_blank" variant="outlined">
              <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.45996C10.0716 2.45996 8.18657 3.03179 6.58319 4.10313C4.97982 5.17448 3.73013 6.69722 2.99218 8.4788C2.25422 10.2604 2.06114 12.2208 2.43735 14.1121C2.81355 16.0034 3.74215 17.7407 5.10571 19.1043C6.46928 20.4678 8.20656 21.3964 10.0979 21.7726C11.9892 22.1488 13.9496 21.9557 15.7312 21.2178C17.5127 20.4798 19.0355 19.2302 20.1068 17.6268C21.1782 16.0234 21.75 14.1383 21.75 12.21C21.7473 9.62494 20.7192 7.14657 18.8913 5.31868C17.0634 3.4908 14.585 2.46269 12 2.45996ZM12.75 20.4253V14.46H15C15.1989 14.46 15.3897 14.3809 15.5303 14.2403C15.671 14.0996 15.75 13.9089 15.75 13.71C15.75 13.511 15.671 13.3203 15.5303 13.1796C15.3897 13.039 15.1989 12.96 15 12.96H12.75V10.71C12.75 10.3121 12.908 9.93061 13.1893 9.6493C13.4706 9.368 13.8522 9.20996 14.25 9.20996H15.75C15.9489 9.20996 16.1397 9.13094 16.2803 8.99029C16.421 8.84964 16.5 8.65887 16.5 8.45996C16.5 8.26105 16.421 8.07028 16.2803 7.92963C16.1397 7.78898 15.9489 7.70996 15.75 7.70996H14.25C13.4544 7.70996 12.6913 8.02603 12.1287 8.58864C11.5661 9.15125 11.25 9.91431 11.25 10.71V12.96H9C8.80109 12.96 8.61033 13.039 8.46967 13.1796C8.32902 13.3203 8.25 13.511 8.25 13.71C8.25 13.9089 8.32902 14.0996 8.46967 14.2403C8.61033 14.3809 8.80109 14.46 9 14.46H11.25V20.4253C9.13575 20.2323 7.17728 19.2316 5.78198 17.6315C4.38667 16.0313 3.66195 13.9549 3.75855 11.834C3.85515 9.7132 4.76564 7.71123 6.30064 6.24456C7.83563 4.77789 9.87696 3.95944 12 3.95944C14.1231 3.95944 16.1644 4.77789 17.6994 6.24456C19.2344 7.71123 20.1449 9.7132 20.2415 11.834C20.3381 13.9549 19.6133 16.0313 18.218 17.6315C16.8227 19.2316 14.8643 20.2323 12.75 20.4253Z"
                  fill="var(--joy-palette-text-primary)"
                />
              </svg>
            </Avatar>
            <Avatar component="a" target="_blank" variant="outlined">
              <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 4.70996H3C2.80109 4.70996 2.61032 4.78898 2.46967 4.92963C2.32902 5.07028 2.25 5.26105 2.25 5.45996V18.21C2.25 18.6078 2.40804 18.9893 2.68934 19.2706C2.97064 19.5519 3.35218 19.71 3.75 19.71H20.25C20.6478 19.71 21.0294 19.5519 21.3107 19.2706C21.592 18.9893 21.75 18.6078 21.75 18.21V5.45996C21.75 5.26105 21.671 5.07028 21.5303 4.92963C21.3897 4.78898 21.1989 4.70996 21 4.70996ZM12 12.6928L4.92844 6.20996H19.0716L12 12.6928ZM9.25406 12.21L3.75 17.2546V7.16527L9.25406 12.21ZM10.3641 13.2271L11.4891 14.2631C11.6274 14.3901 11.8084 14.4606 11.9963 14.4606C12.1841 14.4606 12.3651 14.3901 12.5034 14.2631L13.6284 13.2271L19.0659 18.21H4.92844L10.3641 13.2271ZM14.7459 12.21L20.25 7.16434V17.2556L14.7459 12.21Z"
                  fill="var(--joy-palette-text-primary)"
                />
              </svg>
            </Avatar>
            <Avatar component="a" target="_blank" variant="outlined">
              <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.25 2.45996H3.75C3.35218 2.45996 2.97064 2.618 2.68934 2.8993C2.40804 3.18061 2.25 3.56214 2.25 3.95996V20.46C2.25 20.8578 2.40804 21.2393 2.68934 21.5206C2.97064 21.8019 3.35218 21.96 3.75 21.96H20.25C20.6478 21.96 21.0294 21.8019 21.3107 21.5206C21.592 21.2393 21.75 20.8578 21.75 20.46V3.95996C21.75 3.56214 21.592 3.18061 21.3107 2.8993C21.0294 2.618 20.6478 2.45996 20.25 2.45996ZM20.25 20.46H3.75V3.95996H20.25V20.46ZM9 10.71V16.71C9 16.9089 8.92098 17.0996 8.78033 17.2403C8.63968 17.3809 8.44891 17.46 8.25 17.46C8.05109 17.46 7.86032 17.3809 7.71967 17.2403C7.57902 17.0996 7.5 16.9089 7.5 16.71V10.71C7.5 10.511 7.57902 10.3203 7.71967 10.1796C7.86032 10.039 8.05109 9.95996 8.25 9.95996C8.44891 9.95996 8.63968 10.039 8.78033 10.1796C8.92098 10.3203 9 10.511 9 10.71ZM17.25 13.335V16.71C17.25 16.9089 17.171 17.0996 17.0303 17.2403C16.8897 17.3809 16.6989 17.46 16.5 17.46C16.3011 17.46 16.1103 17.3809 15.9697 17.2403C15.829 17.0996 15.75 16.9089 15.75 16.71V13.335C15.75 12.8377 15.5525 12.3608 15.2008 12.0091C14.8492 11.6575 14.3723 11.46 13.875 11.46C13.3777 11.46 12.9008 11.6575 12.5492 12.0091C12.1975 12.3608 12 12.8377 12 13.335V16.71C12 16.9089 11.921 17.0996 11.7803 17.2403C11.6397 17.3809 11.4489 17.46 11.25 17.46C11.0511 17.46 10.8603 17.3809 10.7197 17.2403C10.579 17.0996 10.5 16.9089 10.5 16.71V10.71C10.5009 10.5263 10.5693 10.3493 10.692 10.2126C10.8148 10.0759 10.9834 9.98906 11.166 9.96848C11.3485 9.9479 11.5323 9.99504 11.6824 10.101C11.8325 10.2069 11.9385 10.3642 11.9803 10.5431C12.4877 10.1989 13.0792 9.99943 13.6914 9.96607C14.3036 9.93272 14.9133 10.0667 15.455 10.3538C15.9968 10.6408 16.4501 11.07 16.7664 11.5952C17.0826 12.1204 17.2498 12.7219 17.25 13.335ZM9.375 8.08496C9.375 8.30747 9.30902 8.52497 9.1854 8.70998C9.06179 8.89498 8.88609 9.03918 8.68052 9.12433C8.47495 9.20947 8.24875 9.23175 8.03052 9.18834C7.81229 9.14494 7.61184 9.03779 7.4545 8.88046C7.29717 8.72312 7.19002 8.52267 7.14662 8.30444C7.10321 8.08621 7.12549 7.86001 7.21064 7.65444C7.29578 7.44888 7.43998 7.27317 7.62498 7.14956C7.80999 7.02594 8.0275 6.95996 8.25 6.95996C8.54837 6.95996 8.83452 7.07849 9.0455 7.28947C9.25647 7.50044 9.375 7.78659 9.375 8.08496Z"
                  fill="var(--joy-palette-text-primary)"
                />
              </svg>
            </Avatar>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
