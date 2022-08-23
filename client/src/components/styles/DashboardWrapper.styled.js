import styled from 'styled-components'

const StyledDashboardWrapper = styled.main`
    display: flex;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.secondary.shamrock};

    .left {
        flex-basis: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .right {
        padding: 20px;
        flex-basis: calc(100% - 200px);
        background-color: ${({theme}) => theme.colors.secondary.white};
        border-radius: 35px 0 0 35px;
    }
`

export default StyledDashboardWrapper;