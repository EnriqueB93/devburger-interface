import styled from 'styled-components';

export const Container = styled.div`

.carousel-item{
padding-right: 50px;

}
overflow-x:hidden;

.react-multi-carousel-list{
overflow: visible ;
}

padding-left: 40px;
padding-bottom: 40px;

`;

export const Title = styled.h2`
font-family: Poppins;
line-height: 48px;
text-align: center;
font-weight: 800;
font-size:32px;
color: #61A120;
position: relative;
padding: 20px 0;

&::after{
    content: "";
    height: 4px;
    width: 56px;
    background-color: #61A120;
    position: absolute;
    bottom: 0px;
    left: calc(50% - 28px);
}

`;
