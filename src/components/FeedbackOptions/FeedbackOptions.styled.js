import styled from "styled-components";

export const StyledBtnList = styled.ul`
    display: flex;
    gap: 10px;
`;

export const StyledBtn = styled.button`
    padding: 5px 10px;
    font-weight: 700;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #B0E0E6;
    }
`;