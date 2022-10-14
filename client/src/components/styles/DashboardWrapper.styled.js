import styled from 'styled-components'

const StyledDashboardWrapper = styled.main`
    min-height: 100vh;
    position: relative;
    background-color: ${({theme}) => theme.colors.secondary.shamrock};
    transition: all 0.3s ease;

    .left {
        position: absolute;
        width: 13%;
        top: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .right {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 20px;
        width: ${props => props.isMenuOpen ? "100%": "87%"};
        transition: all 0.3s ease;
        background-color: ${({theme}) => theme.colors.secondary.white};
        border-radius: 35px 0 0 35px;
        overflow-y: scroll;
        max-height: 100vh;
    }
`

export default StyledDashboardWrapper;