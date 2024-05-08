'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Option, Select } from '@mui/joy';
import Alert from '@mui/joy/Alert';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import countryCodes from 'country-codes-list';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z as zod } from 'zod';

import { authClient } from '@/lib/auth/custom/client';
import { useUser } from '@/hooks/use-user';

const schema = zod.object({
  username: zod.string().min(1, { message: 'Username is required' }),
  fullName: zod.string().min(5, { message: 'Full Name is required' }),
  email: zod.string().min(1, { message: 'Email is required' }).email(),
  phoneNumber: zod.string().min(7, { message: 'Phone Number is required' }),
  agentId: zod.number().min(1, { message: 'Agent Id is required' }),
  roleId: zod.number().min(1, { message: 'Role Id is required' }),
});

const defaultValues = {
  username: '',
  fullName: '',
  email: '',
  phoneNumber: '',
  agentId: null,
  roleId: null,
};

export function UserSignUpForm() {
  const navigate = useNavigate();
  const { checkSession } = useUser();
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
      const { error } = await authClient.userSignUp(values);

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
      // navigate(0);
    },
    [navigate, setError, checkSession]
  );

  // const callingCodes = countryCodes.customList('countryCallingCode', '+{countryCallingCode}');


  // const codes = (
  //   <FormControl>
  //     <Select {...register('phoneNumber')} placeholder="+1" sx={{ marginLeft: -1.5 }}>
  //       {Object.values(callingCodes).map((code) => (
  //         <Option key={code} value={code}>
  //           {code}
  //         </Option>
  //       ))}
  //     </Select>
  //   </FormControl>
  // );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack spacing={2}>
            <FormControl color={errors.username ? 'danger' : undefined}>
              <FormLabel>Username</FormLabel>
              <Input {...register('username')} />
              {errors.username ? <FormHelperText>{errors.username.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.fullName ? 'danger' : undefined}>
              <FormLabel>Full Name</FormLabel>
              <Input {...register('fullName')} />
              {errors.fullName ? <FormHelperText>{errors.fullName.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.email ? 'danger' : undefined}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" {...register('email')} />
              {errors.email ? <FormHelperText>{errors.email.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.phoneNumber ? 'danger' : undefined}>
              <FormLabel>Phone Number</FormLabel>
              <Input type="text" {...register('phoneNumber')} />
              {errors.phoneNumber ? <FormHelperText>{errors.phoneNumber.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.agentId ? 'danger' : undefined}>
              <FormLabel>Agent Id</FormLabel>
              <Input type="number" {...register('agentId', { valueAsNumber: true })} />
              {errors.agentId ? <FormHelperText>{errors.agentId.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.roleId ? 'danger' : undefined}>
              <FormLabel>Role Id</FormLabel>
              <Input type="number" {...register('roleId', { valueAsNumber: true })} />
              {errors.roleId ? <FormHelperText>{errors.roleId.message}</FormHelperText> : null}
            </FormControl>

            {errors.root ? <Alert color="danger">{errors.root.message}</Alert> : null}
            <Button disabled={isPending} fullWidth type="submit">
              Create Account
            </Button>
          </Stack>
          <Alert color="warning" variant="soft">
            <Typography fontSize="sm">Created users are not persisted</Typography>
          </Alert>
        </Stack>
      </form>
    </>
  );
}
