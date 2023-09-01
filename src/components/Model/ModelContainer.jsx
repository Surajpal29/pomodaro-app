import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { StateContext } from "../timer/StateProvider";

const ModelContainer = ({ isOpen, onClose }) => {
  const {
    workTime,
    setWOrkTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
  } = useContext(StateContext);

  return (
    <Container>
      <ModelContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModelHeader>
          <ModelTitle>Settings</ModelTitle>
          <ModelCloseButton onClick={onClose}>
            <FaWindowClose fontSize="5rem" />
          </ModelCloseButton>
        </ModelHeader>
        <ModelBody>
          <Formik
            initialValues={{
              work: workTime / 60,
              short: shortBreakTime / 60,
              long: longBreakTime / 60,
            }}
            onSubmit={(values) => {
              setWOrkTime(values.work * 60);
              setShortBreakTime(values.short * 60);
              setLongBreakTime(values.long * 60);
              onClose();
            }}
          >
            <Form>
              <InputWraper>
                <FormControl>
                  <label htmlFor="work">Work</label>
                  <Field name="work" min="1" max="max" />
                </FormControl>
                <FormControl>
                  <label htmlFor="short">short Break</label>
                  <Field name="short" min="1" max="max" />
                </FormControl>
                <FormControl>
                  <label htmlFor="long">Long Break</label>
                  <Field name="long" min="1" max="max" />
                </FormControl>
              </InputWraper>
              <ButtonWraper>
                <ApplyButton type="submit">Apply</ApplyButton>
              </ButtonWraper>
            </Form>
          </Formik>
        </ModelBody>
      </ModelContent>
    </Container>
  );
};

export default ModelContainer;

const ButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;

const ApplyButton = styled.button`
padding:1rem 4rem;
font size:2rem;
color:white;
background:${(props) => props.theme.colors.primary};
border-radius:0.5rem;
cursor:pointer;
`;

const InputWraper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;
`;
const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 0.7rem;
  label {
    font-size: 2rem;
  }
  input {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid black;
    background: #ead8fc;
  }
`;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 150;
`;
const ModelContent = styled(motion.div)`
  width: 60rem;
  height: 40rem;
  background-color: #eeeee4;

  @media (max-width: 600px) {
    width: 90%;
    padding: 1rem;
  }
`;
const ModelHeader = styled.div`
  color: black;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
const ModelTitle = styled.h1`
  font-size: 5rem;
`;
const ModelCloseButton = styled.button`
  all: unset;
`;
const ModelBody = styled.div``;
