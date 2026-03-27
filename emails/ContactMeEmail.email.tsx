import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface props {
  fullName: string;
  email: string;
  subject: string;
  description: string;
}

const ContactMeEmail = ({
  email = "Undefined Email",
  fullName = "Undefined Full Name",
  subject = "Undefined Subject",
  description = "Undefined Description",
}: props) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Heading style={heading}>{subject}</Heading>
            <Heading style={subHeading}>From: {fullName}</Heading>
            <Heading style={subHeading}>Email: {email}</Heading>
            <Text style={text}>{description}</Text>
          </Section>
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Your Site, Inc. All Rights Reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactMeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const content = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderRadius: "5px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#1a1a1a",
  textAlign: "center" as const,
  letterSpacing: "-1px",
};

const subHeading = {
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#1a1a1a",
  textAlign: "left" as const,
  letterSpacing: "-1px",
};

const text = {
  margin: "0 0 16px",
  color: "#484848",
  fontSize: "16px",
  lineHeight: "24px",
};

// const warning: CSSProperties = {
//   color: "#fffe00",
// };

// const button: CSSProperties = {
//   backgroundColor: "#5e6ad2",
//   borderRadius: "5px",
//   color: "#fff",
//   fontSize: "16px",
//   fontWeight: "bold",
//   textDecoration: "none",
//   textAlign: "center" as const,
//   display: "block",
//   width: "100%",
//   padding: "12px",
//   marginTop: "40px",
// };

const hr = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
};

const footer = {
  marginTop: "32px",
};

const footerText = {
  color: "#9ca299",
  fontSize: "14px",
  textAlign: "center" as const,
};
