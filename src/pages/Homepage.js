import React from 'react';
import styled from 'styled-components';
import FormComponent from '../components/FormComponent';

const StyledTitle = styled.div`
    color: #61dafb;
    font-weight: 600;
    font-size: 2.5em;
    margin-top: 4%;
`;

const Homepage = () => {
    return (
        <div>
            <StyledTitle>Badminton Cost Calculator</StyledTitle>

            <FormComponent />
        </div>
    );
};

export default Homepage;
