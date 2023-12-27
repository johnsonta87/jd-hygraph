"use client";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

const ContactForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box position="relative" top="-1em">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel fontSize="1rem">Name</FormLabel>
          <Input
            type="text"
            {...register("name", { required: true })}
            bg="white"
            borderRadius="0"
            borderColor={errors.name ? "red.500" : "#888"}
          />
          {errors.name && (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel fontSize="1rem">Email</FormLabel>
          <Input
            type="email"
            {...register("email", { required: true })}
            bg="white"
            borderRadius="0"
            borderColor={errors.email ? "red.500" : "#888"}
          />
          {errors.email && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.message)}>
          <FormLabel fontSize="1rem">Message</FormLabel>
          <Textarea
            {...register("message", { required: true })}
            bg="white"
            borderRadius="0"
            borderColor={errors.message ? "red.500" : "#888"}
          />
          {errors.message && (
            <FormErrorMessage>Message is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button
          mt={4}
          isLoading={isSubmitting}
          type="submit"
          bg="clay"
          borderRadius="0"
          color="white"
          textTransform="uppercase"
          fontWeight={400}
          fontSize="1rem"
          p="12px 24px"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
