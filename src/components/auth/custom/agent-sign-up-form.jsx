'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Option } from '@mui/joy';
import Alert from '@mui/joy/Alert';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import countryCodes from 'country-codes-list';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z as zod } from 'zod';

import { authClient } from '@/lib/auth/custom/client';
import { useUser } from '@/hooks/use-user';

const schema = zod.object({
  name: zod.string().min(1, { message: 'Name is required' }),
  contactPerson: zod.string().min(1, { message: 'Contact is required' }),
  contactEmail: zod.string().min(1, { message: 'Email is required' }).email(),
  country: zod.string().min(1, { message: 'Please pick a country' }),
  city: zod.string().min(1, { message: 'City is required' }),
  typeId: zod.number().min(1, { message: 'Type Id is required' }),
});

const defaultValues = {
  name: '',
  contactPerson: '',
  contactEmail: '',
  country: '',
  city: '',
  typeId: null,
};

export function AgentSignUpForm() {
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
      const { error } = await authClient.agentSignUp(values);

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

  const callingCodes = countryCodes.customList('countryCode', '{countryNameEn}');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack spacing={2}>
            <FormControl color={errors.name ? 'danger' : undefined}>
              <FormLabel>Name</FormLabel>
              <Input {...register('name')} />
              {errors.name ? <FormHelperText>{errors.name.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.contactPerson ? 'danger' : undefined}>
              <FormLabel>Contact</FormLabel>
              <Input {...register('contactPerson')} />
              {errors.contactPerson ? <FormHelperText>{errors.contactPerson.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.contactEmail ? 'danger' : undefined}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" {...register('contactEmail')} />
              {errors.contactEmail ? <FormHelperText>{errors.contactEmail.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.country ? 'danger' : undefined}>
              <FormLabel>Country</FormLabel>
              <Select {...register('country')} placeholder="Choose a country">
                {Object.values(callingCodes).map((country) => (
                  <Option key={country} value={country}>
                    {country}
                  </Option>
                ))}
              </Select>
              {errors.country ? <FormHelperText>{errors.country.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.city ? 'danger' : undefined}>
              <FormLabel>City</FormLabel>
              <Input {...register('city')} />
              {errors.city ? <FormHelperText>{errors.city.message}</FormHelperText> : null}
            </FormControl>

            <FormControl color={errors.typeId ? 'danger' : undefined}>
              <FormLabel>Type Id</FormLabel>
              <Input type="number" {...register('typeId', { valueAsNumber: true })} />
              {errors.typeId ? <FormHelperText>{errors.typeId.message}</FormHelperText> : null}
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
