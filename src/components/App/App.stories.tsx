import React from "react";
import App from "./App";
import { action } from '@storybook/addon-actions';
const { Button } = require('@storybook/react/demo');

export const hil = () => <App name="Hil" />
export const stephen = () => <App name="Stephen" />


export default {
  title: 'App',
  component: App,
};

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);