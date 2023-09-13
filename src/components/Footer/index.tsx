import { styled } from "styled-components";

const Footer = () => {
    
    return (
        <>
            <Footer_footer>
                Todos direitos reservados &copy; 2023.
            </Footer_footer>
        </>
    )
}

const Footer_footer = styled.footer`
    font-size: 1.4rem;
    position: absolute;
    color: var(--color-secondary-light-1);
    bottom: 1rem;
    
    @media only screen and (max-width: 75rem) {
        display: none;
    }
`

export default Footer;