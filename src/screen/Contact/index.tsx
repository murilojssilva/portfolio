import { useCallback, useEffect, useState } from "react";

import { ContactContainer } from "./styles";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { phoneNumber } from "../../utils/validations";
import { normalizePhoneNumber } from "../../utils/masks";
import { FaEnvelope } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactWay: string;
  message: string;
}

let schema = yup.object().shape({
  firstName: yup.string().required("Insira seu nome."),
  lastName: yup.string().required("Insira seu sobrenome."),
  email: yup
    .string()
    .email("Insira um e-mail válido.")
    .required("Email é obrigatório."),
  contactWay: yup.string().required("Selecione uma forma de contato."),
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
      <label htmlFor="firstName">
        <div>
          <p>Nome</p>
          {errors.firstName && (
            <span>
              <FiAlertCircle />
              {errors.firstName.message}
            </span>
          )}
        </div>

        <input
          placeholder="Nome"
          type="text"
          id="firstName"
          {...register("firstName")}
        />
      </label>
      <label htmlFor="last_name">
        <div>
          <p>Sobrenome</p>
          {errors.lastName && (
            <span>
              <FiAlertCircle />
              {errors.lastName.message}
            </span>
          )}
        </div>
        <input
          placeholder="Sobrenome"
          type="text"
          id="lastName"
          {...register("lastName")}
        />
      </label>

      <label htmlFor="email">
        <div>
          <p>E-mail</p>
          {errors.email && (
            <span>
              <FiAlertCircle /> {errors.email.message}
            </span>
          )}
        </div>
        <input
          placeholder="email@contato.com"
          type="text"
          id="email"
          {...register("email")}
        />{" "}
      </label>

      <label htmlFor="phone">
        <div>
          <p>Telefone</p>
          {errors.phone && (
            <span>
              <FiAlertCircle /> {errors.phone.message}
            </span>
          )}
        </div>
        <input
          placeholder="( )_____-____"
          type="text"
          id="phone"
          {...register("phone")}
        />
      </label>

      <label htmlFor="">
        <div>
          <p>Forma de contato</p>
          {errors.contactWay && (
            <span>
              <FiAlertCircle /> {errors.contactWay.message}
            </span>
          )}
        </div>

        <select {...register("contactWay")} id="contactWay">
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="E-mail">E-mail</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </label>
      <label htmlFor="message">
        <div>
          <p>Mensagem</p>
          {errors.message && (
            <span>
              <FiAlertCircle /> {errors.message.message}
            </span>
          )}
        </div>

        <textarea
          placeholder="Mensagem"
          id="message"
          {...register("message")}
        />
      </label>
      <button>
        <FaEnvelope />
        Enviar mensagem
      </button>
    </ContactContainer>
  );
}
