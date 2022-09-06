import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Styles from "./ContactForm.styles";
import { Text } from "@/components/Text";
import { theme } from "@/theme";
import { Input } from "@/components/Input";
import { Button } from "@/components/Buttons/Button";
import SendIcon from "@/assets/icons/Send.svg";
import { Modal } from "@/components/Modal";
import emailjs from "emailjs-com";

interface FormInput {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [successSend, setSuccessSend] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const closeHandler = () => {
    setSuccessSend(false);
  };

  const onSubmit = async (data: FormInput) => {
    emailjs.init("user_TTftxeaZAez3t35MhLYwD");

    const service_id = "service_tbumlxg";
    const template_id = "template_thyuhj8";
    const user_id = "user_TTftxeaZAez3t35MhLYwD";
    const template_params = {
      name: data.fullName,
      email: data.email,
      message: data.message,
    };

    emailjs.send(service_id, template_id, template_params, user_id);

    setSuccessSend(true);
    reset();
  };

  return (
    <Styles.Root>
      {successSend && <Modal closeHandler={closeHandler} />}
      <Styles.Content>
        <Styles.Girting>
          <Text
            as="p"
            fontSize={["sm", "md"]}
            color={theme.colors.black[700]}
            letterSpacing="0.1em"
            fontFamily=""
          >
            SAY HELLO
          </Text>
          <Text as="h3" fontSize={["h5", "h3"]} color={theme.colors.black[900]}>
            Make an appointment for a consultation
          </Text>
        </Styles.Girting>
        <Styles.Form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact-form"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact-form" />
          <Input
            register={register("fullName", {
              required: "Enter your name",
            })}
            type="text"
            placeholder="Enter your fullname"
            label="Full Name"
            name="fullName"
            error={errors.fullName}
          />
          <Input
            register={register("email", {
              required: "Enter your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
            label="Email"
            name="email"
            error={errors.email}
          />
          <Input
            register={register("message", { required: "Write your message" })}
            type="textarea"
            placeholder="Enter your message"
            label="Message"
            name="message"
            error={errors.message}
          />
          <Button
            type="submit"
            endIcon={<SendIcon />}
            onClick={handleSubmit(onSubmit)}
          >
            Send
          </Button>
          <Text
            as="p"
            fontSize="sm"
            fontWeight="normal"
            color={theme.colors.black[700]}
          >
            By using the form, you are agree to the processing of your data to
            conduct consultations and present offers.
          </Text>
        </Styles.Form>
      </Styles.Content>
    </Styles.Root>
  );
};

export { ContactForm };
