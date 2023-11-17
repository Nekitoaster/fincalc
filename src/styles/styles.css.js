import styled from "styled-components";

const css = {
  HeaderContainer: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: #a663cc;
    padding: 0 30px;
  `,
  Logo: styled.div`
    font-weight: 600;
    font-size: 30px;
    color: #b9faf8;
  `,
  MenuList: styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
  `,
  MenuItem: styled.li`
    cursor: pointer;
    color: #b9faf8;
    margin-right: 10px;
    border-bottom: 2px solid transparent;
    transition: border-bottom 400ms ease;
    &:last-child {
      margin-right: 0px;
    }
    &:hover {
      border-bottom: 2px solid #b9faf8;
    }
  `,
  FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: #a663cc;
    padding: 0 30px;
  `,
  FooterText: styled.p`
    color: #b9faf8;
  `,
  BCGContainer: styled.div`
    margin: 30px auto;
    width: 100%;
    min-height: calc(100vh - 180px);
  `,
  ContentContainer: styled.div`
    padding: 20px;
    border-radius: 15px;
    margin: auto;
    width: 90%;
    background: #464644;
    border: 2px solid rgb(45, 45, 44);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  `,
  FormContainer: styled.form`
    margin: 0 auto;
    width: 840px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background: whitesmoke;
    padding: 25px;
  `,
  Input: styled.input`
    font-size: 18px;
    padding: 0 7px;
    border-radius: 7px;
    border: none;
    width: 650px;
    height: 40px;
    margin-bottom: 15px;
    background: #b298dc;
    &:last-child {
      margin-bottom: 0;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  `,
  Button: styled.button`
    cursor: pointer;
    border-radius: 7px;
    color: #b9faf8;
    font-weight: 500;
    background: #6f2dbd;
    border: none;
    height: 35px;
    padding: 0 20px;
    transition: transform 400ms ease;
    &:hover {
      transform: scale(1.1);
    }
  `,
  ButtonsLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 400px;
    margin: 0 auto;
    margin-top: 20px;
  `,
  DataContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 840px;
    height: auto;
    max-height: 600px;
    background: #6f2dbd;
    border-radius: 8px;
    box-shadow: 0 0 5px #b9faf8;
    margin: 40px auto 40px;
    padding: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
  `,
  ContentLine: styled.div`
    border-radius: 10px;
    background: whitesmoke;
    padding: 7px 20px 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  `,
  ContentCell: styled.span`
    display: block;
    width: ${(props) => props.width};
    font-size: 16px;
    text-align: center;
  `,
};

export default css;
