import { FaEnvelope } from "react-icons/fa";
import { Button } from "../../components/Button";
import InputMask from "react-input-mask";
import {
  ContactContainer,
  ButtonSendEmailContainer,
  ContactItemsContainer,
} from "./styles";
import { useState } from "react";

export function Contact() {
  const [mask, setMask] = useState("(99) 99999-9999");
  return (
    <ContactContainer>
      <form>
        <ContactItemsContainer>
          <input placeholder="Nome" name="first_name" type="text" />
          <input placeholder="Sobrenome" name="last_name" type="text" />
        </ContactItemsContainer>
        <ContactItemsContainer>
          <input placeholder="E-mail" type="email" />
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
              if (e.target.value.replace("_", "").length === 14) {
                setMask("(99) 99999-9999");
              }
            }}
          ></InputMask>
        </ContactItemsContainer>
        <select name="contact_form">
          <option disabled selected value="">
            Melhor forma para contato
          </option>
          <option value="E-mail">E-mail</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
        <textarea placeholder="Mensagem" />
        <ButtonSendEmailContainer>
          <Button
            icon={<FaEnvelope />}
            content="Enviar mensagem"
            hasLink={true}
          />
        </ButtonSendEmailContainer>
      </form>
    </ContactContainer>
  );
}
