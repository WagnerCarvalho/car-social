import React from 'react';
import { Container, ViewData, TextName, TextEmail } from '../ContentProfile/styles'

function ContentProfile(profile) {  

    console.log(profile)

    return (
      <Container>
          <ViewData>
            <TextEmail>{profile.data.email}</TextEmail>
            <TextName>{profile.data.name}</TextName> 
          </ViewData>
      </Container>
    );
}

export default ContentProfile
