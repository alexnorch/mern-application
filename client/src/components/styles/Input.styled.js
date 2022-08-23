import styled from 'styled-components'

const StyledInputGroup = styled.div`
    margin-bottom: 15px;

    label {
        display: block;
        margin-bottom: 5px;
    }

    input {
        padding: 10px 5px;
        border-radius: 4px;
        border: 2px solid ${({theme}) => theme.colors.primary.grey};
        background-color: ${({theme}) => theme.colors.primary.white};
        width: 100%;
        outline: none;
        transition: all 0.3s ease;

        &:focus {
            border: 2px solid ${({theme}) => theme.colors.secondary.shamrock};
            box-shadow: 0px 0px 5px 2px rgba(43, 122, 120, 0.4);
        }

        &:hover {
            box-shadow: 0px 0px 5px 2px rgba(127, 127, 127,0.4);
        }

        &:disabled {
            pointer-events: none;
            background-color: ${({theme}) => theme.colors.primary.shamrock};
            box-shadow: 0 0 7px 2px ${({theme}) => theme.shadows.shamrock};
            border: none;
            color: ${({theme}) => theme.colors.primary.white};
        }
    }
`

export default StyledInputGroup;