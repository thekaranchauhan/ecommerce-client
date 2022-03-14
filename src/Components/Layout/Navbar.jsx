import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../../Store/Actions/Auth";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export default function Navbar() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecommerce</Logo>
        </Center>
        <Right>
          {!auth.isAuthenticated && (
            <>
              <MenuItem onClick={() => navigate("/register")}>
                Register
              </MenuItem>
              <MenuItem>Sign In</MenuItem>
            </>
          )}

          <MenuItem>
            <Badge>
              <ShoppingCartOutlined />
            </Badge>
            My Cart
          </MenuItem>
          {auth.isAuthenticated && (
            <>
              <MenuItem onClick={logOut}>Log Out</MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}
