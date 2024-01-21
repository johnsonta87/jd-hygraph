"use client";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

const ContactForm = ({}: Props) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();
  const form = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current || "",
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {
          reset();
          window.scrollTo(0, 0);
          toast({
            status: "success",
            duration: 7000,
            isClosable: true,
            position: "top-left",
            render: () => (
              <Box color="white" p={3} bg="clay">
                Thank you {data.name}! Your message was sent successfully. I’ll
                be in touch soon!
              </Box>
            ),
          });
        },
        (error) => {
          toast({
            status: "error",
            duration: 7000,
            isClosable: true,
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="clay">
                Sorry, your message failed to send.
              </Box>
            ),
          });
        }
      );
  };

  return (
    <Box>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel fontSize="1rem">Name</FormLabel>
          <Input
            type="text"
            {...register("name", { required: true })}
            bg="white"
            borderRadius="0"
            borderColor={errors.name ? "red.500" : "#ddd"}
          />
          {errors.name && (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email)} mt="24px">
          <FormLabel fontSize="1rem">Email</FormLabel>
          <Input
            type="email"
            {...register("email", { required: true })}
            bg="white"
            borderRadius="0"
            borderColor={errors.email ? "red.500" : "#ddd"}
          />
          {errors.email && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.message)} mt="24px">
          <FormLabel fontSize="1rem">Message</FormLabel>
          <Textarea
            {...register("message", { required: true })}
            bg="white"
            borderRadius="0"
            borderColor={errors.message ? "red.500" : "#ddd"}
          />
          {errors.message && (
            <FormErrorMessage>Message is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button
          isLoading={isSubmitting}
          type="submit"
          bg="clay"
          borderRadius="0"
          color="white"
          textTransform="uppercase"
          fontWeight={400}
          fontSize="1rem"
          mt="24px"
          p="12px 24px"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
