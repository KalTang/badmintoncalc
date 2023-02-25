import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 10%;
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #61dafb;
`;

const Input = styled.input`
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid #61dafb;
    background-color: transparent;
    color: #61dafb;
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2em;
`;

const FormComponent = () => {
    return (
        <FormContainer>
            <Form action="">
                {/* Court numbers */}
                <Label htmlfor="birde-cost">Number of Courts</Label>
                <Input type="text" id="courts" name="courts"></Input>
                {/* Court costs each hour */}
                <Label for="birde-cost">Court Cost per hour</Label>
                <Input type="text" id="ccost" name="ccost"></Input>
                {/* Hours */}
                <Label for="birde-cost">Hours Rented</Label>
                <Input type="text" id="hours" name="hours"></Input>
                {/* birdies */}
                <Label for="birde-cost">Birde Cost</Label>
                <Input type="text" id="birdyC" name="birdyC"></Input>
                {/* numbers of birdies used  */}
                <Label for="birde-cost">Birdies used? </Label>
                <Input type="text" id="birdies" name="birdies"></Input>
            </Form>
        </FormContainer>
    );
};

export default FormComponent;
