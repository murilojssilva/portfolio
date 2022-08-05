import { useCallback, useEffect, useState } from "react";

import { ContactContainer, ContactItemsContainer } from "./styles";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { phoneNumber } from "../../utils/validations";
import { normalizePhoneNumber } from "../../utils/masks";
import { FaEnvelope } from "react-icons/fa";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactWay: string;
  message: string;
}

let schema = yup.object().shape({
  firstName: yup.string().required("Nome é obrigatório."),
  lastName: yup.string().required("Sobrenome é obrigatório."),
  email: yup
    .string()
    .email("Insira um e-mail válido.")
    .required("Email é obrigatório."),
  contactWay: yup.string().required("Forma de contato é obrigatória."),
  phone: yup
    .string()
    .matches(phoneNumber, "Insira um telefone válido")
    .required("Telefone é obrigatório."),
  message: yup.string().required("Mensagem é obrigatório."),
});

export function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(() => {
    alert("Dados inseridos com sucesso!");
    console.log("Oi");
  }, []);

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  return (
    <ContactContainer onSubmit={handleSubmit(onSubmit)}>
      <ContactItemsContainer>
        <label htmlFor="firstName">
          <p>Nome</p>
          <input
            placeholder="Digite aqui o nome da sua empresa"
            type="text"
            id="firstName"
            {...register("firstName")}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </label>
        <label htmlFor="last_name">
          <p>Sobrenome</p>
          <input
            placeholder="Sobrenome"
            type="text"
            id="lastName"
            {...register("lastName")}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </label>
      </ContactItemsContainer>
      <ContactItemsContainer>
        <label htmlFor="email">
          <p>E-mail</p>
          <input
            placeholder="email@contato.com"
            type="text"
            id="email"
            {...register("email")}
          />{" "}
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <label htmlFor="phone">
          <p>Telefone</p>

          <input
            placeholder="( )_____-____"
            type="text"
            id="phone"
            {...register("phone")}
          />
          {errors.phone ? <span>{errors.phone.message}</span> : <span></span>}
        </label>
      </ContactItemsContainer>

      <label htmlFor="">
        <p>Forma de contato</p>
        <select {...register("contactWay")} id="contactWay">
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="E-mail">E-mail</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
        {errors.contactWay ? (
          <span>{errors.contactWay.message}</span>
        ) : (
          <span></span>
        )}
      </label>
      <label htmlFor="message">
        <p>Mensagem</p>
        <textarea
          placeholder="Mensagem"
          id="message"
          {...register("message")}
        />
        {errors.message && <span>{errors.message.message}</span>}
      </label>
      <button>
        <FaEnvelope />
        Enviar mensagem
      </button>
    </ContactContainer>
  );
}
