import Homepage from './pages/Homepage';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import CostPage from './pages/CostPage';

const Body = styled.body`
    margin: 0;
    padding: 0;
`;

const BodyWrapper = styled.body`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`;

function App() {
    return (
        <Body>
            <BodyWrapper>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cost" element={<CostPage />} />
                </Routes>
            </BodyWrapper>
        </Body>
    );
}

export default App;
