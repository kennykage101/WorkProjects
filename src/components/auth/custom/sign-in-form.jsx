'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/joy/Alert';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Eye as EyeIcon } from '@phosphor-icons/react/dist/ssr/Eye';
import { EyeSlash as EyeSlashIcon } from '@phosphor-icons/react/dist/ssr/EyeSlash';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z as zod } from 'zod';

import { paths } from '@/paths';
import { authClient } from '@/lib/auth/custom/client';
import { useUser } from '@/hooks/use-user';
import { RouterLink } from '@/components/core/link';


const schema = zod.object({
  username: zod.string().min(1, { message: 'Username is required' }),
  password: zod.string().min(6, { message: 'Invalid password' }),
});

const defaultValues = {
  username: '',
  password: '',
};



export function SignInForm() {
  const navigate = useNavigate();
  const { checkSession } = useUser();
  const [showPassword, setShowPassword] = React.useState();
  const [isPending, setIsPending] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });


  const onSubmit = React.useCallback(
    async (values) => {
      setIsPending(true);

      const { error } = await authClient.signInWithPassword(values);

      if (error) {
        setError('root', {
          type: 'server',
          message: error,
        });
        setIsPending(false);
        return;
      }

      // Update the user context state
      await checkSession();

      // The page guard will redirect to the dashboard if the user is authenticated.
      navigate(0);
    },
    [navigate, setError, checkSession]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <FormControl color={errors.username ? 'danger' : undefined}>
            <FormLabel>Username</FormLabel>
            <Input type="text" {...register('username')} />
            {errors.username ? <FormHelperText>{errors.username.message}</FormHelperText> : null}
          </FormControl>
          <FormControl color={errors.password ? 'danger' : undefined}>
            <FormLabel>Password</FormLabel>
            <Input
              endDecorator={
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <EyeSlashIcon style={{ fontSize: 'var(--Icon-fontSize)' }} weight="bold" />
                  ) : (
                    <EyeIcon style={{ fontSize: 'var(--Icon-fontSize)' }} weight="bold" />
                  )}
                </IconButton>
              }
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
            />
            {errors.password ? <FormHelperText>{errors.password.message}</FormHelperText> : null}
          </FormControl>
          <div>
            <Link component={RouterLink} href={paths['auth.custom.reset-password']}>
              Fogot password?
            </Link>
          </div>
          {errors.root ? <Alert color="danger">{errors.root.message}</Alert> : null}
          <Button disabled={isPending} fullWidth type="submit">
            Sign In
          </Button>
        </Stack>
        <Alert color="warning" variant="soft">
          <Typography fontSize="sm">
            Use <Typography fontWeight="lg">rene@devias.io</Typography> with password{' '}
            <Typography fontWeight="lg">Secret1</Typography>
          </Typography>
        </Alert>
      </Stack>
    </form>
  );
}
