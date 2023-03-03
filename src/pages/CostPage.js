import React from 'react';
import styled from 'styled-components';

const StyledTexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const StyledTitle = styled.div`
    font-size: 30px;
    color: #fff;
`;

// const StyledTitle = styled.div`
// font-size: 2em,
// `;
const CostPage = () => {
    return (
        <StyledTexContainer>
            <StyledTitle>Each player owes:</StyledTitle>
        </StyledTexContainer>
    );
};

export default CostPage;
