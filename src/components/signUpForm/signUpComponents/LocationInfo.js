import React from 'react'
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
  Select,
  Option,
} from '../styles/contactInfoStyles'
import { States } from './States'

const LocationInfo = ({ user, changeHandler }) => (
  <FormContainer>
    <FormGroup>
      <Input
        id='address'
        name='address'
        placeholder='Street Address'
        onChange={changeHandler}
        value={user.address}
      />
      <Label htmlFor='address'>Street name, and house/apt number</Label>
    </FormGroup>
    <FormGroup width='79%'>
      <Input
        id='city'
        name='city'
        placeholder='City'
        onChange={changeHandler}
        value={user.city}
        autoComplete='billing address-level2'
      />
      <Label htmlFor='city'>Which city do you live in?</Label>
    </FormGroup>
    <FormGroup width='19%'>
      <Select
        id='state'
        name='state'
        value={user.state}
        onChange={changeHandler}
      >
        <Option value='' disabled selected>
          State
        </Option>
        {States.map(state => (
          <Option key={state.value} value={state.value}>
            {state.label}
          </Option>
        ))}
      </Select>
    </FormGroup>
    <FormGroup width='79%'>
      <Input
        id='zip'
        name='zip'
        placeholder='Zip/Postal Code'
        onChange={changeHandler}
        value={user.zip}
      />
      <Label htmlFor='address'>Enter your 6-digit postal code</Label>
    </FormGroup>
  </FormContainer>
)

export default LocationInfo
