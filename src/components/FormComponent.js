import React, { useState } from 'react';
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
    const [formData, setFormData] = useState({
        courts: '',
        courtCost: '',
        hours: '',
        birdieCost: '',
        birdies: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => {
            return { ...data, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                {/* Court numbers */}
                <Label htmlFor="courts">Number of Courts</Label>
                <Input
                    type="text"
                    id="courts"
                    name="courts"
                    onChange={handleChange}
                ></Input>
                {/* Court costs each hour */}
                <Label htmlFor="courtCost">Court Cost per hour</Label>
                <Input
                    type="text"
                    id="courtCost"
                    name="courtCost"
                    onChange={handleChange}
                ></Input>
                {/* Hours */}
                <Label htmlFor="hours">Hours Rented</Label>
                <Input
                    type="text"
                    id="hours"
                    name="hours"
                    onChange={handleChange}
                ></Input>
                {/* birdies */}
                <Label htmlFor="birdieCost">Birde Cost</Label>
                <Input
                    type="text"
                    id="birdieCost"
                    name="birdieCost"
                    onChange={handleChange}
                ></Input>
                {/* numbers of birdies used  */}
                <Label htmlFor="birdies">Birdies used? </Label>
                <Input
                    type="text"
                    id="birdies"
                    name="birdies"
                    onChange={handleChange}
                ></Input>

                <button type="submit">Submit</button>
            </Form>
        </FormContainer>
    );
};

export default FormComponent;
