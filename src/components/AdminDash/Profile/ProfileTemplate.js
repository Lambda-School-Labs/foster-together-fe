import React from 'react'
import {
  Header,
  HeaderLeft,
  NameWrapper,
  Name,
  Role,
  Contact,
  ContactCard,
  ContactInfo,
  HeaderRight,
  ContentWrapper,
  ContentTitle,
  AppProgress,
  Activity,
} from './profileStyles'
import { Edit, Address, Email, Phone } from './profileIcons'
import Navigation from '../Navigation/Navigation'

const ProfileTemplate = props => {
  return (
    <>
      <Navigation />
      <Header>
        <HeaderLeft>
          <div>
            <NameWrapper>
              <Name>Jonathan Smith</Name>
              <Edit />
            </NameWrapper>
            <Role>Neighbor</Role>
          </div>
          <Contact>
            <ContactCard>
              <Address />
              <ContactInfo>
                2345 Waterfall St
                <br />
                Boulder CO 20304
              </ContactInfo>
            </ContactCard>
            <ContactCard>
              <Email />
              <ContactInfo>Johnsmith117@email.com</ContactInfo>
            </ContactCard>
            <ContactCard>
              <Phone />
              <ContactInfo>(555) 555-5555</ContactInfo>
            </ContactCard>
          </Contact>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </Header>
      <ContentWrapper>
        <AppProgress>
          <ContentTitle>Application Progress</ContentTitle>
        </AppProgress>
        <Activity>
          <ContentTitle>Activity</ContentTitle>
        </Activity>
      </ContentWrapper>
    </>
  )
}

export default ProfileTemplate
