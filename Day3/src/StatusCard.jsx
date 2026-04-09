import styled from "styled-components";

const Card = styled.div`
  padding: 20px;
  color: white;
  border-radius: 8px;
  background-color: ${(props) =>
    props.type === "success" ? "green" : "red"};
`;

function StatusCard({ type }) {
  return <Card type={type}>{type} message</Card>;
}

export default StatusCard;