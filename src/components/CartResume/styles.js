import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  margin-bottom: 20px;


  *{
    color: #484848;
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: #484848;
      color: #ffffff;
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

    
    }

    .items {
     grid-area: items;
     padding-left: 20px;
           margin-top: 10px;

    }

    .items-price {
     grid-area: items-price; 
     padding-right: 20px;
          margin-top: 10px;


    }

    .delivery-tax {
     grid-area: delivery-tax;
     padding-left: 20px;
     margin-top: 10px;

    }

    .delivery-tax-price {
     grid-area: delivery-tax-price;
     padding-right: 20px;
          margin-top: 10px;


    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 100px;
    padding: 20px;

    *{
        color: #484848;
        font-weight: 700;
    }
  }
  
`;
