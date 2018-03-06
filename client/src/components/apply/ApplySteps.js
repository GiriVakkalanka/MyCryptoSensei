import React from 'react';
import { Step } from 'semantic-ui-react';

const steps = [
  {
    key: 'shipping',
    icon: 'truck',
    title: 'Shipping',
    description: 'Choose your shipping options'
  },
  {
    key: 'billing',
    active: false,
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information'
  },
  {
    key: 'faxing',
    active: true,
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information'
  },
  {
    key: 'runnning',
    active: false,
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information'
  }
];

const ApplySteps = () => <Step.Group items={steps} />;

export default ApplySteps;
