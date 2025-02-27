import styled from 'styled-components';

export const ProductImage = styled.img`

width: 80px;
height: 80px;
border-radius:16px;

`;
export const ButtonGrup = styled.div`

display: flex;
align-items: center;
gap: 12px;

button{display: flex;
align-items: center;
justify-content: center;
font-size: 21px;
font-weight: bold;
width: 32px;
height: 32px;
background-color: ${(props) => props.theme.purple};
color: ${(props) => props.theme.white};
border-radius: 5px;
border: none;
transition: all 0.4ms;

&:hover{
    background-color: ${(props) => props.theme.secondDarkPurple};
}

}

`;
export const EmpyCart = styled.p`
font-size:20px;
font-weight: bold;
text-align: center;
`;

export const TotalPrice = styled.p`
font-weight: bold;

`;

export const TrashButton = styled.img`
width: 24px;        
height: 24px;
cursor: pointer;
`;
