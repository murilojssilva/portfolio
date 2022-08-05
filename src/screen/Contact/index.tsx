import { FaEnvelope } from "react-icons/fa";
import { Button } from "../../components/Button";
import InputMask from "react-input-mask";
import { Form } from "@unform/web";
import Select from "react-select";
import {
  ContactContainer,
  ButtonSendEmailContainer,
  ContactItemsContainer,
} from "./styles";
import { useState } from "react";
import { Input } from "../../components/Form/Input";

export function Contact() {
  const [mask, setMask] = useState("(99) 99999-9999");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    console.log("oi");
  }

  const initialData = {
    first_name: "Murilo",
    email: "murilojssilva@outlook.com",
  };

  const options = [
    { value: "", label: "" },
    { value: "E-mail", label: "E-mail" },
    { value: "WhatsApp", label: "WhatsApp" },
  ];

  return (
    <ContactContainer>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <ContactItemsContainer>
          <Input name="first_name" />
          <Input name="last_name" />
        </ContactItemsContainer>
        <ContactItemsContainer>
          <Input name="email" />
          <InputMask
            name="phone"
            placeholder="(99)99999-9999"
            mask={mask}
            onBlur={(e) => {
              if (e.target.value.replace("_", "").length === 14) {
                setMask("(99) 9999-9999");
              }
            }}
            onFocus={(e) => {
              if (e.target.value.replace("_", "").length === 15) {
                setMask("(99) 99999-9999");
              }
            }}
          ></InputMask>
        </ContactItemsContainer>

        <Select options={options} defaultValue={options[0]} />

        <Input name="message" />
        <ButtonSendEmailContainer>
          <Button
            onClick={() => handleSubmit}
            icon={<FaEnvelope />}
            content="Enviar mensagem"
            hasLink={true}
          />
        </ButtonSendEmailContainer>
      </Form>
    </ContactContainer>
  );
}
