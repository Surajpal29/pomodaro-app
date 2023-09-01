import { useContext } from "react";
import { styled, css } from "styled-components";
import { StateContext } from "../timer/StateProvider";

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleBtnClick = (index) => {
    setActiveTag(index);
  };

  return (
    <TagsContainer>
      {[`work`, `short break`, `long break`].map((tag, i) => (
        <Btn
          onClick={() => handleBtnClick(i)}
          activeTag={activeTag == i}
          key={i}
        >
          {tag}
        </Btn>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const Btn = styled.button`
  all: unset;
  textalign: center;
  height: 4rem;
  text-align: center;
  border-radius: 5rem;

  font-size: 2rem;
  flex: 1;

  ${({ activeTag }) =>
    activeTag &&
    css`
      background: ${(props) => props.theme.colors.primary};
    `}
`;
