import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    WhatsApp,
    Pinterest,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";

  const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })} 
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Pam Oh Herbs</Logo>
        <Desc>
        At Pam Oh Herbs, we are all about improving quality of lives, growing awareness in communities we serve, and improving the efficiency of traditional herbal remedies with our organic medicinal teas and skincare products.

We provide you the tools and knowledge in perfecting a healthier, more beautiful you while protecting our planet resources.

While gentle on the environment, Pam Oh Herbs organic ingredients can be easily sourced back to their ethical and natural origins. That is our promise to you.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Book Consult</ListItem>
        
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          {/* <ListItem>Wishlist</ListItem> */}
          {/* <ListItem>Terms</ListItem> */}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <WhatsApp style={{marginRight:"10px"}}/> 587-222-9887
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 844-HERB-PAM
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> info@pamohherbs.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;