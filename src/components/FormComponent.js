import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
`;

// const BirdieContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// `;

const StyledLabel = styled.label`
    font-weight: bold;
    margin-bottom: 1.3rem;
    color: #61dafb;
`;

const StyledInput = styled.input`
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid #61dafb;
    background-color: transparent;
    color: #61dafb;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;

    &:focus {
        border-color: #61dafb;
    }
`;

const StyledButton = styled.button`
    font-size: 1em;
    font-weight: 600;
    color: #fff;
    border: 2px solid #61dafb;
    border-radius: 99px;
    cursor: pointer;
    padding: 5%;
    background-color: transparent;
    min-width: 200px;

    &:hover {
        background-color: #61dafb;
    }
`;

const FormComponent = () => {
    const [formData, setFormData] = useState({
        courts: '0',
        courtCost: '0',
        hours: '0',
        birdieCost: '0',
        birdies: '0',
        players: '0',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => {
            return { ...data, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // cost calculations
        const { courts, courtCost, hours, birdieCost, birdies, players } =
            formData;
        const birdieTotal = birdies * birdieCost;
        const courtTotal = courtCost * courts * hours;
        const totalCost = (birdieTotal + courtTotal) / players;

        console.log(`birdie total>>> ${birdieTotal}`);
        console.log(`Court total>>> ${courtTotal}`);
        console.log(`Total cost>>> ${totalCost}`);
    };

    return (
        <StyledFormContainer>
            <StyledForm onSubmit={handleSubmit}>
                {/* Number of Players */}
                <StyledLabel htmlFor="players">Number of Players</StyledLabel>
                <StyledInput
                    type="text"
                    id="players"
                    name="players"
                    onChange={handleChange}
                    autoComplete="off"
                ></StyledInput>
                {/* Court numbers */}
                <StyledLabel htmlFor="courts">Number of Courts</StyledLabel>
                <StyledInput
                    type="text"
                    id="courts"
                    name="courts"
                    onChange={handleChange}
                    autoComplete="off"
                ></StyledInput>
                {/* Court costs each hour */}
                <StyledLabel htmlFor="courtCost">
                    Court Cost per hour
                </StyledLabel>
                <StyledInput
                    type="text"
                    id="courtCost"
                    name="courtCost"
                    onChange={handleChange}
                    autoComplete="off"
                ></StyledInput>
                {/* Hours */}
                <StyledLabel htmlFor="hours">Hours Rented</StyledLabel>
                <StyledInput
                    type="text"
                    id="hours"
                    name="hours"
                    onChange={handleChange}
                    autoComplete="off"
                ></StyledInput>
                {/* birdies */}

                {/* birdie section  */}

                <StyledLabel htmlFor="birdieCost">Birde Cost</StyledLabel>
                <StyledInput
                    type="text"
                    id="birdieCost"
                    name="birdieCost"
                    onChange={handleChange}
                    autoComplete="off"
                ></StyledInput>
                {/* numbers of birdies used  */}
                <StyledLabel htmlFor="birdies">Birdies used? </StyledLabel>
                <StyledInput
                    type="text"
                    id="birdies"
                    name="birdies"
                    onChange={handleChange}
                    autoComplete="off"
                ></StyledInput>

                <Link to="cost">
                    <StyledButton type="submit">Submit</StyledButton>
                </Link>
            </StyledForm>
        </StyledFormContainer>
    );
};

export default FormComponent;
