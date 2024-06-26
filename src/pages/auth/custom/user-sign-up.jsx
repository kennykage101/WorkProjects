import * as React from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Tab from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import Tabs from '@mui/joy/Tabs';
import { Helmet } from 'react-helmet-async';

// import { useSearchParams } from 'react-router-dom';

import { config } from '@/config';
import { paths } from '@/paths';
import { UserSignUpForm } from '@/components/auth/custom/user-sign-up-form';
import { SplitLayout } from '@/components/auth/split-layout';
import { RouterLink } from '@/components/core/link';
import { DynamicLogo } from '@/components/core/logo';

const metadata = {
  title: `Sign Up | Custom Auth | ${config.site.name}`,
};

export function Page() {
  //   const [searchParams] = useSearchParams();
  // const login = searchParams.get('login');
  //   const type = searchParams.get('type');

  return (
    <React.Fragment>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <SplitLayout>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ justifyContent: 'center' }}>
            <Box component={RouterLink} href={paths['home']} sx={{ display: 'inline-block', fontSize: 0 }}>
              <DynamicLogo colorDark="light" colorLight="dark" height={32} width={154} />
            </Box>
          </Stack>
          <Tabs value="sign-up" variant="custom">
            <TabList>
              <Tab component={RouterLink} href={`${paths['auth.custom.sign-in.user']}`} value="sign-in">
                Sign In
              </Tab>
              <Tab component={RouterLink} href={paths['auth.custom.sign-up.user']} value="sign-up">
                Create Account
              </Tab>
            </TabList>
          </Tabs>
          <UserSignUpForm />
        </Stack>
      </SplitLayout>
    </React.Fragment>
  );
}
