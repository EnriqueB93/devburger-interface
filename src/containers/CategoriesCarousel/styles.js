import styled from 'styled-components';

export const Container = styled.div`

.carousel-item{
padding-right: 40px;

}

padding-left: 30px;
`;
export const Title = styled.h2`

text-align: center;
font-weight: 800;
font-size:32px;
color: #9758A6;
position: relative;
padding-bottom: 12px;
margin-bottom: 40px;


&::after{
    content: "";
    height: 4px;
    width: 56px;
    background-color: #9758A6;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 28px);
}

`;

export const ContainerItems = styled.div`
background: url('${(props) => props.$imageurl}');
background-position: center;
background-size: cover;
width: 100%;
height: 230px;
border-radius: 10px;
display: flex;
align-items: center;

p{
    color: #fff;
    padding: 10px 37px;
    background-color:rgba(0, 0, 0, 0.49);
    border-radius: 30px;
    font-family: Poppins;
    font-size: 22.45px;
    font-weight: 700;
    margin-top:100px


}
`;
