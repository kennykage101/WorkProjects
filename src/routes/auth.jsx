import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Page as CustomAuthResetPasswordPage } from '@/pages/auth/custom/reset-password';
import { Page as CustomAuthAgentSignInPage } from '@/pages/auth/custom/agent-sign-in';
import { Page as CustomAuthAgentSignUpPage } from '@/pages/auth/custom/agent-sign-up';
import { Page as CustomAuthUserSignInPage } from '@/pages/auth/custom/user-sign-in';
import { Page as CustomAuthUserSignUpPage } from '@/pages/auth/custom/user-sign-up';
import { Page as SupabaseAuthCallbackPage } from '@/pages/auth/supabase/callback';
import { Page as SupabaseAuthResetPasswordSentPage } from '@/pages/auth/supabase/recover-link-sent';
import { Page as SupabaseAuthResetPasswordPage } from '@/pages/auth/supabase/reset-password';
import { Page as SupabaseAuthSignInPage } from '@/pages/auth/supabase/sign-in';
import { Page as SupabaseAuthSignUpPage } from '@/pages/auth/supabase/sign-up';
import { Page as SupabaseAuthSignUpConfirmPage } from '@/pages/auth/supabase/sign-up-confirm';
import { Page as SupabaseAuthUpdatePasswordPage } from '@/pages/auth/supabase/update-password';
import { AuthStrategy } from '@/lib/auth/strategy';
import { AuthGuard } from '@/components/auth/auth-guard';
import { GuestGuard } from '@/components/auth/guest-guard';
import { StrategyGuard } from '@/components/auth/strategy-guard';

export const routes = [
  {
    path: 'auth/custom',
    element: (
      <StrategyGuard expected={AuthStrategy.CUSTOM}>
        <Outlet />
      </StrategyGuard>
    ),
    children: [
      {
        path: 'reset-password',
        element: (
          <GuestGuard>
            <CustomAuthResetPasswordPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-in/agent',
        element: (
          <GuestGuard>
            <CustomAuthAgentSignInPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-up/agent',
        element: (
          <GuestGuard>
            <CustomAuthAgentSignUpPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-in/user',
        element: (
          <GuestGuard>
            <CustomAuthUserSignInPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-up/user',
        element: (
          <GuestGuard>
            <CustomAuthUserSignUpPage />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: 'auth/supabase',
    element: (
      <StrategyGuard expected={AuthStrategy.SUPABASE}>
        <Outlet />
      </StrategyGuard>
    ),
    children: [
      {
        path: 'callback',
        element: <SupabaseAuthCallbackPage />,
      },
      {
        path: 'reset-password',
        element: (
          <GuestGuard>
            <SupabaseAuthResetPasswordPage />
          </GuestGuard>
        ),
      },
      {
        path: 'recover-link-sent',
        element: (
          <GuestGuard>
            <SupabaseAuthResetPasswordSentPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-in',
        element: (
          <GuestGuard>
            <SupabaseAuthSignInPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-up',
        element: (
          <GuestGuard>
            <SupabaseAuthSignUpPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-up-confirm',
        element: (
          <GuestGuard>
            <SupabaseAuthSignUpConfirmPage />
          </GuestGuard>
        ),
      },
      {
        path: 'update-password',
        element: (
          <AuthGuard>
            <SupabaseAuthUpdatePasswordPage />
          </AuthGuard>
        ),
      },
    ],
  },
];
