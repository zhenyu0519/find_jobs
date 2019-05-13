/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Weather from '../../components/Weather'

export default function HomePage() {
  return (
    <React.Fragment>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
    <Weather />
    </React.Fragment>
    );
  }
