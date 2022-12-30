import React, { ChangeEvent, useState } from "react";
import { useAsyncDebounce } from "react-table";
import styled from "styled-components";

export default function DodreamFilter({ globalFilter, setGlobalFilter }: any) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };
  return (
    <Input>
      <input placeholder="산책로를 검색해보세요!" value={value || ""} onChange={handleChange} />
      <button value={value || ""} onClick={handleClick}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.5 0C4.71878 0 0 4.71878 0 10.5C0 16.2812 4.71878 21 10.5 21C13.122 21 15.5175 20.022 17.3613 18.4219L18 19.0605V21L27 30L30 27L21 18H19.0605L18.4219 17.3613C20.022 15.5175 21 13.122 21 10.5C21 4.71878 16.2812 0 10.5 0ZM10.5 3C14.6599 3 18 6.3401 18 10.5C18 14.6599 14.6599 18 10.5 18C6.3401 18 3 14.6599 3 10.5C3 6.3401 6.3401 3 10.5 3Z"
            fill="#008037"
          />
        </svg>
      </button>
    </Input>
  );
}

const Input = styled.label`
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  input {
    padding: 0 15px;
    width: 230px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    @media screen and (max-width: 870px) {
      width: 80%;
    }

    ::placeholder {
      font-weight: 400;
      line-height: 24px;
      display: flex;
      align-items: flex-end;
      color: #b9c6cb;
    }
  }
  button {
    position: absolute;
    width: 35px;
    background-color: transparent;
    position: absolute;
    right: 3%;
    bottom: -15px;
    @media screen and (max-width: 870px) {
      right: 10%;
    }
    &:hover {
      background-color: transparent;
      transform: scale(1.1);
    }
  }
`;
