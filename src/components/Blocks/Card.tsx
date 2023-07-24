import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProfile, removeProfile } from "../Utils/ApiCalls";

interface iData {
  name: string;
  email: string;
  age: number;
  bio: string;
  _id: string;
}

const Card = () => {
  const client = useQueryClient();
  const getAllProfile = useQuery({
    queryFn: getProfile,
    queryKey: ["users profile"],
  });
  const profiler = getAllProfile?.data?.data;

  const deleteProfile = useMutation({
    mutationFn: removeProfile,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["deleted"] });
      console.log("Profile Deleted");
    },
  });

  const handleDelete = (id: any) => {
    deleteProfile.mutate(id);
  };

  return (
    <>
      {profiler?.map((props: iData) => {
        return (
          <Container key={props._id}>
            <Wrapper>
              <Link to={`/details/${props._id}`}>
                <Initials>{props.name.charAt(0).toUpperCase()}</Initials>
              </Link>
              <NameAgeHold>
                <Name> {props.name} </Name>
                <Name>{props.age}</Name>
                <Link to={`/editprofile/${props._id}`}>
                  <Name
                    style={{
                      color: "blueviolet",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </Name>
                </Link>
                <Age onClick={() => handleDelete(props._id)}>DELETE</Age>
              </NameAgeHold>
            </Wrapper>
          </Container>
        );
      })}
    </>
  );
};

export default Card;

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 3px;
  width: 900px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Initials = styled.div`
  height: 35px;
  width: 35px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 800;
`;
const NameAgeHold = styled.div`
  display: flex;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0 10px;
  text-decoration: underline;
`;
const Age = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
  color: red;
  cursor: pointer;
`;
