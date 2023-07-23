import { useState } from "react";
import { styled } from "styled-components";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createNewProfile } from "../Utils/ApiCalls";

const SubmmitProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");

  const client = useQueryClient();

  const uploadData = useMutation({
    mutationFn: createNewProfile,
    onSuccess: (data: any) => {
      client.invalidateQueries({ queryKey: ["newProfiles"] });
      console.log("Posted");
    },
  });

  const uploadAction = () => {
    uploadData.mutate({
      name,
      email,
      age,
      bio,
    });
  };

  return (
    <Container>
      <Wrapper>
        <TopInput>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log("Name", name);
            }}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("Email", email);
            }}
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              console.log("Age", age);
            }}
          />
        </TopInput>
        <textarea
          name="bio"
          placeholder="Enter Your Bio"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
            console.log("Bio", bio);
          }}
        ></textarea>
        <ButtomInput>
          <button onClick={uploadAction}>Create Profile</button>
        </ButtomInput>
      </Wrapper>
    </Container>
  );
};

export default SubmmitProfile;

const Container = styled.div``;
const Wrapper = styled.div`
  textarea {
    height: 60px;
    width: 97.5%;
  }
`;
const TopInput = styled.div`
  input {
    height: 35px;
    width: 300px;
    margin: 10px;
  }
`;
const ButtomInput = styled.div`
  button {
    width: 965px;
    background-color: #4285f4;
    height: 35px;
    border-radius: 3px;
    transition: all 350 ms;
    text-align: center;

    :hover {
      transform: scale(1.1);
    }
  }
`;
