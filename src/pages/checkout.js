import React from 'react';
import _ from 'lodash';
import {
  Container, Flex, Box, Lead, Text,
} from 'rebass';

import FormInputField from '../components/Form';
import CheckoutDetails from '../components/CheckoutDetails';
import Layout from '../components/layout';
import TakeMoney from '../components/TakeMoney';

const Checkout = () => {
  const personalInfoFormFields = [
    {
      id: 1, label: 'Title', type: 'radio', optional: '',
    },
    {
      id: 2,
      label: 'First Name',
      type: 'text',
      optional: '',
      name: 'firstname',
      value: 'John',
    },
    {
      id: 3,
      label: 'Last Name',
      type: 'text',
      optional: '',
      name: 'lastname',
      value: 'Doe',
    },
    {
      id: 4,
      label: 'Email address',
      type: 'email',
      optional: '',
      name: 'email',
      value: 'john@doe.com',
    },
  ];
  const addressFormFields = [
    {
      id: 1,
      label: 'First Name',
      type: 'text',
      optional: '',
      name: 'firstname',
      value: 'John',
    },
    {
      id: 2,
      label: 'Last Name',
      type: 'text',
      optional: '',
      name: 'lastname',
      value: 'Doe',
    },
    {
      id: 3,
      label: 'Company',
      type: 'text',
      optional: 'Optional',
      name: 'company',
      value: 'John Company',
    },
    {
      id: 4,
      label: 'Address',
      type: 'text',
      optional: '',
      name: 'address',
      value: '123, XYZ colony',
    },
    {
      id: 5,
      label: 'Address Complement',
      type: 'text',
      optional: 'Optional',
      name: 'address-line2',
      value: 'ABC',
    },
    {
      id: 6,
      label: 'City',
      type: 'text',
      optional: '',
      name: 'city',
      value: 'Some City',
    },
    {
      id: 7, label: 'State', type: 'select', optional: '',
    },
    {
      id: 8,
      label: 'Zip Code',
      type: 'number',
      optional: '',
      name: 'zipcode',
      value: '12345',
    },
    {
      id: 9, label: 'Country', type: 'select', optional: '',
    },
    {
      id: 10,
      label: 'Phone',
      type: 'number',
      optional: 'Optional',
      name: 'mobile',
      value: 1234567890,
    },
  ];
  return (
    <Layout>
      <Container fontSize={1}>
        <Flex flexWrap="wrap">
          <Box px={2} py={4} width={[1, 1, 5 / 7]}>
            <Container mb={3} py={3} px={4} style={{ boxShadow: '1px 1px 4px 1px rgba(158,158,158, 0.5)' }}>
              <Lead fontWeight="bold" mb={4}>
                Personal Info
              </Lead>
              {_.map(personalInfoFormFields, field => (
                <FormInputField
                  key={field.id}
                  label={field.label}
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  optional={field.Optional}
                />
              ))}
            </Container>
            <Container py={3} px={4} style={{ boxShadow: '1px 1px 4px 1px rgba(158,158,158, 0.5)' }}>
              <Lead fontWeight="bold" mb={4}>
                Address Info
              </Lead>
              {_.map(addressFormFields, field => (
                <FormInputField
                  key={field.id}
                  label={field.label}
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  optional={field.Optional}
                />
              ))}
            </Container>
          </Box>
          <Box p={3} pt={4} width={[1, 1, 2 / 7]}>
            <CheckoutDetails />
            <Container mt={2}>
              <Text textAlign="center">
                <TakeMoney />
              </Text>
            </Container>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Checkout;
