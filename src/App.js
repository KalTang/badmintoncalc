import Homepage from './pages/Homepage';
import styled from 'styled-components';

const Body = styled.body`
    margin: 0;
    padding: 0;
`;

const BodyWrapper = styled.body`
    background-color: #282c34;
    min-height: 100vh;
`;

function App() {
    return (
        <Body>
            <BodyWrapper>
                <Homepage />
            </BodyWrapper>
        </Body>
    );
}

export default App;
